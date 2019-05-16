/* 
Given an array of numbers, add up all the numbers
input: [1,5,3,2,6]
output: returns 17
*/

function sumArray(inputArray){
    var sum =0;
    for(indexArray = 0; indexArray<inputArray.length;indexArray++){
        sum += inputArray[indexArray];
    }
    return sum;
}

/*
Given an array and a number, sum the array until you reach the number. 
Keep adding any values that would total below the given value. Return an array of every number you could add.
For example:

input: ([1,100,2,4,5,6],7)
output: [1,2,4]

use a for loop that will go through the array from start to finish 
    check to see if the current value is smaller than the max
    if T then take out the current value in the array and add it to a new array
        do this using splice
    if f skip that value
return the new array

*/
function fitWithinVal(inputArray, maxValue){
    var output =[];
    var sum = 0;

    for(indexArray = 0; indexArray < inputArray.length; indexArray++){

        sum += inputArray[indexArray];
        if(sum <= maxValue){
            output.push(inputArray[indexArray]);
        }else{
            sum -= inputArray[indexArray];
        }

    }
    return output;
}

/*
Given an array of naems and a value, return an array of only the names shorter than the given
value for example:
input: ['Clyde','Sue','Jerry','Jo'],4
return: ['Sue','Jo']

use a for loop
    grab the current value and check to see if the length is less than the maxvalue
*/

function getAllNamesShorterThan(inputArray,maxValue){

    var output=[];
    
    for(indexArray = 0; indexArray < inputArray.length; indexArray++){

        if(inputArray[indexArray].length < maxValue){
            output.push(inputArray[indexArray]);
        }
    }

    return output;
}


function makeLabel(){
  }
