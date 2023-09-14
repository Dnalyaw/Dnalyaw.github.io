const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]
const introduction = document.getElementsByClassName('intro')[0]
const introText = document.getElementsByClassName('opening-txt')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
  introduction.classList.toggle('active')
  introText.classList.toggle('active')
})