<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = strip_tags($_POST["nome"]);
    $email = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
    $mensagem = strip_tags($_POST["mensagem"]);

    $to = "biancavitoriacampos@hotmail.com";
    $subject = "Mensagem do Portfólio";
    $body = "Nome: $nome\nE-mail: $email\nMensagem:\n$mensagem";
    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo "<script>alert('Mensagem enviada com sucesso!');window.location.href='../index.html';</script>";
    } else {
        echo "<script>alert('Erro ao enviar mensagem. Tente novamente mais tarde.');window.history.back();</script>";
    }
} else {
    header("Location: ../index.html");
    exit();
}
?>