function sumtwo(a,b, ...args){
    console.log(args);
    let sum = 0;
    for(const arg of args){
        sum += arg;

    }
    return sum;
}
console.log(sumtwo(2,3,1,5,7));