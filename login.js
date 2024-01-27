// import jsSHA from "jssha";
// const jsSHA = require("jssha");

const username = document.getElementById("username");
const password = document.getElementById("password");
const loginbtn = document.getElementById("loginbutton");

const hash = (pass) => {
  const hashObj = new jsSHA("SHA-512", "TEXT", { numRounds: 1 });
  hashObj.update(pass);
  const hash = hashObj.getHash("HEX");

  return hash;
};

const invalidusername = document.getElementById("labelalertusername");
const invalidpassword = document.getElementById("labelalertpassword");

const loader = document.querySelector(".loader-container");
const login_section = document.querySelector(".login");

loader.style = "display:none";

const checkLogin = () => {
  fetch("data.json")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      for (var i = 0; i < data.length; i++) {
        if (
          data[i].username === username.value &&
          data[i].password === hash(password.value)
        ) {
          localStorage.setItem("user", data[i].username);
          window.location.href = "index.html";
        }
        // else if(data[i].username !== username.value || data[i].password !== username.password)
        // {
        //   invalidusername.style = "color:red;font-size:18px;font-weight:bold;"
        //   invalidusername.textContent = "Invalid Username"
        //   invalidpassword.style = "color:red;font-size:18px;font-weight:bold;"
        //   invalidpassword.textContent = "Invalid Password"
        //   username.style = "border:2px solid red"
        //   password.style = "border:2px solid red"
        // }
        else if (data[i].username !== username.value) {
          invalidusername.style = "color:red;font-size:18px;font-weight:bold;";
          invalidusername.textContent = "Invalid Username";
          username.style = "border:2px solid red";
          loader.style = "display:none";
          login_section.style = "display:flex";
        } else if (data[i].password !== password.value) {
          invalidpassword.style = "color:red;font-size:18px;font-weight:bold;";
          invalidpassword.textContent = "Invalid Username";
          password.style = "border:2px solid red";
          loader.style = "display:none";
          login_section.style = "display:flex";
        }
      }
    });
};

loginbtn.addEventListener("click", () => {
  loader.style = "display:flex";
  login_section.style = "display:none";
  checkLogin();
});

password.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    loader.style = "display:flex";
    login_section.style = "display:none";
    checkLogin();
  }
});
