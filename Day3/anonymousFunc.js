//ANONYMOUS FUNCTIONS

// a. Print odd numbers in an array

var odd = function(nums) {
    for (i=0;i<=nums.length;i++){
        if (i%2!=0){
            console.log(i)
        }
    }
}
odd([1,2,3,4,5,6,7,8,9])


// b. Convert all the strings to title caps in a string array

var caps = function(string) {
    for (let i=0;i<string.length;i++){
        string[i] = string[i][0].toUpperCase() + string[i].slice(1);
        
    }
    console.log(string.join(' '))
    return string
}
caps(['apple', 'bat', 'cat', 'dog'])


//c. Sum of all numbers in an array

var sum = function(arr3){

    let sum = 0
    for (i=0;i<arr3.length;i++){
        
        (sum += arr3[i])
    }   
    console.log(sum) 
}
sum([1,2,3,4,5])


// d. Return all the prime numbers in an array

var primeNum = function(arr) {
    function checkPrime(n) {
        if (n<= 1) return false
        if (n==2) return true // 2 is prime
        if (n%2==0) return false // other even numbers are not prime
        for (i=3;i<=Math.sqrt(n);i=i+2) {
            if (n%i==0) return false;
        }
        return true;
    }
    var primeArr = [];
    for (let i=0;i< arr.length;i++) {
        if (checkPrime(arr[i])) {
            primeArr.push(arr[i]);
        }
    }
    console.log(primeArr)
}
primeNum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])


//  e. Return all the palindromes in an array 

var palindrome = function(s) {
    
    for (i=0;i<s.length;i++){
        var a = s[i]

    s[i] = s[i].split('').reverse().join('')
        if (s[i]==a){
        console.log(s[i])
        }
    }
}
palindrome(['tara', 'racecar','sierra', 'malayalam'])


// f. Return median of two sorted arrays of the same size
var findMedian = function(arr1, arr2,){
var newArr = arr1.concat(arr2)
newArr.sort((a,b) => (a-b))
var x = newArr.length/2
console.log(newArr)
if (x%2==0){
    console.log((newArr[x]+newArr[x-1])/2)}
}
findMedian([64,6,90,32],[8,19,23,0])


/*if (x%2==0){
    console.log((newArr[x]+newArr[x+1])/2)}
}
findMedian([64,6,90,32],[8,19,23,0])*/

//  g. Remove the duplicates from an array

var findDupe = function(arr) {
    var orig = [];
    for (i=0;i<arr.length;i++) {
        if (orig.indexOf(arr[i]) == -1) {
            orig.push(arr[i]);
        }
    }
    console.log(orig)
}
findDupe([1,2,3,4,4,3,5,2,7]);


// h. Rotate an array by k times

var rotateArray = function(array,k){
    for (i=0;i<k;i++){
        array.unshift(array.pop())
    }
    console.log(array)

}
rotateArray([1,2,3,4,5,6],3)