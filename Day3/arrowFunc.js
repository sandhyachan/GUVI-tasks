//ARROW FUNCTIONS

// a. Print odd numbers in an array

var fn = (nums) => {
    for (i=0;i<=nums.length;i++){
        if (i%2!=0){
            console.log(i)
        }
    }
}
fn([1,2,3,4,5,6,7,8,9])


// b. Convert all the strings to title caps in a string array

var caps = (string)=>{
    for (let i=0;i<string.length;i++){
        string[i] = string[i][0].toUpperCase() + string[i].slice(1);
        
    }
    console.log(string.join(' '))
    return string
}
caps(['apple', 'bat', 'cat', 'dog'])


//c. Sum of all numbers in an array

var sum = (arr)=>{
    let n = 0
    for (i = 0; i<arr.length;i++){

        n += arr[i]
    }
    console.log(n)

}
sum([1,2,3,4,5])


// d. Return all the prime numbers in an array

var prime = (p)=>{ 
        if (p <= 1)
            return false;
        for ( x = 2; x*x<=p; x++){
            if (p % x == 0) 
                return false;
        }
        return true;
}

var primer = (pr)=>{
    var primeNo=[]
    for (i=0;i<pr.length;i++){
        if(prime(pr[i])){
            primeNo.push(pr[i]);

        }
    }
    return primeNo;
}

var primeNum = primer([11,9,25,23])
console.log(primeNum)

 


//  e. Return all the palindromes in an array 

var palindrome = (s) => {
    
    for (i=0;i<s.length;i++){
        var a = s[i]

    s[i] = s[i].split('').reverse().join('')
        if (s[i]==a){
        console.log(s[i])
        }
    }
}
palindrome(['mitchell', 'arora','receive', 'deified'])