function fetchUserData() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ userId: 1, username: 'JohnDoe' });
      }, 1000);
    });
  }
  
  function fetchUserPosts(userId) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(['Post 1', 'Post 2']);
      }, 1000);
    });
  }
  
//   chaining
  fetchUserData()
    .then((userData) => {
      console.log('User data:', userData);
      return fetchUserPosts(userData.userId);
    })
    .then((userPosts) => {
      console.log('User posts:', userPosts);
    })
    .catch((error) => {
      console.error('Error:', error);
    });



// Ex - 2
const promise4 = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username:'Vinay', password:'123'})
        }else{
            reject('ERROR: Something went wrong')
        }
    }, 0)    // by keeping this zero sec time this execute first even it written after above code
})
// promise4.then((user) => {
//     console.log(user);
//     return user.username
// }).then((username) => {  //if resolve
//     console.log(username);
// }).catch((error) => {  //if reject
//     console.log(error);
// }).finally(() => console.log('The promise is either resolved or rejected')) 

// OR with async 

async function ex(){
    try{
        const response = await promise4
        console.log(response);
        console.log(response.username);
    }
    catch(error){
        console.log(error);
    }
    finally{
        console.log('The promise is either resolved or rejected')
    }
}
ex()