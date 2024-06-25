
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


$query = "SELECT Role AS name, COUNT(*) AS users FROM users GROUP BY Role";
$result = mysqli_query($conn, $query);

// Check if the query was successful
if (!$result) {
    die('Error executing the query: ' . mysqli_error($conn));
}

// Fetch the data and store it in an array
$data = array();
while ($row = mysqli_fetch_assoc($result)) {
	$row['users'] = (int) $row['users'];
    $data[] = $row;
}

// Close the database connection
mysqli_close($conn);

// Encode the data as JSON and return it
header('Content-Type: application/json');
echo json_encode($data);
?>
