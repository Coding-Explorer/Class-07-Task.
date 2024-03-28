"use strict";
//Seeing the usage and importance of Functions along with advantage of Return function. Also the usage of 
//parameters and argument values.
function awesomeTea(Milk, Sugar, Teapowder) {
    let prepared = Milk + Sugar + Teapowder;
    //Milk (2cups) , sugar (1teaspoon) , tea powder (1teaspoon).
    return prepared;
}
let delivery1 = awesomeTea(2, 1, 1.5); //Miss Rubab.
console.log(delivery1);
let delivery2 = awesomeTea(3, 2, 2.5); //Miss Miral.
console.log(delivery2);
