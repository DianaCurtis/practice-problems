
/*
sumArray: given an array of numbers, add up all the numbers for
example: [1,5,3,2,6]
returns 17
*/

function sumArray(arrayNumbers){
    // create a storage container for the sum of the values
    // start from the beginning of the array and go until the end
	        //take the current value and add it to the the sum of the previous sum
    //end the loop
    //return the value

    var sumValue=0;

    for(var index=0; index<arrayNumbers.length; index++){
        sumValue+=arrayNumbers[index];
    }
    return sumValue;
}



/*
given an array and a number, sum the array until you reach the
 number. keep any values that would total below the given value
 return an array of every number you could add.
 for example:
    input: [1,100,2,4,5,6],7
    return: [1,2,4]
 */

function fitWithinVal(numArrayInput,numInput){

    //create output as an array
    //store the sum
    // store the current value

    // go through the array of numbers from start to finish

        //check if the sum is less than the num value
            //grab the current number from the list and compare it to the numvalue
                // if the the current value is less than the num value add it so the some
                    // using .push can add the value to the array output
                 // else do nothing, we dont need to add the value to the sum
    //end the loop
    //return the output


    //[[4,2,3,6,7,1,8,10,9], 30]
    var output=[];

    var index=0;
    var sumTwo=0;
    var currentValue=numArrayInput[index];
    var checkValue=0;


   while(sumTwo<=numInput && numArrayInput.length>index){ //10<30

       checkValue=currentValue +sumTwo; //6

       if( checkValue < numInput){ //6<30
           sumTwo+= currentValue; //10
           output.push(currentValue); //[4,2]
       }
       index++; //2
       currentValue=numArrayInput[index]; //3

     //console.log(sumTwo);

   }
   return output;
}


/*given an array of names and a value, return an array of only the names
 shorter than the given value

 for example:
        input ['Clyde','Sue','Jerry','Jo'], 4
        return ['Sue','Jo']

 */



function getAllNamesShorterThan(namesArray,numNamesArray){
    //create a container for the output
    // go through the array from start to finish
        // get the current name
        // get the length of the current name
        // determine if the length of the current name is less than the number indicated
                // F do nothing
                // T store the value
    //end loop
    //return the output


    var output=[];
    for(var index=0; index<namesArray.length;index++){
        var currentNameLength=namesArray[index].length;

        if(currentNameLength<numNamesArray){
            output.push(namesArray[index]);
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
