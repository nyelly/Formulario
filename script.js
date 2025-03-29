window.onload = function() {
    const botao = document.querySelector('.botao');
    const campos = document.querySelectorAll('.input-field');
    const erros = document.querySelectorAll('.error-message');
    const consent = document.getElementById('consent');

    campos.forEach(input => {
        input.addEventListener('input', validarForm);
    });
    consent.addEventListener('change', validarForm);

    function validarForm() {
        let temErro = false;

        erros.forEach(e => e.innerText = "");

        if (campos[0].value.trim() === "") {
            erros[0].innerText = "O campo 'First Name' está vazio.";
            temErro = true;
        }

        if (campos[1].value.trim() === "") {
            erros[1].innerText = "O campo 'Last Name' está vazio.";
            temErro = true;
        }

        if (campos[2].value.trim() === "") {
            erros[2].innerText = "O campo 'Email' está vazio.";
            temErro = true;
        } else if (!campos[2].value.includes("@")) {
            erros[2].innerText = "O e-mail precisa conter o símbolo '@'.";
            temErro = true;
        } else if (!validarEmail(campos[2].value.trim())) {
            erros[2].innerText = "O e-mail inserido não é válido.";
            temErro = true;
        }

        if (campos[3].value.trim() === "") {
            erros[3].innerText = "O campo 'Message' está vazio.";
            temErro = true;
        }

        if (!consent.checked) {
            erros[4].innerText = "Você precisa marcar o consentimento.";
            temErro = true;
        }

        botao.disabled = temErro;
    }

    botao.addEventListener('click', function() {
        alert("Formulário enviado com sucesso!");
    });
}

function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}
