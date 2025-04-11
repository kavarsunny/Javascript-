var mymaps = new Map();

mymaps.set(1,"uno");
mymaps.set(2,"dos");

console.log(mymaps);

for (let key of mymaps.keys()){
    console.log(`key is ${key}`);
}

//mymaps.forEach((v , k) =>console.log(`${value}`));mym
mymaps.delete(2);
console.log(mymaps);