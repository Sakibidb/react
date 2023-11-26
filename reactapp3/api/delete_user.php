<?php 
require 'dbconection.php';

$data = json_decode(file_get_contents("php://input"));

if(isset($data->userids) 
	&& !empty(trim($data->userids))
	){
		
	$userids = $db->real_escape_string(trim($data->userids));

  $add = $db->query ("delete from user where user_id='$userids'");

	if($add){
		echo json_encode(["success"=>true]);
		return;
    }else{
        echo json_encode(["success"=>false,"msg"=>"Server Problem. Please Try Again"]);
		return;
    } 

} else{
    echo json_encode(["success"=>false,"msg"=>"Please fill all the required fields!"]);
	return;
}
?>