// Your code goes here!

// Import the files to index.js 

import { modulo, percentage, percentageOf, difference } from "./percentage.js";

import { calculateAspectRatio } from "./aspect-ratio.js";


// add the functionality to the UI in the index.js file

// Special operations & percentage calculations
const modulo1 = document.querySelector('#modulo_1');
const modulo2 = document.querySelector('#modulo_2');
const moduloResult = document.querySelector('#modulo_result');

const percentage1 = document.querySelector('#percentage_1')
const percentage2 = document.querySelector('#percentage_2')
const percentageResult = document.querySelector('#percentage_result');


const difference1 = document.querySelector('#difference_1')
const difference2 = document.querySelector('#difference_2')
const differenceResult = document.querySelector('#difference_result');

const percentageOf1 = document.querySelector('#percentageOf_1')
const percentageOf2 = document.querySelector('#percentageOf_2')
const percentageOfResult = document.querySelector('#percentageOf_result');



function changeEvent(first, second, result, fun) {
    let value1 = first.value;
    let value2 = second.value;
    result.value = fun(value1, value2);
}

function addEventListenersToInputs(first, second, result, fun) {

    first.addEventListener("change", () => { changeEvent(first, second, result, fun) });

    second.addEventListener("change", () => { changeEvent(first, second, result, fun) });


}

addEventListenersToInputs(modulo1, modulo2, moduloResult, modulo);
addEventListenersToInputs(percentage1, percentage2, percentageResult, percentage);
addEventListenersToInputs(percentageOf1, percentageOf2, percentageOfResult, percentageOf);
addEventListenersToInputs(difference1, difference2, differenceResult, difference);



// Aspect Ratio Calculations 


const ratio1 = document.querySelector('#ratio_1');
const ratio2 = document.querySelector('#ratio_2');
const ratioResultWidth = document.querySelector('#ratio_result-width');
const ratioResultHeight = document.querySelector('#ratio_result-height');


// function changeEvent2(value1, value2, value3, valueType, result) {
//     let value1 = ratio1.value;
//     let value2 = ratio2.value;
//     if (valueType = "h") {
//         value3 = ratioResultHeight.value;
//     } else {
//         value3 = ratioResultWidth.value;
//     }

// }



// //calculateAspectRatio(value1, value2, value3, m);

// console.log(calculateAspectRatio(value1, value2, value3, "w"));
