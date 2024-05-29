<?php
// Configurações de conexão com o banco de dados MySQL
$servername = "localhost";
$username = "root";
$password = "720910";
$database = "lms";

// Conexão com o banco de dados
$conn = new mysqli($servername, $username, $password, $database);

// Verifica a conexão
if ($conn->connect_error) {
    die("Erro na conexão: " . $conn->connect_error);
}

// Exemplo de inserção de dados na tabela 'users'
$email = "exemplo@email.com";
$username = "exemplo";
$lastname = "Sobrenome";
$password = "senha123";
$passconfirmation = "senha123";

$sql = "INSERT INTO users (email, username, lastname, password, passconfirmation) VALUES ('$email', '$username', '$lastname', '$password', '$passconfirmation')";

if ($conn->query($sql) === TRUE) {
    echo "Novo registro inserido com sucesso.";
} else {
    echo "Erro: " . $sql . "<br>" . $conn->error;
}

// Exemplo de consulta para exibir todos os usuários
$sql = "SELECT * FROM users";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // Exibindo os dados de cada usuário
    while($row = $result->fetch_assoc()) {
        echo "ID: " . $row["id"]. " - Email: " . $row["email"]. " - Username: " . $row["username"]. " - Lastname: " . $row["lastname"]. "<br>";
    }
} else {
    echo "Não há usuários na tabela.";
}

// Fechando a conexão com o banco de dados
$conn->close();*/

// Verifica se o formulário foi enviado
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Processamento do formulário...

    // Redireciona para a tela1.html após o processamento do formulário
    header("Location: tela1.html");
    exit(); // Certifica-se de que o script não continue a ser executado após o redirecionamento
}
?>

