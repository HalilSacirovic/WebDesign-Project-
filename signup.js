const create_account = document.getElementById("create-acc");

const namee = document.getElementById("name");
const lastname = document.getElementById("lastname");
const email = document.getElementById("email");
const password = document.getElementById("password");
const error_message = document.getElementById("error-message");

const inputs = document.querySelectorAll(".is_valid");


create_account.addEventListener("click", function () {
  const data = {
    demail: email.value,
    dpassword: password.value,
  };

  

  // console.log("email value =>", email.value);
  // console.log("password value =>", password.value);

  inputs.forEach((input) => {
    input.addEventListener("focus", function () {
      console.log("Input je aktivan");
      // Dodajte željeni kod koji želite izvršiti kada je input aktivan
    });
  });

  if (
    !email.value.includes("@") &&
    (password.value.length > 20 || password.value.length < 5)
  ) {
    email.style = "border:2px solid red";
    password.style = "border:2px solid red";
    console.log("Treci uslov");
    error_message.classList.remove("hidden");
    error_message.textContent =
      "Nepravilan unos email-a i sifre.Probajte ponovo";
  } else if (password.value.length > 20 || password.value.length < 5) {
    password.style = "border:2px solid red";

    console.log("DRUGI uslov");
    error_message.classList.remove("hidden");
    error_message.textContent = "Nepravilan unos  sifre.Probajte ponovo";
  } else if (!email.value.includes("@")) {
    email.style = "border:2px solid red";
    console.log("Prvi uslov");
    error_message.classList.remove("hidden");
    error_message.textContent = "Nepravilan unos email-a.Probajte ponovo ";
  } else {
 

    localStorage.setItem(`data`, JSON.stringify(data));

    const fs = require('fs');

    // Your code for localStorage goes here
    
    // Read the contents of the JSON file
    const jdata = fs.readFileSync('data.json', 'utf-8');
    // Parse the JSON data into a JavaScript object
    const jsonData = JSON.parse(jdata);
    
    console.log("Before Adding data", JSON.stringify(jsonData, null, 4));
    
    // Modify the JavaScript object by adding new data
    jsonData.users.push(data);
    
    // Convert the JavaScript object back into a JSON string
    const jsonString = JSON.stringify(jsonData, null, 4);
    
    fs.writeFileSync('data.json', jsonString, 'utf-8', (err) => {
      if (err) throw err;
      console.log('Data added to file');
    });
    
    const update_data = fs.readFileSync('data.json', 'utf-8');
    const updated_jsonData = JSON.parse(update_data);
    console.log("After Adding data", JSON.stringify(updated_jsonData, null, 4));
    
    // console.log("jdata",jdata)
    window.location.href = "login.html";
  }

  // OVDE KRAJ
});

const api = () => {
  fetch(
    "https://api.bestbuy.com/v1/products?format=json&apiKey=iJGg8GCzIN4aLfZSVfnqNTAX"
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log("podaci => ", data);
    })
    .catch((error) => {
      console.log(error, "error");
    });
};

api();
