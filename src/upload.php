<?php
 $target = "images/".basename($_FILES['image']['name']);
 if(move_uploaded_file($_FILES['image']['tmp_name'], $target)){
    $msg = 'Video upload was successful';
    echo $vidoes;
    }else{
        $msg = 'video upload failed';
    }


?>