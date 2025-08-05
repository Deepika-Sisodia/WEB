

let PI = 3.145;
let magicNum = 68;

console.log('live classes ka bhaukaal');

function sqr(num){
    return num*num;
}


let obj = {
    first : 'samarath',
    last : 'vohra',
    age : 27,
    getName : function(){
        console.log(this.first + ' ' + this.last);
    }

}

console.log(PI);
console.log(sqr(4));
console.log(obj.first);
console.log(obj.getName());



































