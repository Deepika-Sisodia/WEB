let obj1 = {
    evs: 90,
    cn: 90,
    web: 100,
    maths: 10,
    total: function(){  // method
        return (90+90+100+10);
    },
    bulao: function(){
        return ("sam ko bulao");
    }

}

console.log(obj1.total());

let obj2 = {
    name: "sam",
    evs: 90,
    cn: 90,
    web: 100,
    maths: 10,
    total: function(){  // method
        return (this.evs + this.cn + this.web + this.maths);
    },
    bulao: function(){
        return (`${this.name} ko bulao`);
    }

}

console.log(obj2.total());
console.log(obj2.bulao());
