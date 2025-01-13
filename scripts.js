console.log("Script is loaded!"); 

document.addEventListener("DOMContentLoaded", () => {
    // Mobile navigation toggle
    const menuToggle = document.querySelector('#menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    menuToggle.addEventListener('click', ()=> {
        navLinks.classList.toggle('active');
});
});

// Greet the user with an alert
    const button = document.querySelector("#helloButton");
    button.addEventListener("click", () => {
        alert("Hi, welcome to my website. Keep scrolling to learn more about me!");
    });

// Day of the week logging
const weekDay = new Date().toLocaleString('en-US', { weekday: 'long' });
let isWeekend = ["Saturday", "Sunday"].includes(weekDay);

switch (weekDay) {
    case "Monday":
        console.log("Lunedì");
    case "Tuesday":
        console.log("Martedì");
    case "Wednesday":
        console.log("Mercoledì");
    case "Thursday":
        console.log("Giovedì");
    case "Friday":
        console.log("Venerdì");
    case "Saturday":
        console.log("Sabato");
        break;
    case "Sunday":
        console.log("Domenica!");
        break;
    default:
        isWeekend = false
}

//Link click logging
const links = document.querySelectorAll("a[href]");
links.forEach(link => {
    link.addEventListener("click", (event) => {
        console.log('Link clicked: ${link.href} - ${link.textContent}');
    });
})