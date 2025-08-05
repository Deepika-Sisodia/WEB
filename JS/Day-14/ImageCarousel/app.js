let img = document.querySelector('img')

let arr = ['https://plus.unsplash.com/premium_photo-1669809947731-664074ca55de?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8',
    'https://images.unsplash.com/photo-1546702257-39e3ab6f0b92?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D',
    'https://images.unsplash.com/photo-1558794788-ccf026a85305?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D',
    'https://images.unsplash.com/photo-1557193759-61a8969a92da?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8'
]


let num = 0;

let fun = setInterval(function(){
    img.setAttribute('src',arr[num]);
    num = (num+1)% arr.length;
},3000)

