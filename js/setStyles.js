const siteHeader = document.querySelector('.site__header')
const videoContainer = document.querySelector('.video-container')

function setStyles () {
  document.documentElement.style.setProperty('--red-bar-width', siteHeader.clientHeight + 'px')
  videoContainer.style.height = siteHeader.clientHeight + 'px'
}

export default setStyles
