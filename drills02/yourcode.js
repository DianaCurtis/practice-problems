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

function getMinMaxMean(){

}

function findMode(){

}
