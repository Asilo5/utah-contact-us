const sendUserInfo = (userObj) => {
  fetch('https://my-json-server.typicode.com/JustUtahCoders/interview-users-api/users', {
    // type POST
    // Content
    // send user obj 
  })
  .then(res => res.json())
  .catch(err => console.log(err))
};