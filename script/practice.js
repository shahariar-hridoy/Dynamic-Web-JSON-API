const fetchData = () =>{
    return new Promise((resolve,reject) => {
        const status = true;
        if(status){
            const mockData ={
                json: ()=> Promise.resolve({name: "hero"})
            }
            resolve(mockData)
        }
        else{
            reject("server Error")
        }
    })
}

fetchData()
.then(res => res.json())
.then(data => console.log(data))
.catch(err => console.log(err))