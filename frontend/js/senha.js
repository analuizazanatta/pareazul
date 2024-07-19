
function confirmarAlteracaoSenha() {
    if (validarNovaSenha() === false) {
        return
    }


    const email = document.querySelector("#email-usuario").value;
    const senha = document.querySelector("#senha-atual").value;

    const body = {
        email : email,
        senha : senha
    };
    
    callApiPost("POST", "login", function(data) {

        // VALIDAR LOGIN 
        if(data.mensagem != "" && data.mensagem != undefined){
            // alert(data.mensagem);

            document.querySelector('#senha-atual').classList.add('is-invalid');

            let msgErroSenhaAtual = document.querySelector('#mensagem-erro-senha-atual');
            msgErroSenhaAtual.innerText = data.mensagem;
            msgErroSenhaAtual.style.display = 'block';

            return false;
        }

        // APOS VALIDAR O LOGIN
        // ALTERA A SENHA
        alterarSenhaUsuario();
    }, body);
}

function alterarSenhaUsuario(){
    const senha = document.querySelector("#nova-senha").value;
    const body = {
        senha : senha
    };

    const id_usuario_logado = document.querySelector("#usuario_logado").value;
    
    callApiPost("PUT", "senhausuario/" + id_usuario_logado, function(data) {        
    }, body);
}



// Confirmar a nova senha e confirmação da nova senha
function validarNovaSenha() {
    let senhaAtual = document.querySelector('#senha-atual');
    let novaSenha = document.querySelector('#nova-senha');
    let confirmaNovaSenha = document.querySelector('#confirma-nova-senha');

    let novaSenhaValor = novaSenha.value;
    let confirmaNovaSenhaValor = confirmaNovaSenha.value;

    if (senhaAtual === '' || novaSenhaValor === '' || confirmaNovaSenhaValor === '') {
        validarPreenchimentoCamposSenha();
        return false
    }

    if (novaSenhaValor !== confirmaNovaSenhaValor) {
        novaSenha.classList.add('is-invalid');
        confirmaNovaSenha.classList.add('is-invalid');

        let msgErroNovaSenha = document.querySelector('#mensagem-erro-nova-senha');
        let msgErroConfirmaNovaSenha = document.querySelector('#mensagem-erro-confirma-nova-senha');

        msgErroNovaSenha.innerText = 'Senhas não conferem.';
        msgErroNovaSenha.style.display = 'block';

        msgErroConfirmaNovaSenha.innerText = 'Senhas não conferem.';
        msgErroConfirmaNovaSenha.style.display = 'block';

        return false 
    }
}


// Validar campos ao digitar
document.querySelector('#nova-senha').addEventListener('keyup', function(event) {
    validarPreenchimentoCamposSenha()});
document.querySelector('#confirma-nova-senha').addEventListener('keyup', function(event) {
    validarPreenchimentoCamposSenha()});
document.querySelector('#senha-atual').addEventListener('keyup', function(event) {
    validarPreenchimentoCamposSenha()});


function validarPreenchimentoCamposSenha() {
    let senhaAtual = document.querySelector('#senha-atual');
    let novaSenha = document.querySelector('#nova-senha');
    let confirmaNovaSenha = document.querySelector('#confirma-nova-senha');
    let msgErroSenhaAtual = document.querySelector('#mensagem-erro-senha-atual');
    let msgErroNovaSenha = document.querySelector('#mensagem-erro-nova-senha');
    let msgErroConfirmaNovaSenha = document.querySelector('#mensagem-erro-confirma-nova-senha');

    msgErroSenhaAtual.innerText = 'Informe a senha atual.';
    msgErroNovaSenha.innerText = 'Informe a nova senha.';
    msgErroConfirmaNovaSenha.innerText = 'Confirme a nova senha.';

    if (senhaAtual.value == '') {
        senhaAtual.classList.add('is-invalid');
        msgErroSenhaAtual.style.display = 'block';
    } else {
        senhaAtual.classList.remove('is-invalid');
        msgErroSenhaAtual.style.display = 'none';
    }

    if (novaSenha.value == '') {
        novaSenha.classList.add('is-invalid');
        msgErroNovaSenha.style.display = 'block';
    } else {
        novaSenha.classList.remove('is-invalid');
        msgErroNovaSenha.style.display = 'none';
    }
    
    if (confirmaNovaSenha.value == '') {
        confirmaNovaSenha.classList.add('is-invalid');
        msgErroConfirmaNovaSenha.style.display = 'block';
    } else {
        confirmaNovaSenha.classList.remove('is-invalid');
        msgErroConfirmaNovaSenha.style.display = 'none';
    }
}


// Reiniciar totalmente os campos ao fechar o modal
function reiniciarCamposSenha() {
    let senhaAtual = document.querySelector('#senha-atual')
    senhaAtual.classList.remove('is-invalid');
    senhaAtual.value = '';

    let novaSenha = document.querySelector('#nova-senha')
    novaSenha.classList.remove('is-invalid');
    novaSenha.value = '';

    let confirmaNovaSenha = document.querySelector('#confirma-nova-senha');
    confirmaNovaSenha.classList.remove('is-invalid');
    confirmaNovaSenha.value = '';

    document.querySelector('#mensagem-erro-senha-atual').style.display = 'none';
    document.querySelector('#mensagem-erro-nova-senha').style.display = 'none';
    document.querySelector('#mensagem-erro-confirma-nova-senha').style.display = 'none';
}

$("#modal-alterar-senha").on('show.bs.modal', function () {
    reiniciarCamposSenha();
});