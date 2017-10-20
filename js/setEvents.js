import setStyles from './setStyles'

export default () => {
  const closeBtns = Array.from(document.querySelectorAll('.project-data__close-btn'))
  const projectsInfo = Array.from(document.querySelectorAll('.project-info'))
  const loadingCover = document.querySelector('.loading-cover')

  closeBtns.map((btn) => {
    btn.addEventListener('click', (e) => {
      projectsInfo.map((elm) => {
        let parent = btn.parentNode.parentNode.parentNode
        parent.classList.add('project-info--hide')
      })
    })
  })

  projectsInfo.map((elm) => {
    elm.addEventListener('animationend', function (e) {
      if (e.animationName === 'hide-cover') {
        elm.classList.remove('project-info--show')
        elm.classList.remove('project-info--hide')
      }
    })

    elm.addEventListener('animationstart', function (e) {
      console.log(e.elapsedTime)
      if (e.animationName === 'hide-cover') {
        document.body.style.overflow = 'auto'
      }

      if (e.animationName === 'show-cover') {
        document.body.style.overflow = 'hidden'
      }
    })
  })

  window.addEventListener('resize', (e) => { setStyles() })
  document.body.style.overflow = 'auto'
  loadingCover.classList.add('loading-cover--hide')
}
