class user{
    constructor(name,email){
        this.name=name;
        this.email=email;

    }
    courselist=[];

    getinfo(){
        return{name:this.name,email:this.email}
    }
enrollcourse(name){
    this.courselist.push(name);
}
getcourselist(){
    return this.courselist;
}
}
class sub extends user{
    getadmininfi(){
        return "i m subclass"
    }
}
module.exports=user;

const rock=new user("rock","kavar51@gmail.com");
console.log(rock.getinfo());
rock.enrollcourse("a bootcamp");
console.log(rock.getcourselist());
console.log(rock.courselist);
const tom =new sub();
console.log(tom.getadmininfi());
console.log(tom.getinfo());