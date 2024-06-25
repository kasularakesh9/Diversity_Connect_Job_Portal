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
  
  $dname = $requestData['dname'];
  $phoneno = $requestData['phoneno'];
  $adesc = $requestData['adesc'];
  $username = $requestData['username'];

    
   $sql = "INSERT INTO contactus (cname, phoneno, comments, email) VALUES ('$dname', '$phoneno','$adesc','$username')";
   
   if ($conn->query($sql) === TRUE) {
    echo "Your question sent successfully.";
    return json_encode(['message' => 'Your question sent successfully.']);
  } else {
    echo "Error: " . $sql . " " . $conn->error;
    return "Error: " . $sql . " " . $conn->error;
  }
 

}

?>
