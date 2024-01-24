// burada apiUrl adında değişkenimizi  tanımladım
const apiUrlUsers = 'https://reqres.in/api/users';


//burada boş bir dizi tanımladım 
var users = [];

//fonksiyonumuzu tanımladım ve 
function fetchGetUsers() {
  fetch(apiUrlUsers)
    .then((res) => res.json())
    .then((data) => {
        //apı den gelen veriyi burada users değişkenine tanımladım
      users = data.data; 
      //burada bir satır oluşturdum ve output adında  bir değişkene tanımladım
      let output = "<div class='row' style='width: 100%;margin-top:70px;'>";
      //foreach metodunu kullanarak users ın detay bilgilerini bir card tasarımına aktardım
      users.forEach((user) => {
        output +=
          `
                     <div class="col-md-4 mb-3">
                     <div class="card d-flex">
                         <img src="${user.avatar}" class="card-img-top" alt="${user.first_name} ${user.last_name}">
                        <div class="card-body">
                          <h5 class="card-title">${user.first_name} ${user.last_name}</h5>
                          <a class="btn btn-success detailsButton" user_id="${user.id}">User Details</a>
                       </div>
                      </div>
                      </div>
      `;
      });
     //burada userList id si olan containerımızın içersine yerleştirdim
      document.getElementById("userList").innerHTML = output + "</div>";
    })
    //burada işlem sırasında bir hata ile karşılaşırsak göstermesini sağladım
    .catch((error) => console.error('Error fetching users:', error));
}
//burada fonksiyonumuzu çagırıyoruz.
fetchGetUsers();

// burada tıklama eventi gerçekleştiriyoruz ve kullanıcının id sini yakalıyoruz.
document.getElementById("userList").addEventListener("click", function(event) {

    //eğer tıklanan öğe detailsButton adında sınıfa sahipse işlemleri gerçekleştir
    if (event.target.classList.contains("detailsButton")) {
//tıklanan buttondaki user id yi al ve detay sayfasına yönlendir
      const userId = event.target.getAttribute("user_id");
      redirectToDetailsPage(userId);
    }
  });
  
 function redirectToDetailsPage(userId) {
 
     const detailsPageUrl = "userDetails.html?id=" + userId;
      window.location.href = detailsPageUrl;
  }
    
  






