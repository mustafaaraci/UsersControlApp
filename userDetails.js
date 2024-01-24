const apiUrlUsersDetails = 'https://reqres.in/api/users/2';

// Fetch API kullanarak GET isteği gönderdim
fetchGetUserDetails(apiUrlUsersDetails)
  .then(response => {
    // Başarılı bir şekilde veri alındığında
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    userDetails = data.data; 

    let output = "<div class='row' style='width: 100%;margin-top:70px;'>";
    userDetails.forEach((userDetails) => {
      output +=
        `
                   <div class="col-md-4 mb-3">
                   <div class="card">
                       <img src="${userDetails.avatar}" class="card-img-top" alt="${userDetails.first_name} ${user.last_name}">
                      <div class="card-body">
                        <h5 class="card-title">${userDetails.first_name} ${userDetails.last_name}</h5>
                        <p class = "text">${userDetails.email}</p>
                       
                       
                     </div>
                    </div>
                    </div>
    `;
    });

   
    document.getElementById("userDetails").innerHTML = output + "</div>";

    
  })
  .catch(error => {console.error('Fetch error:', error); });
 
  fetchGetUserDetails();







      
        