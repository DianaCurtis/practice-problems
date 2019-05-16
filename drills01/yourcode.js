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


/*
given an object with data for a person in it, generate a shipping label in the following form:
example:
        input: [ { "familyName": "McGee",
                    "givenName": "Chuckles",
                    "greeting": "Miss.",
                    "age": 28,
                    "height": 165,
                    "colors": { "eye": "green",
                                "hair": "green" },
                    "home address": { "streetNumber": "12345",
                                        "streetName": "Any St",
                                        "state": "Mo",
                                        "zip": 63102,
                                         "city": "Kansas City" }
                      } ]
*/


function makeLabel(userInput){
    // create a variable that sill store the sentence to be output

    // call the greeting
    // call the givenName
    // call the familyName
    // add \n
    // call the street number
    // call the streetName
    // add \n
    // add city and comma
    // add the state
    // add the zip


    // return the sentence


    var sentence =' ';
    sentence = userInput['greeting'] + ' '
        + userInput['givenName'] + ' '
        + userInput['familyName'] + '\n'
        + userInput['home address'].streetNumber + ' '
        + userInput['home address'].streetName + '\n'
        + userInput['home address'].city + ', '
        + userInput['home address'].state + ' '
        + userInput['home address'].zip;

    return sentence;
}
