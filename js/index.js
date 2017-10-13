import '../scss/main.scss'

window.addEventListener('load', (e) => {
  const siteHeader = document.querySelector('.site__header')
  const videoContainer = document.querySelector('.video-container')
  const verticalRedBar = document.querySelector('.vertical-red-bar')

  setStyles()
  setAnimations()

  window.addEventListener('resize', (e) => { setStyles() })

  function setStyles () {
    document.documentElement.style.setProperty('--red-bar-width', siteHeader.clientHeight + 'px')
    videoContainer.style.height = siteHeader.clientHeight + 'px'
  }

  function setAnimations () {
    if (verticalRedBar.classList.contains('vertical-red-bar--show')) {
      verticalRedBar.classList.remove('vertical-red-bar--show')
    }

    verticalRedBar.classList.add('vertical-red-bar--show')
  }
})
