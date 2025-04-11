const sunny = {
  fname: "sunny",
  lname: "kavar",
  getinfo: function () {
    console.log(`
            
            fname is ${this.fname}
            lname is ${this.lname}
        `);
  },
};
const dj={
    fname:"sunny",
    lname:"dj"
};

// sunny.getinfo();
// dj.getinfo();

var djinfo=sunny.getinfo.bind(dj);
djinfo();

sunny.getinfo.call(dj);