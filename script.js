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


const seeMore = document.getElementById("seeMore");
var colors = ["red", "orange", "yellow", "green", "blue", "purple"];
var j = 0;

var isParty = false;
function party() {

  if(!isParty) {
    isParty = true;
    seeMore.textContent = "Click to stop the party!";  
    var id = setInterval(showColors, 1000); 
    
  } else {
    if(isParty) {
      isParty = false;
      seeMore.textContent = "Click to start the party!";
      document.querySelectorAll("h1")[0].style.color = "black";
      
    }
  }
}

function showColors() {
  if (isParty) {
    document.querySelectorAll("h1")[0].style.color = colors[j];
  j++;
  if (j > 5) {
    j = 0;
  }
  }
  
}


