 const apiUrlUserDetails = "https://reqres.in/api/users/";

  
  const urlParams = new URLSearchParams(window.location.search);
  const userId = urlParams.get("id");

  
  fetch(apiUrlUserDetails + userId)
    .then((res) => res.json())
    .then((data) => {
      
      const user = data.data;
     
      document.getElementById("userDetails").innerHTML = `
      <div class='row' style='width: 100%;margin-top:70px;'>
      <div class="col-md-4 mb-3">
      <div class="card d-flex">
          <img src="${user.avatar}" class="card-img-top" alt="${user.first_name} ${user.last_name}">
         <div class="card-body">
           <h5 class="card-title">${user.first_name} ${user.last_name}</h5>
           <p class ="card-item">${user.email}</p>
        </div>
       </div>
       </div>
       </div>
        
    `;
   
    })
    
    .catch((error) => console.error("Error fetching user details:", error));