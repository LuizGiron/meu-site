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
    let name = document.getElementById("name").value;
    let lastname = document.getElementById("lastname").value;
    let password = document.getElementById("password").value;
    let passconfirmation = document.getElementById("passconfirmation").value;
    let agreement = document.getElementById("agreement").checked;

    let errorMessage = "";

    // Validação do email
    if (!emailIsValid(email)) {
        errorMessage += "Email inválido. ";
    }

    // Validação do nome
    if (name.length < 2) {
        errorMessage += "Nome deve conter no mínimo 2 caracteres. ";
    }

    // Validação do sobrenome
    if (lastname.length < 2) {
        errorMessage += "Sobrenome deve conter no mínimo 2 caracteres. ";
    }

    // Validação da senha
    if (password.length < 6) {
        errorMessage += "Senha deve conter no mínimo 6 caracteres. ";
    }

    // Validação da confirmação de senha
    if (password !== passconfirmation) {
        errorMessage += "Senhas não coincidem. ";
    }

    // Validação do acordo
    if (!agreement) {
        errorMessage += "Você deve aceitar os termos de uso.";
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


