const username = document.getElementById("username");
const password = document.getElementById("password");
const loginbtn = document.getElementById("loginbutton");

// Dohvat JSON stringa iz localStorage i pretvaranje u objekt

var storedData = localStorage.getItem("data");

var ucitaniKorisnik = JSON.parse(storedData);

console.log("ucitani korisnik", ucitaniKorisnik);
console.log(username.value + " " + password.value);

const data = {
  username: "",
  password: "",
};

console.log(data);
loginbtn.addEventListener("click", () => {
  console.log("input values => ", username.value + " " + password.value);
  console.log(
    "ucitani korisnik =>",
    ucitaniKorisnik.demail + " " + ucitaniKorisnik.dpassword
  );

  data.username = username.value;
  data.password = password.value;

  console.log("DATA", data.username + " DATAPASSWORD " + data.password);

  if (data.username === ucitaniKorisnik.dname) {
    alert("radi");
  }
  if (
    ucitaniKorisnik.email == data.username &&
    ucitaniKorisnik.password == data.password
  ) {
    window.location.href = "index.html";
  }
});
