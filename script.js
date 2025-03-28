window.onload = function() {
    const botao = document.querySelector('.botao');

    botao.addEventListener('click', function() {
        const firstName = document.querySelectorAll('.input-field')[0].value.trim();
        const lastName = document.querySelectorAll('.input-field')[1].value.trim();
        const email = document.querySelectorAll('.input-field')[2].value.trim();
        const message = document.querySelectorAll('.input-field')[3].value.trim();
        const consent = document.querySelector('.checkbox-container input').checked;

        if (firstName === "") {
            alert("O campo 'First Name' está vazio.");
            return;
        }

        if (lastName === "") {
            alert("O campo 'Last Name' está vazio.");
            return;
        }

        if (email === "") {
            alert("O campo 'Email' está vazio.");
            return;
        }

        if (!email.includes("@")) {
            alert("O e-mail precisa conter o símbolo '@'");
            return;
        }

        if (!validarEmail(email)) {
            alert("O e-mail inserido não é válido.");
            return;
        }      

        if (message === "") {
            alert("O campo 'Message' está vazio.");
            return;
        }

        if (!consent) {
            alert("Você precisa marcar o consentimento.");
            return;
        }

        alert("Entrar");
    });
}


function validarEmail(email) {
    const regex = /\S+@\S+/; 
    return regex.test(email);
}