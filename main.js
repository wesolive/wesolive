//evento de click do menu
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}
// ao clicar no elemento do menu fechar o menu
const links = document.querySelectorAll('nav ul li a')
for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

// função aplicando evento de sombra no header conforme o scroll
function changeHeaderWenScroll() {
  const header = document.querySelector('#header')
  const navHeight = header.offsetHeight

  if (window.scrollY >= navHeight) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
}

//ScrollReveal
// mostrar documento com animação quando rolar a pagina
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '50px',
  duration: 800,
  reset: true
})

scrollReveal.reveal(
  ` #home img, #home .text, #home .icon-butom,
  #about .text-alt, #about .skils, 
  #works header, #works .sites,
  #contact .text, #contact .links
`,
  { interval: 100 }
)

/* função back to top */
function backToTop() {
  const backToTop = document.querySelector('.back-to-top')
  if (window.scrollY >= 520) {
    backToTop.classList.add('show')
  } else {
    backToTop.classList.remove('show')
  }
}

/*  menu ativo conforme a pagina*/
const sections = document.querySelectorAll('main section[id]')
function activateMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}

/*funçãoc */
window.addEventListener('scroll', function () {
  changeHeaderWenScroll()
  backToTop()
})
