<?php
$servername = "localhost"; //mathlab.utsc.utoronto.ca
$username = "hashimal"; // utorid
$password = "hashimal"; // utorid password
$dbname = "cscb20w17_hashimal"; // could be utorid, imdb

$conn = mysqli_connect($servername, $username, $password, $dbname);

// Check connection
if (!$conn) {
	die("Connection failed: " . mysqli_connect_error());
}
// echo "Connected successfully\n";

$courses = $_REQUEST["course"];
$sql = "SELECT * FROM courses INNER JOIN time WHERE courses.id=time.id AND (course LIKE '$courses%' OR courses.id='$courses')";

$result = mysqli_query($conn, $sql);

// if the query returned any tuples output each tuple
if (mysqli_num_rows($result) > 0) {

	 while($row = mysqli_fetch_assoc($result)) { 
	 	$out[] = $row;
	 }
	 	echo json_encode($out);

}
else {
	echo "0 results";
}

// After we are done, close the connection
mysqli_close($conn);

?>
