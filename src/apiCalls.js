export const sendUserInfo = async (userObj) => {

   let userInfo = {
    "name": userObj.name,
    "email": userObj.email,
    "birthDate": userObj.birthDate,
    "emailConsent": userObj.subscribe
   }

  const resp = await fetch('https://my-json-server.typicode.com/JustUtahCoders/interview-users-api/users', {
    method: 'POST',
    body: JSON.stringify(userInfo),
    headers: {
      'Content-Type' : 'application/json'
    }
  });

  const data = await resp.json();
  
    if (!resp.ok) {
    const error = await resp.json();
    throw new Error(error.message);
    }

  return data;
};