//IIFE FUNCTIONS

// a. Print odd numbers in an array
(function(nums){
    for (i=0;i<=nums.length;i++){
        if (i%2!=0){
            console.log(i)
        }
    }
})([1,2,3,4,5,6,7,8,9])


// b. Convert all the strings to title caps in a string array
(function(string){
    for (let i=0;i<string.length;i++){
        string[i]=string[i][0].toUpperCase() + string[i].slice(1)
    }
    console.log(string.join(' '))
    return string

})(['apple', 'ball', 'cat', 'dog'])


//c. Sum of all numbers in an array

(function(arr3){

    let sum = 0
    for (i=0;i<arr3.length;i++){
        
        (sum += arr3[i])
    }   
    console.log(sum) 
})([1,2,3,4,5])

// d. Return all the prime numbers in an array

(function(arr) {
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
})([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])


//  e. Return all the palindromes in an array 

(function(s) {
    
    for (i=0;i<s.length;i++){
        var a = s[i]

    s[i] = s[i].split('').reverse().join('')
        if (s[i]==a){
        console.log(s[i])
        }
    }
})
(['hannah', 'sally', 'tenet','prince'])


//Return median of two sorted arrays of the the same size
(function(arr1, arr2,){
    var newArr = arr1.concat(arr2)
        newArr.sort((a,b) => (a-b))
        var x = newArr.length/2
        console.log(newArr)
        if (x%2==0){
            console.log((newArr[x]+newArr[x-1])/2)
        }
    })
([64,6,90,32],[8,19,23,0])


//  g. Remove the duplicates from an array

(function(arr) {
    var orig = [];
    for (i=0;i<arr.length;i++) {
        if (orig.indexOf(arr[i]) == -1) {
            orig.push(arr[i]);
        }
    }
    console.log(orig)
})([1,2,3,4,4,3,5,2,7]);


// h. Rotate an array by k times

(function(array,k){
    for (i=0;i<k;i++){
        array.unshift(array.pop())
    }
    console.log(array)

})([1,2,3,4,5,6],3)