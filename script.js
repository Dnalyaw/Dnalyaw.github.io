const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]
const introduction = document.getElementsByClassName('intro')[0]
const introText = document.getElementsByClassName('opening-txt')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
  introduction.classList.toggle('active')
  introText.classList.toggle('active')
})

var i = 0;
var txt = 'Welcome to my website, my name is'; /* The text */
var bigTxt = 'Wayland.'
var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("typedTxt").textContent += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
typeWriter();

setInterval(function () {
  var birthday = new Date("11/17/2005");
  var today = new Date();
  var yearsAlive = Math.round((today - birthday)*1000000000/31556952000)/1000000000;
  document.getElementById("age").textContent = yearsAlive;
}, 100);
