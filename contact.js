
const login = document.getElementById("login")

const user = localStorage.getItem("user");
const cartbtn =document.getElementById("cart") 



const loginclass = document.querySelectorAll(".login");

console.log(loginclass)


if(user){
  for(let i=0;i<loginclass.length;i++){
  loginclass[i].textContent = "Logout"
  loginclass[i].addEventListener("click",function()
  {
    localStorage.removeItem("user");
    loginclass[i].href = "index.html"
  })
}
}
else{


  loginclass[0].href = "login.html"
  loginclass[1].href = "login.html"
}


