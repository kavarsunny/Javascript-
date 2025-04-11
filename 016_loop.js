const state=[
    "guj",
    "mp",
    "up",
];

state.forEach((s)=>(console.log(s)))

const name=["yt","amazon","fb"];
for (const n of name)
    console.log(n) ; 


const names={
    fn:"sunny"
};
for (const n in names){
    console.log(`key is a ${n} and value is:${names[n]}`)
}


