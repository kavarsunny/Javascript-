var User = function (firstname, courseCount) {
  this.firstname = firstname;
  this.courseCount = courseCount;
  this.getcourseCount = function () {
    console.log(`course count is:${this.courseCount}`);
  };
};
var hitesh = new User("sunny", 2);
console.log(sunny);
var sam = new User("sam", 1);
console.log(sam);
