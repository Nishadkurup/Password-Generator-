
// input variable
let enterpassword;
let  confirmLowercase;
let  confirmUppercase;
let  confirmNumber;
let  confirmSymbol;
let  Senario; 

//generate function

// Generate Random lowercase letters
function  getRandamLower(){
    return String.fromCharCode(Math.floor(Math.random()*26)+97);
}

// Generate Random Upper letters
function  getRandamUpper(){
    return String.fromCharCode(Math.floor(Math.random()*26)+65);
}


// Generate Random Number 
function  getRandumNumber(){
    return String.fromCharCode(Math.floor(Math.random()*10)+48);
}

// Generate Random Symbol
function  getRandumSymbol(){
let symbols= "~!@#$%^&*()_+=[]{};.,/?";
return symbols[Math.floor(Math.random()*symbols.length)];
}

//Defining all funtion in an object

let randomFunc ={
    lower:getRandamLower(),
    upper:getRandamUpper(),
    number: getRandumNumber(),
    symbol:getRandumSymbol ()

};

var generateBtn = document.querySelector("#generate");

// Write password to the #password input

function writePassword() {
  let password = generatePassword();
  let  passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Start function for taking input from user for password generation.

function generatePassword(){
    
    enterpassword=parseInt(prompt("Enter the length of password & choose between 8 & 128"));

    if (  enterpassword < 8 || enterpassword > 128) {
        alert("Please enter the valid password length");
        return ("Please click the Generate Password Button again and enter correct password length")
        
    }
    else {
        confirmNumber = confirm("Will this contain numbers?");
        confirmUppercase = confirm("Will this contain Uppercase letters?");
        confirmLowercase = confirm("Will this contain Lowercase letters?");
        confirmSymbol = confirm("Will this contain special characters?");
    }
        
     // Various combination for password genrations.

    //  All condition satisfied
    if ( confirmSymbol && confirmNumber && confirmUppercase && confirmLowercase) {
       
        Senario=randomFunc.lower.concat(randomFunc.upper,randomFunc.number,randomFunc.symbol);
       //console.log(Senario);
    
    }

    // 3 condition satisfied

    else if (confirmSymbol && confirmNumber && confirmUppercase ){

    Senario=randomFunc.upper.concat(randomFunc.number,randomFunc.symbol);
    
    }
    else if (confirmSymbol && confirmNumber && confirmLowercase){
        Senario=randomFunc.lower.concat(randomFunc.number,randomFunc.symbol);
        

    }
    else if (confirmSymbol && confirmLowercase && confirmUppercase ){
        Senario=randomFunc.lower.concat(randomFunc.upper,randomFunc.symbol);
    }
    else if (confirmNumber && confirmLowercase && confirmUppercase ){
        Senario=randomFunc.lower.concat(randomFunc.upper,randomFunc.number);
       // console.log(Senario);
    }

      // 2condition satisfied

    else if ( confirmSymbol && confirmNumber ){
        Senario=randomFunc.number.concat(randomFunc.symbol);
        

    }
    else if (confirmSymbol && confirmUppercase){
        Senario=randomFunc.symbol.concat(randomFunc.upper);


    }
    else if (confirmSymbol && confirmLowercase){
        Senario=randomFunc.symbol.concat(randomFunc.lower);
    }
    else if (confirmNumber && confirmUppercase){
        Senario=randomFunc.number.concat(randomFunc.upper);
    }
    else if (  confirmNumber &&  confirmLowercase){
        Senario=randomFunc.number.concat(lower);
    }
    else if (confirmUppercase && confirmLowercase){
        Senario=randomFunc.upper.concat(randomFunc.lower)
        console.log(Senario);
    }

      // 1 condition satisfied
    else if( confirmSymbol){
        Senario=randomFunc.symbol;
    } 
    
     else if (confirmNumber){
        Senario=randomFunc.number;

     } 
     else if (confirmUppercase){
        Senario=randomFunc.upper;


     }
      else if  (confirmLowercase){

        Senario=randomFunc.lower;
       // console.log(Senario);
      }
      

      // Storing random password generated in arrey
      let holder =[];
      for (i=0;i<enterpassword;i++){
     let randompass=Senario[Math.floor(Math.random()*Senario.length)];
        holder.push(randompass);
      }
      //console.log(holder);

      // Using .join method to convert it into string 

      let password=holder.join("");
      return password;
      
      
    }    
     
    






























// function promptMe(){
//     let userclick = prompt("Please entre the length of password");
//     let needlower= confirm("do you want Lower chacter");
//     // let needupper= confirm("do you want Upper chacter");
//     // let neednumber= confirm("do you want Number chacter");
//     // let needsymbol= confirm("do you want Symbols chacter"); 
//     // let generateBtn = document.querySelector("#generate");
//     let passwordlength=Number( userclick);
//     // console.log(passwordlength);
 

