function doadd(x){
    return function(y){
        return x+y;

    };
}
var add5=doadd(4);
console.log(add5(5));
console.log(doadd(4)(6));