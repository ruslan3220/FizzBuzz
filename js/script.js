
let elForm = document.querySelector(".form");
let elInput = document.querySelector(".input");
let elHeading = document.querySelector(".heading");
let elResult = document.querySelector(".result");


elForm.addEventListener ("submit", function(evt){

    evt.preventDefault();

    let inputValue = elInput.value;

    let box;

     if(inputValue % 3 === 0) {
         box = "Fizz";
     } else if(inputValue % 5  === 0) {
         box = "Buzz";
     } else if(inputValue % 3 === 0 && inputValue % 5 === 0) {
         box = "FizzBuzz";
     } else {
         box = inputValue;
     }

     elResult.textContent = `${box}`;
    })