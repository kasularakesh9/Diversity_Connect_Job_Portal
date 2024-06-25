

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


    $uploadDirectory = './uploads/';
    $targetResume = $uploadDirectory . $_FILES['resume']['name'];
    $targetCoverLetter = $uploadDirectory . $_FILES['coverletter']['name'];

    if ($_FILES['resume']['error'] === UPLOAD_ERR_OK && $_FILES['coverletter']['error'] === UPLOAD_ERR_OK) {
        $tempResume = $_FILES['resume']['tmp_name'];
        $tempCoverLetter = $_FILES['coverletter']['tmp_name'];
        // $userName = $_POST['userName'];
        // $email = $_POST['email'];

        $uname = $_POST['uname'];
          $phoneno = $_POST['phoneno'];
          $nationality = $_POST['nationality'];
          $location = $_POST['location'];      
          $ethnicity = $_POST['ethnicity'];

          $education = $_POST['education'];
          $resexp = $_POST['resexp'];
          $publication = $_POST['publication'];
          $postions = $_POST['postions'];      
          //$resume = $_POST['resume'];

          //$coverletter = $_POST['coverletter'];
          $email = $_POST['email'];
          $password = $_POST['password'];
          $role = $_POST['role'];

        // Move the uploaded files to the target directory
        if (move_uploaded_file($tempResume, $targetResume) && move_uploaded_file($tempCoverLetter, $targetCoverLetter)) {


            $resumeData = file_get_contents($targetResume);
            $escapedResumeData = $conn->real_escape_string($resumeData);

            $coverLetterData = file_get_contents($targetCoverLetter);
            $escapedCoverLetterData = $conn->real_escape_string($coverLetterData);

              $role = $_POST['role'];
              $Email = $_POST['email'];
              $password = $_POST['password'];
              $NAME=$_POST['name'];

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

            $sql = "INSERT INTO urm_candidate (Uname, Phone_no, location, Nationality,
            Ethinicity,Education,Res_exp,Publications,Positions, Resume, Cover_letter, User_ID) 
            VALUES ('$uname', '$phoneno','$location','$nationality','$ethnicity','$education',
            '$resexp','$publication','$postions','$escapedResumeData','$escapedCoverLetterData', '$generatedId')";  

          if ($conn->query($sql) === TRUE) {
            smtp_mailer($email,'Subject',$emailBody);
            echo "Candidate Register successfully.";
            return json_encode(['message' => 'Candidate Register successfully.']);
          } else {
            echo "Error: " . $sql . " " . $conn->error;
            return "Error: " . $sql . " " . $conn->error;
          }
          
        } else {
            echo 'Failed to move the uploaded files.';
        }
    } else {
        echo 'Error uploading the files.';
    }

}
?>
