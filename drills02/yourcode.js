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

function wordLengths(){

}

function getMinMaxMean(){

}

function findMode(){

}
