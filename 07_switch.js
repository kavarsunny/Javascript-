var user="s"
switch(user){
    case "admin":
        console.log("all access allowed");
        break;
        case "subadmin":
        console.log("middle level access");
        break;
        case "user":
        console.log("low level access");
        break;
        default:
            console.log("no access allowed for u");
}