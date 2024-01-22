const username = document.getElementById("username");
const password = document.getElementById("password");
const loginbtn = document.getElementById("loginbutton");

// Dohvat JSON stringa iz localStorage i pretvaranje u objekt

// var storedData = localStorage.getItem("data");

// var ucitaniKorisnik = JSON.parse(storedData);

// console.log("ucitani korisnik", ucitaniKorisnik);
// console.log(username.value + " " + password.value);

loginbtn.addEventListener("click", () => {
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

  // const baseUrl = "http://softinz20233-001-site1.gtempurl.com/api/users";

  // const shaObj = new jsSHA("SHA-256", "TEXT");

  // // Hash the password
  // shaObj.update(password.value);
  // const hashedPassword = shaObj.getHash("HEX");

  // console.log(hashedPassword)



  fetch("data.json")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);

      for (
        var i = 0;
        i < data.length;
        i++ // console.log(data[i].username,data[i].password)
      ) {
        if (
          data[i].username === username.value &&
          data[i].password === password.value
        ) {
          localStorage.setItem("user", data[i].username);
          // window.location.href = "index.html";
          // console.log(data)
        }
      }
    });

  console.log("pris");
});
