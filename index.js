import validator from "./validator.js";

let getNumber = document.getElementById("numeroDoCartao");     

    function validatorCard(){
     let numberCard = getNumber.value;
     let result = validator.isValid(numberCard);
     let mask = validator.maskify(numberCard);
     let finalResult = document.getElementById("finalResult");
    

     if(numberCard == "") {
        return finalResult.textContent = "Digite um número"
     }
     if (result) {
         finalResult.textContent = mask + "Cartão válido";
     }
     else{
        finalResult.textContent = mask + "Cartão inválido";

     }
     document.getElementById("numeroDoCartao").value = "";
    }

 let runbtn = document.getElementById("btn");
 runbtn.addEventListener("click", validatorCard);





