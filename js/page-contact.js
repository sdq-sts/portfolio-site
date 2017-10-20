import '../scss/contact-page.scss'

window.addEventListener('load', (e) => {
  const loadingCover = document.querySelector('.loading-cover')
  const verticalRedBar = document.querySelector('.vertical-red-bar')

  loadingCover.classList.add('loading-cover--hide')
  verticalRedBar.classList.add('vertical-red-bar--show')
  document.body.style.overflow = 'auto'
})
