/* 
Darren Ma
April 23rd, 2026
Javascript file for Ghibli website
*/

//DOM Queries
const toggleThemeButton = document.querySelector("#toggleThemeButton");

const dayBox = document.querySelector("#dayBox");
const today = new Date().getDay();

// Days of the Week Array
// Array containing all the days in the week 
let ghibliDayMessages = ["Sunday: Relax with My Neighbor Totoro 🌿",
						 "Monday: Stay strong like Princess Mononoke 🐺", 
						 "Tuesday: Adventure awaits in Castle in the Sky ☁️", 
						 "Wednesday: Keep going with Kiki’s Delivery Service 🧹", 
						 "Thursday: Dream big with Howl’s Moving Castle 🔥", 
						 "Friday: Get lost in Spirited Away ✨", 
						 "Saturday: Reflect while The Wind Rises ✈️"];

// Date Change + Message
// Check if dayBox exists in this instance
// If True -> change the dayBox's content to the corresponding message based on the day of the week
function DateChange(){
	if(dayBox){
		dayBox.textContent = ghibliDayMessages[today];
	}
}

// Load Saved Theme on Every Page
const savedTheme = localStorage.getItem("theme");

// If savedTheme is dark mode
// If true -> change the theme + check if button exists on page
// If exists -> change text of button accordingly
if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
	if (toggleThemeButton) {
        toggleThemeButton.textContent = "Switch to Light Mode ☀️";
    }
}
// If savedTheme is light mode
// If true -> check if button exists on page
// If exists -> change text of button accordingly
else {
    if (toggleThemeButton) {
        toggleThemeButton.textContent = "Switch to Dark Mode 🌙";
    }
}

// Light Mode & Dark Mode Function
// When function is called, adds or removes "dark-mode" from <body>
// If <body class = "dark-mode">, CSS will adjust the colours accordingly
function toggleTheme() {
	document.body.classList.toggle("dark-mode");

	const isDark = document.body.classList.contains("dark-mode");

	//Save preferred choice on Local Storage
    localStorage.setItem("theme", isDark ? "dark" : "light");

	//Change Button Text to Match Current Theme
	if(isDark)
		toggleThemeButton.textContent = "Switch to Light Mode ☀️";
	else
		toggleThemeButton.textContent = "Switch to Dark Mode 🌙";
}

// Check if the button exists in the webpage
// If True -> on click, call function toggleTHeme
if (toggleThemeButton) {
    toggleThemeButton.addEventListener("click", toggleTheme);
}


// Togle Feature for dayBox
if (dayBox) {
    // Mouse enters the box
    dayBox.addEventListener("mouseover", function () {
        dayBox.style.transform = "scale(1.05)";
        dayBox.style.transition = "0.3s ease";
        dayBox.style.cursor = "pointer";
    });

    // Mouse leaves the box
    dayBox.addEventListener("mouseout", function () {
        dayBox.style.transform = "scale(1)";
    });
}

//Function Calls
DateChange();

console.log("JS is connected!");