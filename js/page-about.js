import '../scss/about-page.scss'

window.addEventListener('load', (e) => {
  const loadingCover = document.querySelector('.loading-cover')
  const verticalRedBar = document.querySelector('.vertical-red-bar')

  verticalRedBar.classList.add('vertical-red-bar--show')
  loadingCover.classList.add('loading-cover--hide')
  document.body.style.overflow = 'auto'
})
