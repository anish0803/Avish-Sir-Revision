// let arr = [[1,2,3],[4,5,6],[7,8,9]]

// let n = arr.length

// for(let i=0; i<n; i++){

//     let newArray = arr[i]
//     console.log("newArray" , newArray)
//     for(let j=0; j<newArray.length; j++){
//         console.log(newArray[j]);
//     }

// }
// i=0 true newArray= arr[0] => j=0 true prints 1 => j=1 true print 2 => j=2 true print 3 =>j=3 false 
// i=1  true newArray = arr[1]


// let arr= [1,3,4,5,6,7,8]

// Array.map((a)=>{   //here a = arr[index]
//     console.log(a)
// })

// let filteredArray = arr.filter((a)=>{
//     return a<6
// })
// =>  a = arr[0] = 1 return true => [1]
// => a = arr[1] = 3 return true => [1,3]
// => a = arr[2] = 4 return true =>  [1,3,4]
// => a = arr[3] = 5 return true => [1,3,4,5]
//  => a = arr[4] = 6 return false => [1,3,4,5]
//  => a = arr[5] = 7 retun false => [1,3,4,5]
// => a = arr[6] = 8 return false => [1,3,4,5]
// console.log('fileredArray' , filteredArray)

// let obj = {
//     name:"Avish",
//     age:[20,21,22],
//     profesion:"Software Engineer"
// }
// for(let key in obj){
//     console.log(key, obj[key])
// }


// let arrayOfObjects = [{name:'Avish',age:21} , {name:"Rahul" , age:17} , {name:"Karan" , age:20}]
// let filteredArrayOfObjects = arrayOfObjects.filter((a)=>{
//     return a["age"] >18
// })
// console.log(filteredArrayOfObjects)

function a(a,b){
    console.log(a,b)
}
// Re use the code using function


a("Global" , "Home")
// a()

let btn = document.getElementById('submitbtn')
btn.addEventListener('click',(event)=>{

    add(event)

})

let filterbtn = document.getElementById('filter')
filterbtn.addEventListener('change' , filterData)
let sortbtn = document.getElementById('sort')
sortbtn.addEventListener('click' , sortme)
const data = [];

const container = document.getElementById('container');
function add(event){
    event.preventDefault()
    let link = document.getElementById('link').value
    let name = document.getElementById('name').value
    let category = document.getElementById('select').value
    let rating = document.getElementById('ratings').value
    let object =  {
        imgLink:link,
        head1:name,
        head2:category,
        rating:rating
    }
    data.push(object)
    showData(data)

}

function filterData(){
    let val = filterbtn.value
   let filteredData = data.filter((d)=>{
    return d.head2 === val
   })
  showData(filteredData)
}
function sortme(){
    let sortedData = data.sort((a,b)=>{
        return a.rating - b.rating
    })
    console.log(sortedData)
    showData(sortedData)
}
function showData(array){
    console.log(array)
    container.innerHTML = null
    array.map((d)=>{
        console.log("d",d)
 let div = document.createElement('div');
    let h1 = document.createElement('h1');
    let h2 = document.createElement('h2');
    let img = document.createElement('img');
    let heading = document.createElement('h1')
    heading.textContent = d.rating
    h1.textContent = d.head1
    h2.textContent = d.head2
    img.setAttribute('src', d.imgLink)
    div.append(h1,heading , img,h2)
    container.append(div);
    })
}


   