function menu(name,role){
switch(role){
    case "admin":
        return `${name} has high access`;
        break;
    case "subadmin":
        return `${name} has middle access`;
        break;
    case "user":
        return `${name} has low access`;
        break;
        default:
            return "no access to${name}";

}
}
console.log(menu("sunny","admin"));
var getrole=menu("sammy","user")
console.log(getrole);

