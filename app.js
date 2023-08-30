function F(n){
    let sequence = [1] // initialize Fibonacci sequence
    // my variables
    let a = 1;
    let b = 0;
    let c = 1;

    for (let i=0; i<n; i++){
        a = c
        c = a + b;
        b = a
        sequence.push(c)
    }
    return sequence
}



console.log(F(5)) // print the sequence