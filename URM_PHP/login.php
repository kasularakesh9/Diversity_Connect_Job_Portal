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

	$requestData = json_decode($rawData, true);

	$email = $requestData['email'];
	$pass = $requestData['pass'];

	$sql = "select * from users where Email='".$email."' and Password='".$pass."'";
	$result = $conn->query($sql);

	if ($result->num_rows === 1) {
    	$row = $result->fetch_assoc();
    	//echo json_encode($row);
		echo json_encode(['message' => 'Login successful','isLogin'=>'true','role'=>$row['ROLE'],'id'=>$row['ID']]);
	}else{
		echo json_encode(['message' => 'Invalid credentials','isLogin'=>'false']);
 		return json_encode(['message' => 'Invalid credentials','isLogin'=>'false']);
	}

}