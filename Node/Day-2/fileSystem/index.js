
// const { error } = require('console');
// let fs = require('fs');

// console.log(fs);

// we will perform CRUD (create, read, update, delete)

// CREATE or write

//  let data = 'neha mam data send kr rhi hain'
// // let data2 = 'changed data hoon mai'

// fs.writeFile('abc.txt',data,{
//     encoding: 'utf-8',
//     flag:'w'
// },(err)=>{
//     if(err){
//         throw error
//     }
//     console.log('file written successfully');
// })

// // or

// // fs.writeFileSync('abc.txt',data2);

//--------------------------------

// READ

// fs.readFile('abc.txt',{
//     encoding: 'utf-8',
//     flag:'r'
// }, (err,data)=>{
//     if(err){throw err}
//     console.log(data);
// });

// or

// let data = fs.readFileSync('abc.txt')
// console.log(data.toString());

//------------

// UPDATE

// fs.appendFile('abc.txt','samarth ka bhaukaal',(err)=>{
//     if(err){throw err}
//     console.log("update kr diya!!!")
// })


//or

// fs.appendFileSync('abc.txt',' aag lage basti mei mai hoon masti mein...')


// DELETE

// fs.unlink('abc.txt', (err)=>{
//     if(err){throw err}
//     console.log("mai badmosh hoon sab hata diya...")
// })

// or

// fs.unlinkSync('abc.txt');

