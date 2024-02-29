function mostrarDadoscadastro(){
    var nome = document.getElementById("user").value;
    var email = document.getElementById("email").value;
    var nucpf = document.getElementById("cpf").value;
    var tel = document.getElementById("tel").value;
    var data_nsc = document.getElementById("data_nsc").value;
    var senha1 = document.getElementById("senha1").value;
    var senha2 = document.getElementById("senha2").value;
    var senha = "";

    if (senha1 == senha2) {
        senha = senha1
        location.reload()
        alert("Seu cadastro foi realizado com sucesso")
        alert("Seu Cadastro:\nNome: "+nome+"\nE-mail: "+email+ "\nCPF: "+nucpf+"\nTelefone: "+tel+"\nData nascimento: "+data_nsc+"\nSenha: "+senha)
    } else {
        alert("Senha incompativel !")
    }  
}

function atualizarpagina(){
    location.reload();
}

function coletarDados(){
    var email = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;
    location.reload()
    alert("Acesso Liberado")
    alert("Seu acesso:\nE-mail: "+email+"\nSenha: "+senha)
}
