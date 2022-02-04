const validator = {  
    isValid:function (digitos) {
        var arr = digitos.split("").reverse();
        console.log(arr);
     for (var numbers = 0; numbers< arr.lenght; numbers++){
         arr[numbers] = parseInt(arr[numbers])
         console.log(numbers)
     }
    var numrever = arr
    console.log(numrever)
    for (var i = 0; i < numrever.lenght; i++){

        if(i % 2 !==0){
            var double = numrever[i] *2;
           numrever[i] = double;
           if (numrever[i] > 9){
               numrever[i] -=9;
           }
        }
    }
    // console.log("loop", numrever);

   for (var i in numrever) {
       sumNum += (numrever[i]);
   }
    // console.log("soma",sumNum);
    return sumNum % 10 ===0;
}
   


};
export default validator;
  
