let validator = {
    isValid: function (numberCard) {
        let arr = Array.from(numberCard)
        let numrever = arr.reverse()
        let total = 0

        for (let i = 0; i < numrever.length; i++) {
            let numberDoIndice = Number(numrever[i])
            if (i % 2 != 0) {
               numberDoIndice = numberDoIndice*2                                  
                if (numberDoIndice > 9) {
                    numberDoIndice = numberDoIndice- 9
                    total = total +  numberDoIndice                           
                }
                else {
                    total = total + (numberDoIndice)
                }
            }
            else {
                total = total + numberDoIndice
            }
        }
        if (total % 10 === 0) {
            return true
        }
        else {
            return false
        }

    },


maskify: function(mask) {
    const lastFourNumber = 4
    let mascarar = ""
    for (let i = 0; i < mask.length; i++) {
        if (i >= ((mask.length) - lastFourNumber)) {
            mascarar = mascarar + mask.charAt(i)
        } else {
            mascarar = mascarar + "#"
        }
    }
    return mascarar
}   

}
export default validator
