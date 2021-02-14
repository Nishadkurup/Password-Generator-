# Password-Generator-
Password Generation Using Java script .


// Steps for  Password Generation (Algorithim)

1) Declaring all the Global variables .

let enterpassword;
let  confirmLowercase;
let  confirmUppercase;
let  confirmNumber;
let  confirmSymbol;
let  Senario; 


2)  Defining Functions for generating  Random Lower-case , Random-Upper-case , Random-Symbols & Random-Numbers.


 getRandamLower()
 getRandamUpper()
 getRandumSymbol()
 getRandumNumber()


3)  Assigning all  generated Function in an object .

 randomFunc ={
    lower:getRandamLower(),
    upper:getRandamUpper(),
    number: getRandumNumber(),
    symbol:getRandumSymbol ()
    
    };

4) Accessing Element from html with  document.querySelector using id.

var generateBtn = document.querySelector("#generate");


5) Defining  function writePassword()

6) Add event listener to generate button.

7) Start function for taking input from user for password generation.

  function generatePassword()

  a) Various combination for password genrations.

  b)  Storing random password genrated in arrey using "For" loop .

  c)  Using .join method to convert it into string .

  d)  return statment to generate Password in Placeholder.



## Acceptance Criteria    (Meet or not meet)

```
1) GIVEN I need a new, secure password
WHEN I click the button to generate a password          
THEN I am presented with a series of prompts for password criteria         Criteria   Meet   

2) WHEN prompted for password criteria
THEN I select which criteria to include in the password                    Criteria   Meet 

3) WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters    Criteria   Meet 

4)WHEN prompted for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and/or special characters             Criteria   Meet

5)WHEN I answer each prompt
THEN my input should be validated and at least one character
 type should be selected .                                                Criteria   Meet

6)WHEN all prompts are answered                                                          
THEN a password is generated that matches the selected criteria         Criteria   Meet

7) WHEN the password is generated                                                 
THEN the password is either displayed in an alert or written to the page   Criteria   Meet

```











 







   
