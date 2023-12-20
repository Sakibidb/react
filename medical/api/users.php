<?php
require 'dbconection.php';
	$allUsers = $db->query("SELECT * FROM user");
		if(mysqli_num_rows($allUsers) > 0){
			while($row = $allUsers-> fetch_assoc()){
				$viewjson["user_id"] = $row['user_id'];
				$viewjson["name"] = $row['name'];
				$viewjson["email"] = $row['email'];
				$viewjson["date"] = $row['date'];
				$json_array[] = $viewjson;
			}
			echo json_encode(["success"=>true,"userlist"=>$json_array]);
			return;
		}
		else{
			echo json_encode(["success"=>false]);
			return;
		}
?>