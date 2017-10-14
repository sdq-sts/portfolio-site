const verticalRedBar = document.querySelector('.vertical-red-bar')

function setAnimations () {
  if (verticalRedBar.classList.contains('vertical-red-bar--show')) {
    verticalRedBar.classList.remove('vertical-red-bar--show')
  }

  verticalRedBar.classList.add('vertical-red-bar--show')
}

export default setAnimations
