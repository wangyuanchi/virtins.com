<?php

$name = $_POST["name"];
$company = $_POST["company"];
$email = $_POST["email"];
$subject = $_POST["subject"];
$message = $_POST["message"];

require "vendor/autoload.php";

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

$recaptcha_url = "https://www.google.com/recaptcha/api/siteverify";
$recaptcha_secret = "REDACTED";
$recaptcha_response = $_POST["g-recaptcha-response"];

$recaptcha = file_get_contents($recaptcha_url . "?secret=" . $recaptcha_secret . "&response=" . $recaptcha_response);
$recaptcha = json_decode($recaptcha, true);

if ($recaptcha["success"] == 1 and $recaptcha["score"] >= 0.5) {
    try {
        $mail = new PHPMailer(true);

        // $mail->SMTPDebug = SMTP::DEBUG_SERVER;

        $mail->CharSet = "UTF-8";

        $mail->isSMTP();
        $mail->SMTPAuth = true;

        $mail->Host = "virtins.com";
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;

        $mail->Username = "REDACTED";
        $mail->Password = "REDACTED";

        $mail->setFrom($email, $name);

        $mail->addAddress("sales@virtins.com", "sales@virtins.com");

        $message = "Full Name: " . $name . "\n" .
            "Company: " . $company . "\n" .
            "Email Address: " . $email . "\n" .
            "Subject: " . $subject . "\n\n" .
            "Message: " . $message;

        $mail->Subject = "New contact form message by " . $name;
        $mail->Body = $message;

        $mail->send();

        header("Location: contact-submitted.html");
    } catch (Exception $e) {
        echo "Message could not be sent<br />" . $mail->ErrorInfo;
    }
} else {
    echo "Recaptcha Failed";
}
