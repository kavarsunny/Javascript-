const uno =()=>{
    return "i m one"
};

const dos=()=>{
 return new Promise((resolve, reject)=>{

 setTimeout(()=>{
    resolve ("i m two");

 },3000);
});
};
const tres=()=>{
    return " i m three";
}

const callme=async()=>{
    let valone=uno();
    console.log(valone);

    let valtwo= await dos();
    console.log(valtwo)
    ;
    let valthree=tres();
    console.log(valthree);
};


callme();
