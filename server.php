<?php

if(isset($_GET['a123']) && $_GET['a123']=='key2023'){
    if($_GET['action'] == 1){
        echo 'key OK';
    }
    if ($_GET['action'] == '2') {
        echo 'hello '.$_GET['name'];
    }
    if ($_GET['action'] == '3') {
        echo $_GET['num1']+$_GET['num2'];
    }
    if ($_GET['action'] == '4') {
        echo rand( $_GET['num1'], $_GET['num2'] );
    }
    if ($_GET['action'] == '5') {
        echo date('Y-m-d h:m:s', time());
    }
    if ($_GET['action'] == '6') {
        echo 'year'.(date('Y')-$_GET['year']);
    }
    if ($_GET['action'] == '7') {
        if(isset($_GET['m']) && $_GET['m']==1) {
            echo date('m');
        }
        if(isset($_GET['d']) && $_GET['d']==1) {
            echo date('d');
        }
        if(isset($_GET['y']) && $_GET['y']==1) {
            echo date('Y');
        }
    }
} elseif (isset($_POST['auth'])&&$_POST['auth']=='key2023' ){
    if($_POST['action'] == 1){
        echo 'key OK';
    }
    if ($_POST['action'] == '2') {
        echo 'hello '.$_POST['name'];
    }
    if ($_POST['action'] == '3') {
        echo $_POST['num1']+$_POST['num2'];
    }
    if ($_POST['action'] == '4') {
        echo rand( $_POST['num1'], $_POST['num2'] );
    }
    if ($_POST['action'] == '5') {
        echo date('Y-m-d h:m:s', time());
    }
    if ($_POST['action'] == '6') {
        echo 'year'.(date('Y')-$_POST['year']);
    }
    if ($_POST['action'] == '7') {
        if(isset($_POST['m']) && $_POST['m']==1) {
            echo date('m');
        }
        if(isset($_POST['d']) && $_POST['d']==1) {
            echo date('d');
        }
        if(isset($_POST['y']) && $_POST['y']==1) {
            echo date('Y');
        }
    }
}else{
    echo 'error auth key';
}