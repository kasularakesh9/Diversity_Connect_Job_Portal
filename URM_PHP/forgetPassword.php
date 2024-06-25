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


$rawData = file_get_contents("php://input");

  // Convert the JSON data to an associative array
  $requestData = json_decode($rawData, true);

  $email = $requestData['email'];

  $sql = "select * from users where Email='".$email."'";
	$result = $conn->query($sql);

	if ($result->num_rows >= 1) {
    	$newPass = generateRandomString(6);

    	$sql = "UPDATE users SET Password = '$newPass' WHERE Email = '$email'";
    	if ($conn->query($sql) === TRUE) {

    		$emailBody=getEmailBody($newPass);
    		smtp_mailer($email,'New Credentials For Password Reset',$emailBody);

		    echo json_encode(['message' => 'Reset password details sent to registered email id']);
		    return json_encode(['message' => 'Reset password details sent to registered email id']);
		} else {
		    echo "Error updating password: " . $conn->error;
		}

		
	}else{
		echo json_encode(['message' => 'Provided Email Id is not present']);
 		return json_encode(['message' => 'Provided Email Id is not present']);
	}


function getEmailBody($newPass){
	$url="https://www.google.co.in/";
	$emailBody= '<!DOCTYPE html>
			      <html>
			            <head>
			                <meta charset="UTF-8">
			                <title>Email Template</title>
			            </head>
			            <body style="font-family: Arial, sans-serif;">
			                <h4>Dear User, </h4>
			                <p>Greetings from URM-Application!.</p>
			                <p>You have requested to change the password for your account on URM-Application portal. </p>
			                <p> Your Password is : '. $newPass .' </p>
			                <p>
			              Please click following link to access the application <a target="_blank" href='.$url.'> APP URL </a>
			            </p>
			                
			                <p>Best regards,</p>
			                <p>Your Name</p>
			            </body>
			      </html>';

	return $emailBody;		      
}

function generateRandomString($length = 6) {
    $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    $charactersLength = strlen($characters);
    $randomString = '';

    for ($i = 0; $i < $length; $i++) {
        $randomString .= $characters[rand(0, $charactersLength - 1)];
    }

    return $randomString;
}
?>