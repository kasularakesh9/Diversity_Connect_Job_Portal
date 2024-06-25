<?php

require 'db_connection.php';

require 'email.php';

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
  $Email = $requestData['email'];
  $password = $requestData['password'];
  $NAME=$requestData['name'];
  

  $sqlMasterUser="INSERT INTO users (NAME, Email, Password,Role) VALUES ('$NAME','$Email','$password','$role')";
  $url="https://www.google.co.in/";
  $emailBody='<!DOCTYPE html>
      <html>
            <head>
                <meta charset="UTF-8">
                <title>Email Template</title>
            </head>
            <body style="font-family: Arial, sans-serif;">
                <h4>Dear, ' . $NAME . '</h4>
                <p>Greetings from URM-Application!.</p>
                <p>You are now registered with application with role: ' . $role. ' </p>
                <p>
              Please click following link to access the application <a target="_blank" href=' . $url. '> APP URL </a>
            </p>
                
                <p>Best regards,</p>
                <p>Your Name</p>
            </body>
      </html>';


  $generatedId=0;
  if ($conn->query($sqlMasterUser) === TRUE) {
      // Get the generated ID
      $generatedId = $conn->insert_id;
  }

  if($role === "Academia"){//academia registration
      // Retrieve data from the POST request  
      $institution_name = $requestData['institution_name'];
      $positions = $requestData['positions'];
      $desc = $requestData['desc'];
      $researchFocus = $requestData['researchFocus'];
      
      // $username = $requestData['username'];

       $sql = "INSERT INTO academia (Aname, A_Desc, Research_focus, Positions, User_ID) VALUES ('$institution_name', '$desc','$researchFocus','$positions', '$generatedId')";

       if ($conn->query($sql) === TRUE) {
        smtp_mailer($Email,'Subject',$emailBody);
        echo "Academia Register successfully.";
        return json_encode(['message' => 'Academia Register successfully.']);
      } else {
        echo "Error: " . $sql . " " . $conn->error;
        return "Error: " . $sql . " " . $conn->error;
      }
    } else if($role === "Candidate"){
      print_r($role);
      $uname = $requestData['uname'];
      $phoneno = $requestData['phoneno'];
      $nationality = $requestData['nationality'];
      $location = $requestData['location'];      
      $ethnicity = $requestData['ethnicity'];

      $education = $requestData['education'];
      $resexp = $requestData['resexp'];
      $publication = $requestData['publication'];
      $postions = $requestData['postions'];      
      $resume = $requestData['resume'];

      $coverletter = $requestData['coverletter'];
      $email = $requestData['email'];
      $password = $requestData['password'];
      $role = $requestData['role'];

      $sql = "INSERT INTO urm_candidate (Uname, Phone_no, location, Nationality,
        Ethinicity,Education,Res_exp,Publications,Positions, Resume, Cover_letter, User_ID) 
      VALUES ('$uname', '$phoneno','$location','$nationality','$ethnicity','$education',
        '$resexp','$publication','$postions',null, null, '$generatedId')";

       if ($conn->query($sql) === TRUE) {
        smtp_mailer($email,'Subject',$emailBody);
        echo "Candidate Register successfully.";
        return json_encode(['message' => 'Candidate Register successfully.']);
      } else {
        echo "Error: " . $sql . " " . $conn->error;
        return "Error: " . $sql . " " . $conn->error;
      }
  } else if($role === "Dei"){
    $dei_name=$requestData['name'];
    $desc = $requestData['desc'];
    $organization=$requestData['organization'];
    $goal=$requestData['goal'];
    $initiatives=$requestData['initiatives'];
    $event=$requestData['event'];
    $postions = $requestData['positions'];      
    $email = $requestData['email'];
    $password = $requestData['password'];
    $role = $requestData['role'];

    $sql = "INSERT INTO dei(dname, D_DESC , organization, GOALS , initiatives, NEW_EVENTS , Positions, User_ID , DROLE) 
    VALUES ('$dei_name', '$desc','$organization','$goal','$initiatives','$event',
    '$postions','$generatedId','DEI')";

     if ($conn->query($sql) === TRUE) {
      smtp_mailer($email,'Subject',$emailBody);
      echo "Candidate Register successfully.";
      return json_encode(['message' => 'Candidate Register successfully.']);
    } else {
      echo "Error: " . $sql . " " . $conn->error;
      return "Error: " . $sql . " " . $conn->error;
    }
}
}

  