let arrayOfObjects = [{name:'anish', age:27},{name:'puran', age:28},{name:'goldi', age:22},{name:'ramesh', age:37},{name:'suresh', age:17},{name:'umesh', age:07}]
let filteredArrayOfObject = arrayOfObjects.filter((a)=>{
    return a.age > 18
})
console.log(filteredArrayOfObject);