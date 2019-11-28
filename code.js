const passwordInput = document.querySelector('#passwordInput')
const serviceName = document.querySelector('#serviceName')
const button = document.querySelector('button')
const output = document.querySelector('.output')




const vowelCal = str => {
    const vowelNum = str.match(/[aeiou]/g)
    const index = vowelNum === null ? 0 : vowelNum.length - 1
    const res = str.charAt(index)
    return res
}


button.addEventListener('click', () => {
    let result
    const pswValue = passwordInput.value
    const name = serviceName.value
    const firstChar = name.charAt(name.length - 1)
    const secondChar = vowelCal(name)
    const thirdChar = name.match(/[^aeiou]/g).length
    const fourthChar = name.charAt(0)


    result = firstChar + secondChar + pswValue + thirdChar + fourthChar
    output.textContent = result

})