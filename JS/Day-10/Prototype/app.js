// Prototypes

let todo = {
    title: 'buy flowers',
    desc : function(){
        return `your task is to ${this.title}`
    }
};

console.log(todo.title);
console.log(todo.desc());
console.log(todo.sacin); // undefined

console.log(todo.toString()); //[object, Object] --> because of prototype