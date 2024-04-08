const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const symbolsOff = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const numbersOff = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];


const lengthPassword = document.getElementById("length")

const button = document.getElementById("generate")

//list of functions 

function generatePassword(){
  let sumCaracter1 = ""
    let sumCaracter2 = ""
    
    //concatenate terms on it
    for (let i = 0 ; i < lengthPassword.value ; i++){
        sumCaracter1 +=  characters[Math.floor(Math.random()*characters.length)]
        sumCaracter2 +=  characters[Math.floor(Math.random()*characters.length)]
    }
   
  const textfieldLeft = document.getElementById("text-left")

  const textfieldRight = document.getElementById("text-right")
    
    //display to option for better
    textfieldLeft.value = sumCaracter1
    textfieldRight.value = sumCaracter2
 
}

function displayLenghtPassword(event){
  const lengthPasswordLabel = document.getElementById("lengthLabel")

  lengthPasswordLabel.textContent =  " Length password : " +event.target.value;
}


//list of event listener in app
button.addEventListener("click",() =>{
  generatePassword()
})



lengthPassword.addEventListener("input", (event) => {
 displayLenghtPassword(event)
})