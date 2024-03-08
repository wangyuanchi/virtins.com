<?php

$name = $_POST["name"];
$company = $_POST["company"];
$email = $_POST["email"];
$upgrade_to = $_POST["upgrade-to"];
if (isset($_POST["add-ons"])) {
    $add_ons = $_POST['add-ons'];
    $add_ons = implode(", ", $add_ons);
} else {
    $add_ons = "";
}
$order_reference_no = $_POST["order-reference-no"];
$hardware_category = $_POST["hardware-category"];
$hardware_id = $_POST["hardware-id"];
$serial_number = $_POST["serial-number"];
$note = $_POST["note"];

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

        $mail->addAddress("support@virtins.com", "support@virtins.com");

        $message = "Full Name: " . $name . "\n" .
            "Company: " . $company . "\n" .
            "Email Address: " . $email . "\n" .
            "Upgrade to: " . $upgrade_to . "\n" .
            "Add-ons: " . $add_ons . "\n" .
            "Order Reference Number: " . $order_reference_no . "\n" .
            "Hardware Category: " . $hardware_category  . "\n" .
            "Hardware ID: " . $hardware_id . "\n" .
            "Serial Number: " . $serial_number . "\n" .
            "Additional Note: " . $note . "\n";

        $mail->Subject = "New hardware upgrade request by " . $name;
        $mail->Body = $message;

        $mail->send();

        header("Location: hardware-upgrade-submitted.html");
    } catch (Exception $e) {
        echo "Message could not be sent<br />" . $mail->ErrorInfo;
    }
} else {
    echo "Recaptcha Failed";
}
