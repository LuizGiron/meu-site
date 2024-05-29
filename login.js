document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("register-form").addEventListener("submit", function(event) {
        event.preventDefault();
        if (validateForm()) {
            window.location.href = "tela1.html";
        }
    });
});

function validateForm() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let errorMessage = "";

    // Validação do email
    if (!emailIsValid(email)) {
        errorMessage += "Email inválido. ";
    }

    // Validação da senha
    if (password.length < 6) {
        errorMessage += "Senha deve conter no mínimo 6 caracteres. ";
    }

    if (errorMessage !== "") {
        showErrorPopup(errorMessage);
        return false;
    }

    return true;
}

function emailIsValid(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function showErrorPopup(message) {
    document.getElementById("error-message").textContent = message;
    document.getElementById("error-popup").style.display = "block";
}

// Fecha o pop-up quando clicar no botão de fechar
document.querySelector(".close").addEventListener("click", function() {
    document.getElementById("error-popup").style.display = "none";
});

// Fecha o pop-up quando clicar fora dele
window.onclick = function(event) {
    if (event.target == document.getElementById("error-popup")) {
        document.getElementById("error-popup").style.display = "none";
    }
};
