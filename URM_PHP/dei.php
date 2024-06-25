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
        if($role === "DEIchangeprofile"){
                  $id=$requestData['id'];
                  $dname=$requestData['dname'];
                  $ddesc = $requestData['ddesc'];
                  $role1 = $requestData['role1'];
                  $organization = $requestData['organization'];
                  $goal = $requestData['goal'];
                  $initiatives = $requestData['initiatives'];
                  $new_events = $requestData['new_events'];
                  $postions = $requestData['postions'];
                  $email = $requestData['email'];
                  $password = $requestData['password'];

                  $sql1= "UPDATE users SET email = '$email', password='$password' WHERE ID = $id";

                  $sql = "UPDATE dei 
                  SET DNAME = '$dname', D_DESC = '$ddesc', DROLE = '$role1', ORGANIZATION = '$organization', GOALS = '$goal',INITIATIVES='$initiatives', NEW_EVENTS=' $new_events',POSITIONS='$postions'
                  WHERE User_ID = $id";

                  if ($conn->query($sql) === TRUE && $conn->query($sql1) === TRUE) {
                      
                    echo "Profile updated successfully.";
                    return json_encode(['message' => 'Profile updated successfully.']);
                  } else {
                    echo "Error: " . $sql . " " . $conn->error;
                    return "Error: " . $sql . " " . $conn->error;
                  }
      }
        elseif($role === "Jobposteddei"){
        
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
        //-----------------delete job on decline-----------------------
        elseif($role === "declineJobs"){

              $jid = $requestData['jid'];
              $sql = "delete from job_postings where JID=$jid;";
          
              if ($conn->query($sql) === TRUE) {
                echo "Deleted Job  successfully.";
                return json_encode(['message' => 'Deleted Job  successfully.']);
              } else {
                echo "Error: " . $sql . " " . $conn->error;
                return "Error: " . $sql . " " . $conn->error;
              }
        }
        //-----------------active job on accept-----------------------
        elseif($role === "acceptJobs"){

          $jid = $requestData['jid'];
          $sql = "UPDATE job_postings SET ACTIVE = 1 WHERE JID=$jid;";
      
          if ($conn->query($sql) === TRUE) {
            echo "Accpeted Job  successfully.";
            return json_encode(['message' => 'Accpeted Job  successfully.']);
          } else {
            echo "Error: " . $sql . " " . $conn->error;
            return "Error: " . $sql . " " . $conn->error;
          }
}


  
}
  elseif($_SERVER['REQUEST_METHOD'] === 'GET'){
  $role = $_GET['role'];

          if ($role === "DEIProfiledetails"){
                    $id = $_GET['id'];

                    $sql="select a.DNAME,a.D_DESC,a.DROLE,a.ORGANIZATION,a.GOALS,a.INITIATIVES,a.NEW_EVENTS,a.POSITIONS,u.EMAIL from  dei as a join  users as u  on a.User_ID=u.ID where a.User_ID='$id'";
                    $mysqli =mysqli_query($conn,$sql);
                    $json_data=array();
                    while($row = mysqli_fetch_assoc($mysqli))
                    {
                      $json_data[]=$row;
                    }
                    echo json_encode(['phpresult'=>$json_data]);
        }
          //----------------------------- update dei ---------------------------------------
          elseif ($role === "Updatedeiprofile"){
            $id = $_GET['id'];

            $sql="select a.DNAME,a.D_DESC,a.DROLE,a.ORGANIZATION,a.GOALS,a.INITIATIVES,a.NEW_EVENTS,a.POSITIONS,u.EMAIL, u.PASSWORD from  dei as a join  users as u  on a.User_ID=u.ID where a.User_ID='$id'";
            $mysqli =mysqli_query($conn,$sql);
            $json_data=array();
            while($row = mysqli_fetch_assoc($mysqli))
            {
              $json_data[]=$row;
            }
            echo json_encode(['phpresult'=>$json_data]);
      }
   
   //-----------------------serach URM candidate-----------------------------
   elseif ($role === "GetURMCandidateforDEI") {
    
        $location = $_GET['location'];
        $positions = $_GET['positions'];
        
        $sql = "SELECT * FROM urm_candidate WHERE location='$location' OR positions='$positions'";
        $mysqli = mysqli_query($conn, $sql);
        $json_data = array();
        while ($row = mysqli_fetch_assoc($mysqli)) {
            $json_data[] = $row;
        }
        echo json_encode(['phpresult' => $json_data]);
    } 
  //----------------------------view job urm---------------------------------------
  elseif ($role === "Viewjobsdei"){
                          
          $id = $_GET['id'];
        $sql="select * from job_postings where Active =0 ";
        $mysqli =mysqli_query($conn,$sql);
        $json_data=array();
        while($row = mysqli_fetch_assoc($mysqli))
        {
          $json_data[]=$row;
        }
        echo json_encode(['phpresult'=>$json_data]);
      }

      //-------------------fetch job for dashboard------------------
      elseif ($role === "DeidashboardfetchJobs"){
        $id = $_GET['id'];
        $sql="select * from  JOB_POSTINGS where Active =1";
        $mysqli =mysqli_query($conn,$sql);
        $json_data=array();
        while($row = mysqli_fetch_assoc($mysqli))
        {
          $json_data[]=$row;
        }
        echo json_encode(['phpresult'=>$json_data]);
  }

}

  
?>