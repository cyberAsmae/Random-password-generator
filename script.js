

// const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
// "/"];

let lettersNumbers= ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

let lettersSymbols= ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?", "/"];

let numbersSymbols= ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let lettersNumbersSymbols = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


let generatePasswords = document.getElementById("generate");
let choice1 = document.getElementById("letters-numbers");
let choice2 = document.getElementById("letters-symbols");
let choice3 = document.getElementById("numbers-symbols");
let choice4 = document.getElementById("letters-numbers-symbols");
 
let passwd1 = document.getElementById("Pass1");
let passwd2 = document.getElementById("Pass2");

generatePasswords.addEventListener('click', function() { 
   choice1.style.display = 'block';
   choice2.style.display = 'block';
   choice3.style.display = 'block';
   choice4.style.display = 'block';
}); 

let passwordLength = 15

function getRandom1() {
    let random1 = Math.floor(Math.random() * lettersNumbers.length)
    return lettersNumbers[random1]
}

function generateRandomPassword1() {
    let randomPassword1 = ""
    for (let i = 0; i < passwordLength; i++) {
        randomPassword1 += getRandom1()         
    }
    return randomPassword1
   }


const generatedPasswordOne1 = generateRandomPassword1();
const generatedPasswordTwo1 = generateRandomPassword1();
//console.log(generatedPasswordOne1)


choice1.addEventListener('click', function() {
   document.getElementById("pass1").textContent = generatedPasswordOne1;
   document.getElementById("pass2").textContent = generatedPasswordTwo1;
})
function getRandom2() {
    let random2 = Math.floor(Math.random() * lettersSymbols.length)
    return lettersSymbols[random2]
}

function generateRandomPassword2() {
    let randomPassword2 = ""
    for (let i = 0; i < passwordLength; i++) {
        randomPassword2 += getRandom2()         
    }
    return randomPassword2
   }


const generatedPasswordOne2 = generateRandomPassword2();
const generatedPasswordTwo2 = generateRandomPassword2();



choice2.addEventListener('click', function() {
   document.getElementById("pass1").textContent = generatedPasswordOne2;
   document.getElementById("pass2").textContent = generatedPasswordTwo2;
})
function getRandom3() {
    let random3 = Math.floor(Math.random() * numbersSymbols.length)
    return numbersSymbols[random3]
}

function generateRandomPassword3() {
    let randomPassword3 = ""
    for (let i = 0; i < passwordLength; i++) {
        randomPassword3 += getRandom3()         
    }
    return randomPassword3
   }


const generatedPasswordOne3 = generateRandomPassword3();
const generatedPasswordTwo3 = generateRandomPassword3();



choice3.addEventListener('click', function() {
   document.getElementById("pass1").textContent = generatedPasswordOne3;
   document.getElementById("pass2").textContent = generatedPasswordTwo3;
})
function getRandom4() {
    let random4 = Math.floor(Math.random() * lettersNumbersSymbols.length)
    return lettersNumbersSymbols[random4]
}

function generateRandomPassword4() {
    let randomPassword4 = ""
    for (let i = 0; i < passwordLength; i++) {
        randomPassword4 += getRandom4()         
    }
    return randomPassword4
   }


const generatedPasswordOne4 = generateRandomPassword4();
const generatedPasswordTwo4 = generateRandomPassword4();



choice4.addEventListener('click', function() {
   document.getElementById("pass1").textContent = generatedPasswordOne4;
   document.getElementById("pass2").textContent = generatedPasswordTwo4;
})
