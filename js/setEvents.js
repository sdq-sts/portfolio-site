import setStyles from './setStyles'

export default () => {
  const closeIcon = document.querySelector('.project-details__close-icon')
  const projectDetailsElm = document.querySelector('.project-details')
  const loadingCover = document.querySelector('.loading-cover')

  closeIcon.addEventListener('click', (e) => {
    projectDetailsElm.classList.add('project-details--hide')
  })

  projectDetailsElm.addEventListener('animationend', (e) => {
    if (e.animationName === 'hide-cover') {
      document.body.style.overflow = 'auto'
      projectDetailsElm.classList.remove('project-details--show')
      projectDetailsElm.classList.remove('project-details--hide')
    } else if (e.animationName === 'show-cover') {
      document.body.style.overflow = 'hidden'
    }
  })

  projectDetailsElm.addEventListener('animationstart', (e) => {
    if (e.animationName === 'hide-cover') {
      document.body.style.overflow = 'auto'
    } else if (e.animationName === 'show-cover') {
      document.body.style.overflow = 'hidden'
    }
  })

  window.addEventListener('resize', (e) => { setStyles() })

  loadingCover.classList.add('loading-cover--hide')
  document.body.style.overflow = 'auto'
}
