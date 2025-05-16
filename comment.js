// Offcanvas code starts here

// shadow box ko uske id se access kar rahe hain
let shadow = document.getElementById("shadow");

// offcanvas box ko uske id se access kar rahe hain
let offcanvas = document.getElementById("offcanvas");

// toggle button ko uske id se access kar rahe hain jo sticky navbar mein hai
let button = document.getElementById("toggle-button");

// reject button ko uske id se access kar rahe hain jo offcanvas mein hai
let reject = document.getElementById("reject");

// yahan toggle button par event listener lagaya hai
button.addEventListener("click", () => {
  // jab toggle button par click hoga, shadow box show hoga
  shadow.style.display = "block";
  // offcanvas apni jagah par wapas aa jayega
  offcanvas.classList.add("translate");
});

// yahan reject button par event listener lagaya hai
reject.addEventListener("click", () => {
  // jab reject button par click hoga, shadow box hide ho jayega
  shadow.style.display = "none";
  // offcanvas apni jagah se wapas chala jayega
  offcanvas.classList.remove("translate");
});

// Offcanvas code ends here

// Dark Mode code starts here

// body, header aur website ke logo ko unki ids se access kar rahe hain
let body = document.querySelector("#body");
let header = document.querySelector("#header");
let img = document.querySelector("#web-logo"); // yeh website ka logo hai

// gray text aur firstDiv ko access kar rahe hain
let txtGray = document.getElementsByClassName("txt-gray");
let firstDiv = document.getElementById("first"); // add to cart icon se pehle wala div

// sun aur moon icons ko access kar rahe hain jo firstDiv ke andar hain
let sun = document.querySelector("#sun");
let moon = document.querySelector("#moon");

// dark gray aur white text wale elements ko access kar rahe hain
let darkGray = document.getElementsByClassName("dark-gray");
let txt_white = document.getElementsByClassName("txt-white");

// featured images ko access kar rahe hain
let featued_images = document.getElementsByClassName("featured-image");

// yeh array light mode ke images ka source rakhti hai
let img_src1 = ["memory/flogo.svg","memory/flogo2.svg","memory/flogo3.svg",];

// yeh array dark mode ke images ka source rakhti hai
let img_src2 = ["memory/flogo copy.svg","memory/flogo2 copy.svg","memory/flogo3 copy.svg",];

// function dark mode apply karta hai
function darkModeApply() {
  // body aur header mein dark mode ka class add karte hain
  body.classList.add("dark-mode");
  header.classList.add("dark-mode");
  
  // website ka logo dark mode ka set karte hain
  img.src = "memory/logo2.png";

  // gray text ka color change karte hain
  for (let val of txtGray) {
    val.style.color = "#d3d3d3"; // light gray color
  }

  // sun icon ko hide karte hain aur moon icon ko show karte hain
  sun.style.display = "none";
  firstDiv.style.backgroundColor = "rgba(255,255,255,0.4)"; // light background
  moon.style.display = "block";
  
  // offcanvas mein dark mode add karte hain
  offcanvas.classList.add("dark-mode");

  // dark gray elements ko dark mode mein update karte hain
  for (let val of darkGray) {
    val.classList.add("darkGray");
  }

  // white text ko dark mode mein white set karte hain
  for (let val of txt_white) {
    val.style.color = "#f1f1f1";
  }

  // featured images ko dark mode ke images ke saath replace karte hain
  for (let i = 0; i < featued_images.length; i++) {
    featued_images[i].src = img_src2[i];
  }

  // dark mode ko localStorage mein save karte hain
  localStorage.setItem("darkMode", "enabled");
}

// function dark mode ko remove karta hai
function darkModeRemove() {
  // body aur header se dark mode ka class remove karte hain
  body.classList.remove("dark-mode");
  header.classList.remove("dark-mode");
  
  // website ke logo ko light mode ka wapas set karte hain
  img.src = "memory/logo.svg";

  // gray text ka color wapas dark karte hain
  for (let val of txtGray) {
    val.style.color = "#333333"; // dark gray color
  }

  // firstDiv ka background wapas transparent karte hain
  firstDiv.style.backgroundColor = "transparent";
  
  // sun icon ko show karte hain aur moon icon ko hide karte hain
  sun.style.display = "block";
  moon.style.display = "none";

  // offcanvas se dark mode remove karte hain
  offcanvas.classList.remove("dark-mode");

  // dark gray elements ko light mode mein wapas change karte hain
  for (let val of darkGray) {
    val.classList.remove("darkGray");
  }

  // white text ka original color wapas set karte hain
  for (let val of txt_white) {
    val.style.color = "";
  }

  // featured images ko light mode ke images ke saath replace karte hain
  for (let i = 0; i < featued_images.length; i++) {
    featued_images[i].src = img_src1[i];
  }

  // dark mode ko localStorage se disable karte hain
  localStorage.setItem("darkMode", "disabled");
}

// yahan check karte hain ki dark mode enable hai ya nahi jab page reload hota hai
if (localStorage.getItem("darkMode") === "enabled") {
  darkModeApply(); // agar enabled hai to dark mode apply karte hain
}

// sun icon pe click karne par dark mode apply hoga
sun.addEventListener("click", darkModeApply);

// moon icon pe click karne par dark mode remove hoga
moon.addEventListener("click", darkModeRemove);

// Dark Mode code ends here
