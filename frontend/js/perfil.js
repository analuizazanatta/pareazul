
var nomeUsuario = document.querySelector('#nome-usuario');
var cpfUsuario = document.querySelector('#cpf-usuario');
var emailUsuario = document.querySelector('#email-usuario');

var nomeMsgErro = document.querySelector('#msg-erro-nome');
var cpfMsgErro = document.querySelector('#msg-erro-cpf');
var emailMsgErro = document.querySelector('#msg-erro-email');

var usuarioLogado = document.querySelector('#usuario_logado');


// Validar dados
nomeUsuario.addEventListener('keyup', function(event) {validaCampos()});
cpfUsuario.addEventListener('keyup', function(event) {validaCampos()});
emailUsuario.addEventListener('keyup', function(event) {validaCampos()});


// Validar campos
function validaCampos() {
    let valido = true;

    if (nomeUsuario.value === '') {
        nomeUsuario.classList.add('is-invalid');
        nomeMsgErro.innerText = 'Preencha o campo Nome.';
        nomeMsgErro.style.display = 'block';
        valido = false;
    } else {
        nomeUsuario.classList.remove('is-invalid');
        nomeMsgErro.style.display = 'none';
    }

    if (cpfUsuario.value === '') {
        cpfUsuario.classList.add('is-invalid');
        cpfMsgErro.innerText = 'Preencha o campo Nome.';
        cpfMsgErro.style.display = 'block';
        valido = false;
    } else {
        cpfUsuario.classList.remove('is-invalid');
        cpfMsgErro.style.display = 'none';
    }

    if (emailUsuario.value === '') {
        emailUsuario.classList.add('is-invalid');
        emailMsgErro.innerText = 'Preencha o campo Nome.';
        emailMsgErro.style.display = 'block';
        valido = false;
    } else {
        emailUsuario.classList.remove('is-invalid');
        emailMsgErro.style.display = 'none';
    }

    return valido;
}


// Atualizar dados
function confirmarPerfil() {
    if (validaCampos()) {

        const body = {
            nome : nomeUsuario.value,
            cpf : cpfUsuario.value,
            email : emailUsuario.value
        };

        callApiPost("PUT", "usuario/" + usuarioLogado.value, function(data) {
            if (data.mensagem) {
                alert('Erro ao atualizar pefil: ' + data.mensagem)
            } else {
                $('#modal-perfil').modal('toggle'); 
                alert('Dados atualizados com sucesso!');
            }
        }, body);
    }
}