/*
Count Occurances: Given an array of words and a separate word, count how many times a particalur word given occurs within that array
Example:
input : ['dog','cat','dog','pig','canary','cat','dog'], 'dog'
return 3

create a container that stores the count for the word match
go through the array from start to finish in a for loop
    use a conditional to check if the current word in the array matches the search word
    if T increase the count
    if F do nothing

    return the count
*/

function countOccurences(firstArray,searchWord){
    let count = 0;
    for(firstIndex=0;firstIndex<firstArray.length;firstIndex++){
        if(firstArray[firstIndex] == searchWord){
            count++;
        }
    }
    return count;
}


/*
 Given an array of words, return an array of numbers repesenting the length of each word 
 input: ['canary','silly','dog','a','mellow']
 reutrn [6,5,3,1,6]


 create an output array that stores the length of each word

 use a for loop that goes through the array from start to finish 
    for the current item in the array finsh the length using the length method
    store the value in the ouput array

 */

function wordLengths(secondArray){
    let countArray=[];
    for(secondIndex = 0; secondIndex<secondArray.length; secondIndex++){
        countArray.push(secondArray[secondIndex].length);
    }
    return countArray;
}

/* 
Given an array of numbers, get the minimum, maximum, and mean numbers. Return them as an object. Mean is another word for average 
input [3,1,9,12,4]
return {min: 1, max:12,mean:25.8}

create an object that contains the min, max, and mean but are null values
make the first value be the max and min 
using a for loop go through the array from start to finish 
    check to see if the current value is smaller than the current min
        T then replace
        F do nothing
    check to see if the current value is greater than the current max
        T then replace
        F do nothing

    create a sum and avg variable
    find the sum by adding up the values in the array and take the sum and divide by the length of the array
    
*/


function getMinMaxMean(thirdArray){
    let output = {
        min: thirdArray[1],
        max: thirdArray[1],
        mean: 0
    }


    for(thirdIndex = 1; thirdIndex < thirdArray.length; thirdArray++){
        if (output[min]>thirdArray[thirdIndex]){
            output[min] = thirdArray[thirdIndex];
        }

        if(outout[max]<thirdArray[thirdIndex]){
            output[max] = thirdArray[thirdIndex];
        }
    }

    return output;

}

function findMode(){

}
