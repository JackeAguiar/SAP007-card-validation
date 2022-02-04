 import validator from "./validator.js";

document.getElementById("btn").addEventListener("click", validatorCard);

var recuperarInput = document.getElementById("numeroDoCartao"); //aqui eu peguei o input pelo id
var digitos = recuperarInput.value; //recuperei o valor do input
var valid = validator.isValid(digitos)
function validatorCard() {

    // var recuperarInput = document.getElementById("numeroDoCartao"); //aqui eu peguei o input pelo id
    // var digitos = recuperarInput.value; //recuperei o valor do input
    // var valid=validator.isValid(digitos)
    //  console.log(digitos);
    recuperarInput.value = digitos.slice(0, 16); //aqui eu estou limitando a quantidade de numeros que vai entrar no input
    if (digitos.length <= 4) {
        return alert("Seu cartão precisa ter mais de 4 digitos para a validação")

    }
}
 function e(valid) {
   (e)prefal 
    if (valid) {
        document.getElementById("card").innerHTML = "Valido"
    }
    else {
        document.getElementById("card").innerHTML = "Inválido"
    }

     
 }

    // var arr= arr.reverse(); 
    // var valid=validator.isValid(digitos)
    //  console.log(arr);
    // var valid = validator.isValid(digitos);
    //  console.log(valid)
    
    // if (valid){
    //     document.getElementById("card").innerHTML = "Valido"
    // }
    // else {
    //     document.getElementById("card").innerHTML = "Inválido"
    // }







        // var arr = arr.reverse() 
    
        //  var arr = digitos.split("");

 
     //aqui transformo a String em array
//         arr.reverse()
//         console.log(arr);
//  var valid = validator.isValid(digitos);

//     if (valid){
//         document.getElementById("card").innerHTML = "Valido"
//     }
//     else {
//         document.getElementById("card").innerHTML = "Inválido"
//     }

    





