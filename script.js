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
    console.log(password)
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

    return result[Math.floor(Math.random() * result.length)]
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

let c = document.getElementById("c");
let ctx = c.getContext("2d");

c.height = window.innerHeight;
c.width = window.innerWidth;

//Matrix characters - taken from the unicode charset
let charMatrix = "eduardobintang";
//converting the string into an array of single characters
charMatrix = charMatrix.split("");

const font_size = 10;
let columns = c.width / font_size; //number of columns for the rain
//an array of drops - one per column
let drops = [];
//x below is the x coordinate
//1 = y co-ordinate of the drop(same for every drop initially)
for (let x = 0; x < columns; x++)
    drops[x] = 1;

//drawing the characters
function draw() {
    //Black BG for the canvas
    //translucent BG to show trail
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, c.width, c.height);

    ctx.fillStyle = "#0F0"; //green text
    ctx.font = font_size + "px arial";
    //looping over drops
    for (let i = 0; i < drops.length; i++) {
        //a random chinese character to print
        let text = charMatrix[Math.floor(Math.random() * charMatrix.length)];
        //x = i*font_size, y = value of drops[i]*font_size
        ctx.fillText(text, i * font_size, drops[i] * font_size);

        //sending the drop back to the top randomly after it has crossed the screen
        //adding a randomness to the reset to make the drops scattered on the Y axis
        if (drops[i] * font_size > c.height && Math.random() > 0.975)
            drops[i] = 0;

        //incrementing Y coordinate
        drops[i]++;
    }
}

setInterval(draw, 33);

