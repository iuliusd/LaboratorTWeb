<?php
$servername="localhost";
$username="root";
$password="";
$database_name="info";

$connection=mysqli_connect($servername,$username,$password,$database_name);
if (!$connection){
    die("Connection Failed:".mysqli_connect_error());
}
if (isset($_POST['save'])){
    $name=$_POST['name'];
    $email=$_POST['email'];
    $phone=$_POST['phone'];
    $address=$_POST['address'];


    $sql_querry="INSERT INTO entrydata (name ,email, phone, address)
values ('$name','$email','$phone','$address')";
    if (mysqli_query($connection,$sql_querry)){
        echo "New entry details inserted successfully!";
    } else{
        echo "Error: " . mysqli_error($connection);
    }
    mysqli_close($connection);

}
