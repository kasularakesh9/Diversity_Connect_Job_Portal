<?php

require 'db_connection.php';

header('Access-Control-Allow-Origin:  http://localhost:3000'); // Replace '*' with the specific frontend origin (e.g., 'http://localhost:3000')
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


  //----------------------------------------------Insert Academic Institution-----------------------------------------------------------------
  $role = $requestData['role'];
 
  if($role === "Academia"){//academia registration
      // Retrieve data from the POST request  
      $institution_name = $requestData['institution_name'];
      $positions = $requestData['positions'];
      $desc = $requestData['desc'];
      $researchFocus = $requestData['researchFocus'];
      
      $username = $requestData['username'];



       $sql = "INSERT INTO academia (Aname, A_Desc, Research_focus, Positions) VALUES ('$institution_name', '$desc','$researchFocus','$positions')";

       if ($conn->query($sql) === TRUE) {
        echo "Academia Register successfully.";
        return json_encode(['message' => 'Academia Register successfully.']);
      } else {
        echo "Error: " . $sql . " " . $conn->error;
        return "Error: " . $sql . " " . $conn->error;
      }
    }  

    //return json_encode(['message' => 'Form submitted successfully']);
  
  
  //----------------------------------------------JOB POSTED-----------------------------------------------------------------
  //$role = $requestData['role'];
  elseif($role === "Jobposted"){
        
        $jobposition = $requestData['jobposition'];
        $jdesc = $requestData['jdesc'];
        $date = $requestData['date'];
        $location = $requestData['location'];
      
        $sql = "INSERT INTO job_postings(j_desc, date, job_positions, location,Active, ID) VALUES ('$jdesc', '$date','$jobposition','$location','0','1')";

        if ($conn->query($sql) === TRUE) {
          echo "Job posted successfully.";
          return json_encode(['message' => 'Job posted successfully.']);
        } else {
          echo "Error: " . $sql . " " . $conn->error;
          return "Error: " . $sql . " " . $conn->error;
        }
  }
  elseif($role === "Jobchange"){
        $id=$requestData['id'];
        $jobposition = $requestData['jobposition'];
        $jdesc = $requestData['jdesc'];
        $date = $requestData['date'];
        $location = $requestData['location'];
        
        $sql = "UPDATE job_postings 
        SET J_DESC = '$jdesc', DATE = '$date', JOB_POSITIONS = '$jobposition', LOCATION = '$location', ACTIVE = 0 
        WHERE JID = $id";

        if ($conn->query($sql) === TRUE) {
          echo "Job updated successfully.";
          return json_encode(['message' => 'Job updated successfully.']);
        } else {
          echo "Error: " . $sql . " " . $conn->error;
          return "Error: " . $sql . " " . $conn->error;
        }
  }
  //----------------------------------------------DEI update-----------------------------------------------------------------
  elseif($role === "DEIchange"){
         $id=$requestData['id'];
          $dname=$requestData['dname'];
          $ddesc = $requestData['ddesc'];
          $role1 = $requestData['role1'];
          $organization = $requestData['organization'];
          $goal = $requestData['goal'];
          $initiatives = $requestData['initiatives'];
          $new_events = $requestData['new_events'];
          $postions = $requestData['postions'];

          $sql = "UPDATE dei 
          SET DNAME = '$dname', D_DESC = '$ddesc', DROLE = '$role1', ORGANIZATION = '$organization', GOALS = '$goal',INITIATIVES='$initiatives', NEW_EVENTS=' $new_events',POSITIONS='$postions'
          WHERE DID = $id";

          if ($conn->query($sql) === TRUE) {
            echo " updated successfully.";
            return json_encode(['message' => ' updated successfully.']);
          } else {
            echo "Error: " . $sql . " " . $conn->error;
            return "Error: " . $sql . " " . $conn->error;
          }
    }

    
     //----------------------------------------------URM update-----------------------------------------------------------------
  elseif($role === "URMchange"){
    $id=$requestData['id'];
     $uname=$requestData['uname'];
     $phoneno = $requestData['phoneno'];
     $nationality = $requestData['nationality'];
     $location = $requestData['location'];
     $ethinicity = $requestData['ethinicity'];
     $education = $requestData['education'];
     $resexp = $requestData['resexp'];
     $publication = $requestData['publication'];
     $postions = $requestData['postions'];
     
     $sql = "UPDATE urm_candidate
     SET
     Uname = ' $uname',
     Phone_no = '$phoneno',
     Location = '$location',
     Nationality = '$nationality',
     Ethinicity = '$ethinicity',
     Education = '$education',
     Res_exp = '$resexp',
     Publications = '$publication',
     Positions = '$postions'
     WHERE `UId` ='$id'";

          if ($conn->query($sql) === TRUE) {
            echo " updated successfully.";
            return json_encode(['message' => ' updated successfully.']);
          } else {
            echo "Error: " . $sql . " " . $conn->error;
            return "Error: " . $sql . " " . $conn->error;
          }
    }
 
     //----------------------------------------------Academia update-----------------------------------------------------------------
     elseif($role === "Academiachange"){
      $id=$requestData['id'];
       $aname=$requestData['aname'];
       $adesc = $requestData['adesc'];
       $reserachfocus = $requestData['reserachfocus'];
       $postions = $requestData['postions'];
              
       $sql = "UPDATE academia
       SET
       Aname = ' $aname',
       A_Desc = '$adesc',
       Research_focus = '$reserachfocus',
       Positions = '$postions'       
       WHERE 'AId' ='$id'";
  
            if ($conn->query($sql) === TRUE) {
              echo " updated successfully.";
              return json_encode(['message' => ' updated successfully.']);
            } else {
              echo "Error: " . $sql . " " . $conn->error;
              return "Error: " . $sql . " " . $conn->error;
            }
      }
  
  //----------------------------------------------Insert URM Candidate-----------------------------------------------------------------
 
  
  elseif($role === "Candidate"){
    print_r("test");
      $uname = $requestData['uname'];
      $phoneno = $requestData['phoneno'];
      $nationality = $requestData['nationality'];
      $location = $requestData['location'];      
      $ethnicity = $requestData['ethnicity'];

      $education = $requestData['education'];
      $resexp = $requestData['resexp'];
      $publication = $requestData['publication'];
      $postions = $requestData['postions'];      
     
      $coverletter = $requestData['coverletter'];
      $email = $requestData['email'];
      $password = $requestData['password'];
        // File upload handling for the resume
        $resumeFileName = $_FILES['resume']['name'];
        $resumeTmpName = $_FILES['resume']['tmp_name'];
        $resumePath = 'path/to/resume/folder/' . $resumeFileName;

        // Check if a file was uploaded successfully
        if (!empty($resumeFileName) && is_uploaded_file($resumeTmpName)) {
            // Move the uploaded resume to the designated folder
            if (move_uploaded_file($resumeTmpName, $resumePath)) {
                // File uploaded successfully, continue with database insert
                $sql = "INSERT INTO urm_candidate (Uname, Phone_no, Location, Nationality, Ethinicity, Education, Res_exp, Publications, Positions, Resume, Cover_letter) 
                VALUES ('$uname', '$phoneno','$location','$nationality','$ethnicity','$education','$resexp','$publication','$positions', '$resumePath', '$coverletter')";

                if ($conn->query($sql) === TRUE) {
                    echo "Candidate Register successfully.";
                    return json_encode(['message' => 'Candidate Register successfully.']);
                } else {
                    echo "Error: " . $sql . " " . $conn->error;
                    return "Error: " . $sql . " " . $conn->error;
                }
            } else {
                echo "Error moving the uploaded resume to the designated folder.";
                return "Error moving the uploaded resume to the designated folder.";
            }
        } else {
            echo "Error uploading resume. Please make sure you selected a file.";
            return "Error uploading resume. Please make sure you selected a file.";
        }
        }
        //----------------------------- DELETE JOBS---------------------------------------
        elseif($role === "Deletejobs"){

                $jid = $requestData['jid'];
                echo($jid);
                $sql = "delete from job_postings where JID=$jid;";
            
                if ($conn->query($sql) === TRUE) {
                  echo "Deleted Job  successfully.";
                  return json_encode(['message' => 'Deleted Job  successfully.']);
                } else {
                  echo "Error: " . $sql . " " . $conn->error;
                  return "Error: " . $sql . " " . $conn->error;
                }
        }
         //----------------------------- DELETE DEI---------------------------------------
         elseif($role === "Deletedei"){

                $did = $requestData['did'];
              
                $sql = "delete from dei where DID=$did;";
            
                if ($conn->query($sql) === TRUE) {
                  echo "deleted successfully.";
                  return json_encode(['message' => 'deleted successfully.']);
                } else {
                  echo "Error: " . $sql . " " . $conn->error;
                  return "Error: " . $sql . " " . $conn->error;
                }
         }
            //----------------------------- DELETE URM---------------------------------------
            elseif($role === "Deleteurm"){

                      $uid = $requestData['uid'];
                    
                      $sql = "delete from urm_candidate where UId=$uid;";
                  
                      if ($conn->query($sql) === TRUE) {
                        echo "deleted successfully.";
                        return json_encode(['message' => 'deleted successfully.']);
                      } else {
                        echo "Error: " . $sql . " " . $conn->error;
                        return "Error: " . $sql . " " . $conn->error;
                      }
            }
             //----------------------------- DELETE Academia---------------------------------------
             elseif($role === "Deleteacademia"){

              $aid = $requestData['aid'];
            
              $sql = "delete from academia where AId=$aid;";
          
              if ($conn->query($sql) === TRUE) {
                echo "deleted successfully.";
                return json_encode(['message' => 'deleted successfully.']);
              } else {
                echo "Error: " . $sql . " " . $conn->error;
                return "Error: " . $sql . " " . $conn->error;
              }
    }
          
      
}
        elseif ($_SERVER['REQUEST_METHOD'] === 'GET') {
              $role = $_GET['role'];
 //----------------------------- view Application status---------------------------------------
              if ($role === "Applicationstatus"){

                    $sql="select * from  APPLICATIONS; ";
                    $mysqli =mysqli_query($conn,$sql);
                    $json_data=array();
                    while($row = mysqli_fetch_assoc($mysqli))
                    {
                      $json_data[]=$row;
                    }
                    echo json_encode(['phpresult'=>$json_data]);
              }
              //----------------------------- view jobs---------------------------------------
              elseif ($role === "Viewjobs"){
                    

                    $sql="select * from job_postings";
                    $mysqli =mysqli_query($conn,$sql);
                    $json_data=array();
                    while($row = mysqli_fetch_assoc($mysqli))
                    {
                      $json_data[]=$row;
                    }
                    echo json_encode(['phpresult'=>$json_data]);
              }//----------------------------- update view jobs---------------------------------------
              elseif ($role === "Updatejobs"){
                $id = $_GET['id'];

                $sql="select * from job_postings where JID='$id'";
                $mysqli =mysqli_query($conn,$sql);
                $json_data=array();
                while($row = mysqli_fetch_assoc($mysqli))
                {
                  $json_data[]=$row;
                }
                echo json_encode(['phpresult'=>$json_data]);
          }
          //----------------------------- view dei---------------------------------------
          elseif ($role === "Viewdei"){
                    

                $sql="select * from dei";
                $mysqli =mysqli_query($conn,$sql);
                $json_data=array();
                while($row = mysqli_fetch_assoc($mysqli))
                {
                  $json_data[]=$row;
                }
                echo json_encode(['phpresult'=>$json_data]);
          }
          //----------------------------- update dei ---------------------------------------
          elseif ($role === "Updatedei"){
            $id = $_GET['id'];

            $sql="select * from dei where DID='$id'";
            $mysqli =mysqli_query($conn,$sql);
            $json_data=array();
            while($row = mysqli_fetch_assoc($mysqli))
            {
              $json_data[]=$row;
            }
            echo json_encode(['phpresult'=>$json_data]);
      }
      //----------------------------- view urm---------------------------------------
      elseif ($role === "Viewurm"){
      
            $sql=" SELECT `urm_candidate`.`UId`,
            `urm_candidate`.`Uname`,
            `urm_candidate`.`Phone_no`,
            `urm_candidate`.`Location`,
            `urm_candidate`.`Nationality`,
            `urm_candidate`.`Ethinicity`,
            `urm_candidate`.`Education`,
            `urm_candidate`.`Res_exp`,
            `urm_candidate`.`Publications`,
            `urm_candidate`.`Positions`,
            `urm_candidate`.`User_ID`
        FROM `diversityconnect`.`urm_candidate`";
            $mysqli =mysqli_query($conn,$sql);
            $json_data=array();
            while($row = mysqli_fetch_assoc($mysqli))
            {
              $json_data[]=$row;
            }
            echo json_encode(['phpresult'=>$json_data]);
    }
  //----------------------------- update urm---------------------------------------
        elseif ($role === "Updateurm"){
         
                $id = $_GET['id'];

                $sql="SELECT `urm_candidate`.`UId`,
                `urm_candidate`.`Uname`,
                `urm_candidate`.`Phone_no`,
                `urm_candidate`.`Location`,
                `urm_candidate`.`Nationality`,
                `urm_candidate`.`Ethinicity`,
                `urm_candidate`.`Education`,
                `urm_candidate`.`Res_exp`,
                `urm_candidate`.`Publications`,
                `urm_candidate`.`Positions`,
                `urm_candidate`.`User_ID`
                FROM `diversityconnect`.`urm_candidate` where `urm_candidate`.`UId`='$id'";
                $mysqli =mysqli_query($conn,$sql);
                $json_data=array();
                while($row = mysqli_fetch_assoc($mysqli))
                {
                  $json_data[]=$row;
                }
                echo json_encode(['phpresult'=>$json_data]);
      }
      //----------------------------- view Academia---------------------------------------
      elseif ($role === "Viewacademia"){
            
              $sql=" SELECT * FROM academia";
              $mysqli =mysqli_query($conn,$sql);
              $json_data=array();
              while($row = mysqli_fetch_assoc($mysqli))
              {
                $json_data[]=$row;
              }
              echo json_encode(['phpresult'=>$json_data]);
      }
      //----------------------------- update Academia---------------------------------------
      elseif ($role === "Updateacademia"){

            $id = $_GET['id'];

            $sql="SELECT * FROM academia where AId='$id'";
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

  