var o = { 
    v1: "v1", 
    v2: "v2",
    f1: () => {
        console.log(this.v1);
    },
    f2: () => {
        console.log(this.v2);
    }
};


o.f1();
o.f2();