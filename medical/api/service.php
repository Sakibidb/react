<?php
require 'dbconection.php';
	$allService = $db->query("SELECT * FROM service");
		if(mysqli_num_rows($allService) > 0){
			while($row = $allService-> fetch_assoc()){
				$viewjson["id"] = $row['id'];
				$viewjson["name"] = $row['name'];
				$viewjson["price"] = $row['price'];
				$viewjson["doctor"] = $row['doctor'];
				$viewjson["mobiler"] = $row['mobile'];
				$json_array[] = $viewjson;
			}
			echo json_encode(["success"=>true,"servicelist"=>$json_array]);
			return;
		}
		else{
			echo json_encode(["success"=>false]);
			return;
		}
?>