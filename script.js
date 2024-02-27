function armazenarValor(){
    alert("Seu cadastro foi realizado com sucesso")

}
function mostrarDados(){
    var nome = document.getElementById("nome").value;
    var idade = document.getElementById("idade").value;
    var altura = document.getElementById("altura").value;
    var peso = document.getElementById("peso").value;

    alert("Seu Cadastro:\nNome: "+nome+"\nIdade: "+idade+ "\nAltura: "+altura+"\nPeso: "+peso)
}