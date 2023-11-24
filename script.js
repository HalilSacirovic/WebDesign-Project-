



// var array = [];
// var array2 =[];


// const getUsers =()=>{
//     fetch('https://dummyjson.com/users')
//     .then(res => res.json())
//     .then((data)=>{
//         array =data.users;
//         array2= data.users
//         renderUsers()
//     });
// }


// const renderUsers = () =>{
//     const ul= document.getElementById("ul");
//     ul.innerHTML ="";
//     array.forEach((item,index)=>{
//         const li = document.createElement("li");
//         const p = document.createElement("p");
        
//         p.textContent = item.firstName + " " + item.lastName + ` is ${item.age} years old`;
        
//         li.appendChild(p);
//         ul.appendChild(li);
        
//     })
// }

// getUsers()
// document.getElementById("search").addEventListener("keydown",()=>{
//     const search_value =   document.getElementById("search").value;
//     array = array2.filter((item,index)=>{
//         if(item.firstName)
//         {
//             return item.firstName.toLowerCase().includes(search_value.toLowerCase())
//         }
     
//     })
//     renderUsers()
// })

// DRUGI NACIN 

var array = [];

const getUsers = () => {
    fetch('https://dummyjson.com/users')
        .then(res => res.json())
        .then((data) => {
            array = data.users;
            renderUsers();
        });
}

const renderUsers = () => {
    const ul = document.getElementById("ul");
    ul.innerHTML = "";
    array.forEach((item, index) => {
        const li = document.createElement("li");
        const p = document.createElement("p");

        p.textContent = item.firstName + " " + item.lastName + ` is ${item.age} years old`;

        li.appendChild(p);
        ul.appendChild(li);

    })
}

getUsers();

document.getElementById("search").addEventListener("input", () => {
    const search_value = document.getElementById("search").value.toLowerCase();
    const filteredArray = array.filter((item) => {
        return item.firstName && item.firstName.toLowerCase().includes(search_value);
    });
    renderFilteredUsers(filteredArray);
});

const renderFilteredUsers = (filteredArray) => {
    const ul = document.getElementById("ul");
    ul.innerHTML = "";
    filteredArray.forEach((item, index) => {
        const li = document.createElement("li");
        const p = document.createElement("p");

        p.textContent = item.firstName + " " + item.lastName + ` is ${item.age} years old`;

        li.appendChild(p);
        ul.appendChild(li);
    });
}
