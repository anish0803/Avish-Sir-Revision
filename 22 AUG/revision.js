// let arrayOfObjects = [{name:'anish', age:27},{name:'puran', age:28},{name:'goldi', age:22},{name:'ramesh', age:37},{name:'suresh', age:17},{name:'umesh', age:07}]
// let filteredArrayOfObject = arrayOfObjects.filter((a)=>{
//     return a.age > 18
// })
// console.log(filteredArrayOfObject);



// -----sorting by age----------
let arrayOfObjects = [
    { name: 'rahul', age: 21 },
    { name: 'shyam', age: 37 },
    { name: 'kumar', age: 45 },
    { name: 'ranjan', age: 12 },
    { name: 'umesh', age: 13 },
    { name: 'suresh', age: 37 }
  ];

 let filteredArrayOfObject =  arrayOfObjects.sort((a, b) => a.age - b.age);
  console.log(filteredArrayOfObject);


  const array = [{name:"Avish",height:5.7},{name:"Anish",height:5.9}]
let filterarray = array.sort((a,b)=>{
return a.height - b.height 
})
console.log(filterarray)

  

 