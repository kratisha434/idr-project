/* Smooth scroll for navbar links */

const toggle = document.getElementById("menu-toggle")
const nav = document.getElementById("nav-links")

toggle.addEventListener("click", () => {
nav.classList.toggle("active")
})

document.querySelectorAll("nav a").forEach(link => {

link.addEventListener("click", function(e){

e.preventDefault()

document
.querySelector(this.getAttribute("href"))
.scrollIntoView({
behavior:"smooth"
})

nav.classList.remove("active")

})

})