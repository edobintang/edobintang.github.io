const pwElement = document.getElementById('pw')
const copyElement = document.getElementById('copy')
const lengthElement = document.getElementById('length')
const uppercaseElement = document.getElementById('uppercase')
const lowercaseElement = document.getElementById('lowercase')
const numberElement = document.getElementById('number')
const symbolElement = document.getElementById('symbol')
const generateElement = document.getElementById('generate')

const upperDict = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerDict = "abcdefghijklmnopqrstuvwxyz"
const numbers = "0123456789"
const symbols = "!@#$%^&*()_+'"

function getLowerCase() {
    return lowerDict[Math.floor(Math.random() * lowerDict.length)]
}

function getUpperCase() {
    return upperDict[Math.floor(Math.random() * upperDict.length)]
}

function getNumber() {
    return numbers[Math.floor(Math.random() * numbers.length)]
}

function getSymbol() {
    return symbols[Math.floor(Math.random() * symbols.length)]
}

function generatePassword() {
    const length = lengthElement.value

    let password = ''

    if (uppercaseElement.checked) {
        password += getUpperCase()
    }

    if (lowercaseElement.checked) {
        password += getLowerCase()
    }

    if (numberElement.checked) {
        password += getNumber()
    }

    if (symbolElement.checked) {
        password += getSymbol()
    }

    for (let i = password.length; i < length; i++) {
        const x = generateX()
        password += x
    }

    pwElement.innerText = password
}

function generateX() {
    const result = []

    if (uppercaseElement.checked) {
        result.push(getUpperCase())
    }

    if (lowercaseElement.checked) {
        result.push(getLowerCase())
    }

    if (numberElement.checked) {
        result.push(getNumber())
    }

    if (symbolElement.checked) {
        result.push(getSymbol())
    }

    if (result.length === 0) {
        return ''
    }

    return result[Math.floor(Math.random() * xs.length)]
}

generateElement.addEventListener('click', generatePassword)

copyElement.addEventListener('click', () => {
    const textarea = document.createElement("textarea")

    const password = pwElement.innerText

    if (!password) { return }

    textarea.value = password
    document.body.appendChild(textarea)
    textarea.select()
    document.execCommand("copy")
    textarea.remove()
    alert("Password copied to Clipboard!")
})

