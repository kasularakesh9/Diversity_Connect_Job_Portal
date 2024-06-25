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

    if($role === "URMProfilechange"){
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
     $email = $requestData['email'];
     $password = $requestData['password'];
     
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
     WHERE `User_ID` ='$id'";
      
     $sql1= "UPDATE users SET email = '$email', password='$password' WHERE ID = $id";
    
      if ($conn->query($sql) === TRUE && $conn->query($sql1) === TRUE) {
    
        echo "Profile updated successfully.";
        return json_encode(['message' => 'Profile updated successfully.']);
      } else {
        echo "Error: " . $sql . " " . $conn->error;
        return "Error: " . $sql . " " . $conn->error;
      }
  }

  //-------------------------------------------Apply Jobs----------------------------------------------------
      elseif($role === "applyJobs"){

              $jid = $requestData['jid'];
              $id= $requestData['id'];
             
              $result = $conn->query("SELECT UId FROM urm_candidate WHERE User_ID='$id'");
                if ($result && $result->num_rows > 0) {
                    $row = $result->fetch_assoc();
                    $uid = $row['UId'];
                    $sql = "INSERT INTO applications (STATUS, JID, UID, ID) VALUES ('Pending', '$jid', '$uid', '$id')";

                    if ($conn->query($sql) === TRUE) {
                        echo "Job Applied successfully.";
                        return json_encode(['message' => 'Job Applied  successfully.']);
                    } else {
                        echo "Error: " . $sql . " " . $conn->error;
                        return "Error: " . $sql . " " . $conn->error;
                    }
                } else {
                    echo "Error: Unable to retrieve UID from CANDIDATE.";
                    return "Error: Unable to retrieve UID from CANDIDATE.";
                }
            

    }



}elseif ($_SERVER['REQUEST_METHOD'] === 'GET'){
    $role = $_GET['role'];

   if($role === "URMProfiledetails"){
        $id = $_GET['id'];
        $sql="select a.Uname,a.Phone_no,a.Location,a.Nationality,a.Education,a.Ethinicity,a.Positions,a.Publications,a.Res_exp,u.EMAIL from  urm_candidate as a join  users as u  on a.User_ID=u.ID where a.User_ID='$id'";
        $mysqli =mysqli_query($conn,$sql);
        $json_data=array();
        while($row = mysqli_fetch_assoc($mysqli))
        {
          $json_data[]=$row;
        }
        echo json_encode(['phpresult'=>$json_data]);
    }
     //----------------------------- update urm---------------------------------------
     elseif ($role === "Updateurmprofile"){
       
            $id = $_GET['id'];

            $sql=" select a.Uname,a.Phone_no,a.Location,a.Nationality,a.Education,a.Ethinicity,a.Positions,a.Publications,a.Res_exp,u.EMAIL,u.PASSWORD from  urm_candidate as a join  users as u  on a.User_ID=u.ID where a.User_ID='$id'";
            $mysqli =mysqli_query($conn,$sql);
            $json_data=array();
            while($row = mysqli_fetch_assoc($mysqli))
            {
              $json_data[]=$row;
            }
            echo json_encode(['phpresult'=>$json_data]);
        }
        //----------------------------view job urm---------------------------------------
        elseif ($role === "Viewjobsurm"){
                    
               $id = $_GET['id'];
              $sql="select * from job_postings where active=1 and JID NOT IN(Select JID from applications where ID='$id')";
              $mysqli =mysqli_query($conn,$sql);
              $json_data=array();
              while($row = mysqli_fetch_assoc($mysqli))
              {
                $json_data[]=$row;
              }
              echo json_encode(['phpresult'=>$json_data]);
        }
        //----------------------------view Applied job urm---------------------------------------
        elseif ($role === "Viewappliedjobsurm"){
                    
          $id = $_GET['id'];
         $sql="select * from job_postings where JID IN(Select JID from applications where ID='$id')";
         $mysqli =mysqli_query($conn,$sql);
         $json_data=array();
         while($row = mysqli_fetch_assoc($mysqli))
         {
           $json_data[]=$row;
         }
         echo json_encode(['phpresult'=>$json_data]);
   }
        //----------------------------view Applied job status urm---------------------------------------
        elseif ($role === "Fetchapplicationstatus"){
                   
          $jid = $_GET['jid'];
          $id = $_GET['id'];
          $sql="select * from applications where JID ='$jid' and  ID ='$id')";
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