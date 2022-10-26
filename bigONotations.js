/*

    - 0(n²) = Loop within a loop
    - 0(n) = Proportional
    - 0(log n) = Divide and Conqur
    - 0(1) = Constant time

    We want to be either 0(1), 0(log n), or 0(n)

*/

// 0(n) = we pass the function n (10) and it runs n times (in this case it runs 10 times)
function logItmes1(n){ // 0(n)
    for(let i = 0; i < n; i++){
        console.log(i)
    }
}

logItmes1(10)

// Dropped Constant
/*
    logItmes2 runs n + n times (6 times, 3 for each loop), or 2n. So it is a 0(2n) operations
    Constants are dropped, meaning logItmes2 has 0(n) operation just like logItmes1
*/
function logItmes2(n){ // 0(n)
    for(let i = 0; i < n; i++){
        console.log(i)
    }

    for(let j = 0; j < n; j++){
        console.log(j)
    }
}

logItmes2(3)

// n²
/*
    logItmes3 runs n * n times (100 times), or n² ( 0(n²) )
*/
function logItmes3(n){ // 0(n²)
    for(let i = 0; i < n; i++){
        for(let j = 0; j < n; j++){
            console.log(i, j)
        }
    }
}

logItmes3(10)

// n³
/*
    logItmes3 runs n * n * n times (1,000 times), or n³ ( 0(n³) )
*/
function logItmes4(n){ // 0(n³)
    for(let i = 0; i < n; i++){
        for(let j = 0; j < n; j++){
            for(let k = 0; k < n; k++){
                console.log(i, j, k)
            }
        }
    }
}

logItmes4(10)

// 
/*
    logItmes5 takes in two arguments and runs two loops
    Initially it seems that, as it has two loops, it therefore has a 0(2n), but it doesn't
    a and b can potentionally be two different values, so n cannot equal both a and b
    this can therefore only be simplfied to 0(a + b)
    
    logItmes5 runs n * n times (100 times) or n² ( 0(n²) )
*/
function logItmes5(a, b){ // 0(n²)
    for(let i = 0; i < a; i++){
        console.log(i)
    }

    for(let j = 0; j < b; j++){
        console.log(j)
    }
}

logItmes5(10)

// Drop Non-Dominant
/*
    This runs 0(n²) for the nested loop, then 0(n) for the second loop, giving the function an 0(n² + n)
    n² is the dominant term, n by itself is the non-dominant term, so n is dropped. logItems6 has an 0(n²))
*/
function logItems6(n){ //0(n²)
    for(let i = 0; i < n; i++){ // 0(n²)
        for(let j = 0; j < n; j++){
            console.log(i, j)
        }
    }

    for(let k = 0; k < n; k++){ // 0(n)
        console.log(k)
    }
}

logItems6(10)

// 0(1) THE MOST EFFECIENT BIG 0 NOTATION (a.k.a CONSTANT TIME)
/*
    0(1) is referred to as contant time
*/
function addItems7(n){ // 0(1)
    return n + n
}

// 0(2)
/*
    0(2) has two operations, but is still simplified to 0(1)
    The number of operations don't change as n changes (wether n = 10 or n = 1,000,000), this is why it is constant time and why it's simplified to 0(1) 
*/
function addItems8(n){ // 0(1)
    return n + n + n
}

// 0(log n)
/*
    Technique called Divide and Conqur
*/
