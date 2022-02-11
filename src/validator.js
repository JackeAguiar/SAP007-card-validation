let validator = {
    isValid: function (numberCard) {
        let arr = Array.from(numberCard)
        let numrever = arr.reverse()
        let num = 0

        for (let i = 0; i < numrever.length; i++) {
            let numberDoIndice = Number(numrever[i])
            if (i % 2 != 0) {
               numberDoIndice = numberDoIndice*2                                  
                if (numberDoIndice > 9) {
                    numberDoIndice = numberDoIndice- 9
                    num = num +  numberDoIndice                           
                }
                else {
                    num = num + (numberDoIndice)
                }
            }
            else {
                num = num + numberDoIndice
            }
        }
        if (num % 10 === 0) {
            return true
        }
        else {
            return false
        }

    },


maskify: function(mask) {
    const lastFourNumber = 4
    let mask1 = ""
    for (let i = 0; i < mask.length; i++) {
        if (i >= ((mask.length) - lastFourNumber)) {
            mask1 = mask1 + mask.charAt(i)
        } else {
            mask1 = mask1 + "#"
        }
    }
    return mask1
}   

}
export default validator
