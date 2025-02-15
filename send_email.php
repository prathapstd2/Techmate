<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';
require 'phpmailer/src/SMTP.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $mail = new PHPMailer(true);
    try {
        $name = $_POST["name"];
        $age = $_POST["age"];
        $city = $_POST["city"];
        $mobile = $_POST["mobile"];
        $service = $_POST["service"];

        // SMTP Configuration
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com'; 
        $mail->SMTPAuth = true;
        $mail->Username = 'prathapstd2@gmail.com'; // Your Gmail
        $mail->Password = 'lrdmsaktwduiphwv'; // App Password
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
        $mail->Port = 465;

        // Sender & Recipient
        $mail->setFrom('prathapstd2@gmail.com', 'Techmate Innovations'); 
        $mail->addAddress('prathapwrk@gmail.com'); 

        // Email Content
        $mail->isHTML(true);
        $mail->Subject = 'Enquiry about Your Services';
        $mail->Body = nl2br("
            Dear Techmate Innovations,<br><br>
            Hello, I’m <b>$name</b>. I recently visited your website and explored your services. 
            I am interested in <b>$service</b> and would like more details.<br><br>
            <b>My Details:</b><br>
            Name: $name <br>
            Age: $age <br>
            City: $city <br>
            Mobile: $mobile <br><br>
            I look forward to hearing from you soon.<br>
            Best regards,<br>
            $name
        ");

        // Send Email
        $mail->send();
        echo "success"; // Response for AJAX
    } catch (Exception $e) {
        echo "error: " . $mail->ErrorInfo; // Error message for AJAX
    }
}
?>
