// const person ={
//     name: 'makal',
//     213: 'skdhjf',
//     age: 12,
//     sd: 'askdj',
//     friends: ['sdf','dfsw','sdf '],
//     details: {
//         job: 'yes',
//         isMarried: true,
//         father: {
//             name: 'kodu'
//         }
//     }
// }
// console.log(person[213])



// const numbers = [1,2,3,4,5,6,7];

// const squareArray = numbers.map(element =>{
//     return  element*element;
// })

// console.log(squareArray)


// const friends = ['rahim', 'karim', 'jodu', 'modu', 'kodu'];

// friends.forEach(element =>{
//     if(element === 'rahim'){
//         console.log(element)
//     }
// })


// const person = {
//     name: 'hena',
//     age: 20,
//     status: true
// }

// const newPerson = JSON.stringify(person);

// console.log(newPerson)

// const newPerson2 = JSON.parse(newPerson);

// console.log(newPerson2)



const handleLoadData = () => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
}