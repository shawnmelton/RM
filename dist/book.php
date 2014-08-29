<?php
function validField($field) {
    return (isset($_POST[$field]) && $_POST[$field] != ''
        && ($field != 'email' || preg_match('/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i', $_POST['email'])));
}

function createHTMLMessage() {
    return '<!doctype html><html>
    <head>
        <title>Renaissance Movement Web Booking Request</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    </head>
    <body>
        <h1>Renaissance Movement Web Booking Request</h1>
        <p>A new booking request has been made on rmmusic.tv.  The information that was submitted is below:</p>
        <p><strong>First Name</strong> &nbsp;'. $_POST['firstName'] .'</p>
        <p><strong>Last Name:</strong> &nbsp;'. $_POST['lastName'] .'</p>
        <p><strong>Email Address:</strong> &nbsp;'. $_POST['email'] .'</p>
        <p><strong>Phone Number:</strong> &nbsp;'. $_POST['phone'] .'</p>
        <p><strong>Comments:</strong> &nbsp;'. $_POST['comments'] .'</p>
    </body>
    </html>';
}

function createTextMessage() {
    return 'Renaissance Movement Web Booking Request'."\n\n".
        'A new booking request has been made on rmmusic.tv.  The information that was submitted is below:'."\n\n".
        'First Name:  '. $_POST['firstName'] ."\n\n".
        'Last Name:  '. $_POST['lastName'] ."\n\n".
        'Email Address:  '. $_POST['email'] ."\n\n".
        'Phone Number:  '. $_POST['phone'] ."\n\n".
        'Comments:  '. $_POST['comments'] ."\n\n";
}

if(isset($_POST['verify']) && $_POST['verify'] == '' && validField('firstName') && validField('lastName') && validField('email')) {
    require_once('content/custom-scripts/Mailer.php');

     $mailer = new Mailer(array(
        'subject' => 'Renaissance Movement Web Booking Request',
        'from_email' => 'no-reply@rmmusic.tv',
        'from_name' => 'RMMusic.tv',
        'html' => createHTMLMessage(),
        'text' => createTextMessage()
    ));

    $mailer->send_to('rmmbooking@gmail.com,shawn.a.melton@gmail.com');

    echo json_encode(array('status' => 'ok'));
    exit;
}

echo json_encode(array('status' => 'error'));
exit;