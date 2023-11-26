<?php
require 'dbconection.php';

$abc = json_decode(file_get_contents("php://input"));


    if(isset($abc->data->name) && !empty($abc->data->name) && isset($abc->data->email) &&
    !empty($abc->data->email)) {
        $name = $abc->data->name;
        $email = $abc->data->email;


$name = $abc->data->name;
$email = $abc->data->email;

$sql = "INSERT INTO user VALUES(NULL, '$name', '$email', now())";
$db->query($sql);

if($db->affected_rows>0){
    echo json_encode(["success"=>true, "msg"=>"Successfully Inserted"]);
    //echo json_encode(["msg"=>"Successfully Inserted"]);
		return;
    }else {
        echo json_encode(["success"=>false,"msg"=>"Server Problem. Please Try Again"]);
		return;
    }
    }else{
        echo "Empty not allowed";;
    }
    
?>