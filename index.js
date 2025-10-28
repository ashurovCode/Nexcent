const burger = document.querySelector('.burger')
const close = document.querySelector('.close')
const menu = document.querySelector('nav')
const navLinks = document.querySelectorAll('nav li')
const activeLink = document.querySelectorAll('nav ul li a')

// Function to check if we're on mobile view
const isMobileView = () => window.innerWidth <= 768

// Handle mobile menu toggling
burger.addEventListener('click', () => {
  menu.classList.add('active')
  burger.style.display = 'none'
  close.style.display = 'block'
})

close.addEventListener('click', () => {
  menu.classList.remove('active')
  close.style.display = 'none'
  burger.style.display = 'block'
})

// Only handle nav link clicks for mobile view
navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    if (isMobileView()) {
      menu.classList.remove('active')
      close.style.display = 'none'
      burger.style.display = 'block'
    }
  })
})

// Reset menu state when switching from mobile to desktop
window.addEventListener('resize', () => {
  if (!isMobileView()) {
    menu.classList.remove('active')
    close.style.display = 'none'
    burger.style.display = 'none'
  } else {
    burger.style.display = 'block'
  }
})

activeLink.forEach((link) => {
  link.addEventListener('click', function () {
    activeLink.forEach((l) => l.classList.remove('active'))

    this.classList.add('active')
  })
})

const faders = document.querySelectorAll('.fade-in')

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible')
      observer.unobserve(entry.target)
    }
  })
})

faders.forEach((fader) => observer.observe(fader))
