import validator from "./validator";

document.getElementById("btn").addEventListener("click",validar);


function validar() {
    var recuperarInput = document.getElementById("numeroDoCartao"); //aqui eu peguei o input pelo id
    var digitos = recuperarInput.value; //recuperei o valor do input
    console.log(digitos);
    
    recuperarInput.value = digitos.slice(0, 16); //aqui eu estou limitando a quantidade de numeros que vai entrar no input
    if (digitos.length != 16){ 
        return alert("Seu cartão tem que ter 16 digitos para a validação");}
        console.log("Validar Cartão", digitos);
    
        var marray = digitos.split(""); //aqui transformo a String em array
        marray.reverse()
        console.log(marray);
    }
