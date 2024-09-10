//Fetching Data from an API

// Use the 'fetch' API to get data from a public API and log the response data to teh console using promises

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log("Error found: "+error);
})
// Error found: TypeError: fetch failed



// Above operation using Async-Await

async function getInfo(){
    try{
        const respone = fetch('https://jsonplaceholder.typicode.com/users')
        const data =  (await respone).json
        console.log(data);
    }
    catch(error){
        console.log("Error found: "+error);
    }
}
getInfo()
// Error found: TypeError: fetch failed