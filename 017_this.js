console.log(this);

var user = {
    fname: "sunny",
    courseCount:4,
    getCoursecount:function(){
        console.log("line 7",this);
    },
};
user.getCoursecount();