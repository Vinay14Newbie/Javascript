// Graceful Error handling in Fetch
// Fetch error handling with .catch()
// try-catch with async function and fetch



// Employ the fetch API to retrieve data from an invalid URL
// Utilize the .catch() method to capture network or other errors that may occur
// Log a clear error message to the console

const url = 'https://invalid.com'
fetch(url)
.then(response => {
    console.log("fetching successful :)");
})
.catch(errror => {
    console.log("something went wrong :/");
})




// Create an async function that uses fetch to request data from an invalid URL
// Wrap the fetch call in a try-catch block to handle potential errors
// Log a detailed error message in the catch block

async function fetchData(){
    const url = 'https://invlaid.com'

    try {
        const response = await fetch(url)
        console.log("data fetched succefully using async await");
    } catch (error) {
        console.log("fetching failed again using async await too...");
    }
}
fetchData()