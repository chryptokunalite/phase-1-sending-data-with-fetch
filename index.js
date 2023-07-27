// Add your code here
// const configurationObject = {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//         "Accept": "application/json",
//       },
//       body: JSON.stringify({
//         dogName: "Byron",
//         dogBreed: "Poodle",
//       }),
// };
// fetch("http://localhost:3000/dogs", configurationObject)
// .then(function (response) {
//     return response.json();
//   })
//   .then(function (object) {
//     console.log(object);
//   })
//   .catch(function (error) {
//     alert("Bad things! Ragnarők!");
//     console.log(error.message);
//   });


  function submitData(userName, userEmail){
    return fetch("http://localhost:3000/users",{
      method: 'POST',
      headers: { 
        "content-type": "application/json",
        "Accept": "application/json",
      },
      body:JSON.stringify({
        name : userName,
        email : userEmail,
      })
    })
    .then(function(response){
      return response.json()
    })
    .then(function(object){
      const newId = object.id
      const idElement = document.createElement('p')
      idElement.textContent = newId
      document.body.append(idElement)
    })
    .catch(function (error) {
      const errorMessage = "Unauthorized Access"
      const errorElement = document.createElement('p')
      errorElement.textContent = errorMessage
      document.body.append(errorMessage)

    })
  }
  
      


 