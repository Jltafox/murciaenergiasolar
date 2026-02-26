<?php
// contact.php - Manejador de formulario de contacto para Raiola/Apache

// Headers para permitir peticiones AJAX y JSON
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=UTF-8");

// Manejar preflight request (OPTIONS)
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Solo permitir POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["error" => "Método no permitido"]);
    exit;
}

// Leer el cuerpo JSON
$input = file_get_contents("php://input");
$data = json_decode($input, true);

if (!$data) {
    http_response_code(400);
    echo json_encode(["error" => "Datos JSON inválidos"]);
    exit;
}

// Extraer campos
$nombre = isset($data['nombre']) ? strip_tags(trim($data['nombre'])) : '';
$email = isset($data['email']) ? strip_tags(trim($data['email'])) : '';
$telefono = isset($data['telefono']) ? strip_tags(trim($data['telefono'])) : '';
$tipo = isset($data['tipo']) ? strip_tags(trim($data['tipo'])) : '';
$municipio = isset($data['municipio']) ? strip_tags(trim($data['municipio'])) : '';
$factura = isset($data['factura']) ? strip_tags(trim($data['factura'])) : '';

// Validación básica
if (empty($nombre) || empty($telefono) || empty($email)) {
    http_response_code(400);
    echo json_encode(["error" => "Nombre, email y teléfono son obligatorios"]);
    exit;
}

// Configuración del correo
$to = "info@murciaenergiasolar.es";
$subject = "Nuevo contacto web: " . $nombre;

// Mensaje HTML
$message = "
<html>
<head>
  <title>Nuevo formulario de contacto</title>
</head>
<body>
  <h2>Nuevo contacto recibido desde la web</h2>
  <p><strong>Nombre:</strong> $nombre</p>
  <p><strong>Email:</strong> $email</p>
  <p><strong>Teléfono:</strong> $telefono</p>
  " . ($tipo ? "<p><strong>Tipo de propiedad:</strong> $tipo</p>" : "") . "
  " . ($municipio ? "<p><strong>Municipio:</strong> $municipio</p>" : "") . "
  " . ($factura ? "<p><strong>Factura mensual:</strong> $factura</p>" : "") . "
  <hr>
  <p>Enviado desde el formulario de Murcia Energía Solar.</p>
</body>
</html>
";

// Cabeceras
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
// Importante: El 'From' debe ser una cuenta del propio dominio para evitar SPAM en servidores compartidos
$headers .= "From: Web Solar <no-reply@murciaenergiasolar.es>" . "\r\n";
$headers .= "Reply-To: $email" . "\r\n";

// Enviar correo
// Nota: En servidores Raiola/cPanel, mail() suele estar configurado para usar el MTA local.
// Si fallara, se requeriría configurar SMTP mediante una librería como PHPMailer.
if (mail($to, $subject, $message, $headers)) {
    http_response_code(200);
    echo json_encode(["message" => "Formulario enviado correctamente"]);
} else {
    http_response_code(500);
    echo json_encode(["error" => "Error al enviar el correo. Por favor, contacte por teléfono."]);
}
?>
