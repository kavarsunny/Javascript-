// var ele={
//     name:"sunny",
//     address:"surat",
//     college:"ssec",
//     courselist:[],
//     buycourse: function(name){
//         this.courselist.push(name);
//     },
//     getcousecount: function (){
//         return`${this.name} have ${this.courselist.length}course`;
//     },
// };
// console.log(ele.name)
// ele.college="vgec";
// console.log(ele.college);
// console.table(ele)

// var courselist=true;
// console.log(ele.name);
// console.log(ele.getcousecount);
// ele.buycourse("js");
// console.log(ele.getcousecount());
var User = {
  name: "",
  getUsername: function () {
    console.log(`user name is :${this.name}`);
  },
};
var sunny = Object.create(User);
console.log(sunny);
sunny.name = "kavar";

sunny.getUsername();
