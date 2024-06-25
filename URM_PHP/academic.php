<?php

require 'db_connection.php';

header('Access-Control-Allow-Origin: http://localhost:3000'); // Replace '*' with the specific frontend origin (e.g., 'http://localhost:3000')
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
  header('Access-Control-Allow-Origin: *'); // Replace '*' with the specific frontend origin
  header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
  header('Access-Control-Allow-Headers: Content-Type');
  exit;
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

	$rawData = file_get_contents("php://input");

  // Convert the JSON data to an associative array
  $requestData = json_decode($rawData, true);

  $role = $requestData['role'];

  if($role === "Addfaculty"){
        
    $facultyName = $requestData['facultyName'];
    $subject = $requestData['subject'];
    $classtype = $requestData['classtype'];
    $hours = $requestData['hours'];
    $id = $requestData['id'];

    
    $result = $conn->query("SELECT AID FROM academia WHERE User_id='$id'");
    if ($result && $result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $aid = $row['AID'];

        
        $sql = "INSERT INTO faculty (fname, fsubject, class, hours, aid) VALUES ('$facultyName', '$subject', '$classtype', '$hours', '$aid')";

        if ($conn->query($sql) === TRUE) {
            echo "Faculty added successfully.";
            return json_encode(['message' => 'Faculty added successfully.']);
        } else {
            echo "Error: " . $sql . " " . $conn->error;
            return "Error: " . $sql . " " . $conn->error;
        }
    } else {
        echo "Error: Unable to retrieve AID from academia.";
        return "Error: Unable to retrieve AID from academia.";
    }
    //return json_encode(['message' => 'Form submitted successfully']);
    }elseif($role === "Jobposted"){
     
      $jobposition = $requestData['jobposition'];
      $jdesc = $requestData['jdesc'];
      $date = $requestData['date'];
      $location = $requestData['location'];
      $id=$requestData['id'];

       $sql = "INSERT INTO job_postings(j_desc, date, job_positions, location,Active, ID) VALUES ('$jdesc', '$date','$jobposition','$location','0','$id')";

       if ($conn->query($sql) === TRUE) {
        echo "Job posted successfully.";
        return json_encode(['message' => 'Job posted successfully.']);
      } else {
        echo "Error: " . $sql . " " . $conn->error;
        return "Error: " . $sql . " " . $conn->error;
      }
    }
    elseif($role === "AcademiaProfilechange"){
          $id=$requestData['id'];
          $institution_name = $requestData['institution_name'];
          $email = $requestData['email'];
          $research_focus_area = $requestData['research_focus_area'];
          $position = $requestData['position'];
          $desc = $requestData['desc'];
          $password = $requestData['password'];
          
          $sql1= "UPDATE users SET email = '$email' , password ='$password' WHERE ID = $id";
          $sql2 = "UPDATE academia  SET Aname = '$institution_name', Research_focus = '$research_focus_area', Positions = '$position', A_desc = '$desc'  WHERE 
          User_ID =(select Id from users where ID= '$id')";

          if ($conn->query($sql1) === TRUE && $conn->query($sql2) === TRUE) {
            echo "Profile updated successfully.";
            return json_encode(['message' => 'Profile updated successfully.']);
          } else {
            echo "Error: " . $sql . " " . $conn->error;
            return "Error: " . $sql . " " . $conn->error;
          }
      }
      elseif($role === "AcademiaJobdetailsupdate"){
            $jid=$requestData['jid'];
            $jobposition = $requestData['jobposition'];
            $jdesc = $requestData['jdesc'];
            $date = $requestData['date'];
            $location = $requestData['location'];
            
            $sql = "UPDATE job_postings 
            SET J_DESC = '$jdesc', DATE = '$date', JOB_POSITIONS = '$jobposition', LOCATION = '$location', ACTIVE = 0 
            WHERE JID = $jid";

            if ($conn->query($sql) === TRUE) {
              echo "Job updated successfully.";
              return json_encode(['message' => 'Job updated successfully.']);
            } else {
              echo "Error: " . $sql . " " . $conn->error;
              return "Error: " . $sql . " " . $conn->error;
            }
        }elseif($role === "Academiabookmark"){
             
                  $uid=$requestData['uid']; 
                  $id =$requestData['id'];                 
                    
                  $result1 = $conn->query("SELECT AID FROM academia WHERE User_id='$id'");
                  $result= $conn->query("SELECT User_id FROM urm_candidate WHERE UID='$uid'");
                  if (($result && $result->num_rows > 0)&&($result1 && $result1->num_rows > 0)) {
                      $row = $result->fetch_assoc();
                      $user_id = $row['User_id'];
                      $row = $result1->fetch_assoc();
                      $aid = $row['AID'];
                     
                  $sql = " INSERT INTO `FLAG_CANDIDATE` (`UID`, `AID`,`ID`)  VALUES (' $uid','$aid','$user_id') ";

                  if ($conn->query($sql) === TRUE) {
                    echo "Job updated successfully.";
                    return json_encode(['message' => 'Job updated successfully.']);
                  } else {
                    echo "Error: " . $sql . " " . $conn->error;
                    return "Error: " . $sql . " " . $conn->error;
                  }
    }
   
  }
}
  elseif($_SERVER['REQUEST_METHOD'] === 'GET'){
  $role = $_GET['role'];

          if ($role === "Fetchfaculty") {

                  $id = $_GET['id'];
                  $result = $conn->query("SELECT AID FROM academia WHERE User_id='$id'");
                  if ($result && $result->num_rows > 0) {
                      $row = $result->fetch_assoc();
                      $aid = $row['AID'];
              
                  $sql = "  select * from faculty where AID =' $aid' ";


                  $mysqli =mysqli_query($conn,$sql);
                  $json_data=array();
                  while($row = mysqli_fetch_assoc($mysqli))
                  {
                    $json_data[]=$row;
                  }
                  echo json_encode(['phpresult'=>$json_data]);
          }
        }
          elseif($role === "FlagCandidate"){
                   $id = $_GET['id'];
                  $result = $conn->query("SELECT AID FROM academia WHERE User_id='$id'");
                  if ($result && $result->num_rows > 0) {
                      $row = $result->fetch_assoc();
                      $aid = $row['AID'];
                    $sql = "SELECT ad.AID, urm.Uname, urm.UID, urm.Nationality, urm.Ethinicity, urm.Education, urm.Res_exp
                                FROM urm_candidate AS urm
                                JOIN FLAG_CANDIDATE AS fc ON urm.UID = fc.UID
                                JOIN academia AS ad ON fc.AID = ad.AId
                                WHERE ad.AId = '$aid'";
                    $mysqli =mysqli_query($conn,$sql);
                    $json_data=array();
                    while($row = mysqli_fetch_assoc($mysqli))
                    {
                      $json_data[]=$row;
                    }
                    echo json_encode(['phpresult'=>$json_data]);
                  }
          }
          elseif ($role === "AcademiaProfiledetails"){
                      $id = $_GET['id'];
                      $sql="select a.Aname,a.Research_focus,a.Positions,u.EMAIL from  academia as a join  users as u  on a.User_ID=u.ID where a.User_ID='$id'";
                      $mysqli =mysqli_query($conn,$sql);
                      $json_data=array();
                      while($row = mysqli_fetch_assoc($mysqli))
                      {
                        $json_data[]=$row;
                      }
                      echo json_encode(['phpresult'=>$json_data]);
          }
          elseif ($role === "Updateacademiaprofile"){
                        $id = $_GET['id'];
                        $sql="select a.Aname,a.Research_focus,a.Positions,a.A_Desc,u.EMAIL,u.PASSWORD from  academia as a join  users as u  on a.User_ID=u.ID where a.User_ID='$id'";
                        $mysqli =mysqli_query($conn,$sql);
                        $json_data=array();
                        while($row = mysqli_fetch_assoc($mysqli))
                        {
                          $json_data[]=$row;
                        }
                        echo json_encode(['phpresult'=>$json_data]);
           }
            elseif ($role === "Academiafetchjobs"){
                  $id = $_GET['id'];
                  $sql="select * from  JOB_POSTINGS where ID='$id'";
                  $mysqli =mysqli_query($conn,$sql);
                  $json_data=array();
                  while($row = mysqli_fetch_assoc($mysqli))
                  {
                    $json_data[]=$row;
                  }
                  echo json_encode(['phpresult'=>$json_data]);
            }
            elseif ($role === "AcademiaupdateJobs"){
                  $jid = $_GET['jid'];
                  $sql="select * from  JOB_POSTINGS where JID='$jid'";
                  $mysqli =mysqli_query($conn,$sql);
                  $json_data=array();
                  while($row = mysqli_fetch_assoc($mysqli))
                  {
                    $json_data[]=$row;
                  }
                  echo json_encode(['phpresult'=>$json_data]);
        }
        elseif ($role === "Getapplicants"){
                $jid = $_GET['jid'];
                $sql="select * from  applications where JID='$jid'";
                $mysqli =mysqli_query($conn,$sql);
                $json_data=array();
                while($row = mysqli_fetch_assoc($mysqli))
                {
                  $json_data[]=$row;
                }
                echo json_encode(['phpresult'=>$json_data]);
          }
          elseif ($role === "GetURMCandidate") {
            if (isset($_GET['uname']) && isset($_GET['location']) && isset($_GET['education'])) {
                $uname = $_GET['uname'];
                $location = $_GET['location'];
                $education = $_GET['education'];
                
                // Replace the following line with the correct variable name or remove it if not needed.
                // echo($name);
        
                // Sanitize the input to prevent SQL injection (recommended).
                $uname = mysqli_real_escape_string($conn, $uname);
                $location = mysqli_real_escape_string($conn, $location);
                $education = mysqli_real_escape_string($conn, $education);
        
                $sql = "SELECT * FROM urm_candidate WHERE Uname='$uname' OR location='$location' OR education='$education'";
                $mysqli = mysqli_query($conn, $sql);
                $json_data = array();
                while ($row = mysqli_fetch_assoc($mysqli)) {
                    $json_data[] = $row;
                }
                echo json_encode(['phpresult' => $json_data]);
            } else {
                // Handle missing parameters error here.
                echo "Missing parameters (uname, location, or education).";
            }
        }
        



   }
  


  
?>