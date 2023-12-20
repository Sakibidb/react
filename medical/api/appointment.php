<?php
require 'dbconection.php';

$abc = json_decode(file_get_contents("php://input"));

//	id	p_name	email	phone	service	doctor	message	



    if(isset($abc->data->name) && !empty($abc->data->name) &&
       isset($abc->data->email)&& !empty($abc->data->email) &&
       isset($abc->data->phone)&& !empty($abc->data->phone) &&
       isset($abc->data->service)&& !empty($abc->data->service) &&
       isset($abc->data->doctor)&& !empty($abc->data->doctor) &&
       isset($abc->data->message)&& !empty($abc->data->message)) {
        $p_name = $abc->data->name;
        $email = $abc->data->email;
        $phone = $abc->data->phone;
        $service = $abc->data->service;
        $doctor = $abc->data->doctor;
        $message = $abc->data->message;


// $name = $abc->data->name;
// $email = $abc->data->email;

$sql = "INSERT INTO appointment VALUES(NULL, '$p_name', '$email', '$phone', '$service', '$doctor', '$message')";
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