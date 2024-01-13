const username = document.getElementById("username");
const password = document.getElementById("password");
const loginbtn = document.getElementById("loginbutton");

// Dohvat JSON stringa iz localStorage i pretvaranje u objekt

// var storedData = localStorage.getItem("data");

// var ucitaniKorisnik = JSON.parse(storedData);

// console.log("ucitani korisnik", ucitaniKorisnik);
// console.log(username.value + " " + password.value);


// const data = {
//   email: ucitaniKorisnik.demail,
//   password: ucitaniKorisnik.dpassword,
// };

// console.log(data);
loginbtn.addEventListener("click", () => {
  // console.log("input values => ", username.value + " " + password.value);
  // console.log(
  //   "ucitani korisnik =>",
  //   ucitaniKorisnik.demail + " " + ucitaniKorisnik.dpassword
  // );

//   console.log(username.value.length, "  username duzina ");
// console.log("password duzina " , password.value.length);

// console.log("ucitani korisnik email", ucitaniKorisnik.demail.length);
// console.log("ucitani korisnik password ", ucitaniKorisnik.dpassword.length);



  // console.log("DATA", data.username + " DATAPASSWORD " + data.password);

  // if (data.email === email.value) {
  //   alert("radi");
  // }
  // if (
  //   email.value== data.email &&
  //   password.value == data.password
  // ) {
  //   window.location.href = "index.html";
  // }



  const baseUrl = "http://softinz20233-001-site1.gtempurl.com/api/users";
  
  
  fetch(baseUrl)
  .then((res)=>{
    return res.json()
  })
  .then((data)=>{
    console.log(data);
    console.log(data.username,data.password)
    for(var i=0;i<data.length;i++)
    {
      if(data[i].username === username.value && data[i].password === password.value)
      {
        window.location.href = "index.html"
        // console.log(data)
      }
     
}
  })

  console.log("pris")
});







