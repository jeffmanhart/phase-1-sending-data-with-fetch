const formData = {
    dogName: "Byron",
    dogBreed: "Poodle",
  };
  
  const configurationObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify(formData),
  };


  
  fetch("http://localhost:3000/dogs", configurationObject)
  .then(function (response) {
    return response.json();
  })
  .then(function (object) {
    console.log(object);
  });

  function submitData(username, userEmail){
    const userData = {
       name : username,
       email : userEmail,
      };

      const userObject = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify(userData),
      };

    return   fetch("http://localhost:3000/users", userObject)
    .then(function (response) {
      return response.json();
    })
    .then(function (object) {
      //append object to dom
        let div = document.createElement("div");
        let p = document.createElement("p");
        div.append(object.id, p);
        document.querySelector('body').appendChild(div)
    })
    .catch(function (error) {
        //alert("There is an error!");
        let p = document.createElement("p");
        p.textContent = error.message;
        document.querySelector('body').appendChild(p);
      }

    );
  }
  