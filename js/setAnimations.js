import setProjectInfo from './setProjectInfo'
import projectsDetails from './projectsDetails'

const verticalRedBar = document.querySelector('.vertical-red-bar')
const projectDetailsElm = document.querySelector('.project-details')
const projectsElms = Array.from(document.querySelectorAll('.project'))

function animateIn (elm, cl) {
  elm.classList.add(cl)
}

function setAnimations () {
  if (verticalRedBar.classList.contains('vertical-red-bar--show')) {
    verticalRedBar.classList.remove('vertical-red-bar--show')
  }

  setTimeout(() => {
    verticalRedBar.classList.add('vertical-red-bar--show')
  }, 800)

  projectsElms.map((elm) => {
    const children = Array.from(elm.children)

    children.map((child) => {
      child.addEventListener('click', (e) => {
        if (elm.classList.contains('sleeping-swan')) {
          setProjectInfo('sleeping-swan', projectDetailsElm, projectsDetails)
          animateIn(projectDetailsElm, 'project-details--show')
        } else if (elm.classList.contains('its-time')) {
          setProjectInfo('its-time', projectDetailsElm, projectsDetails)
          animateIn(projectDetailsElm, 'project-details--show')
        } else if (elm.classList.contains('dota-quotes')) {
          setProjectInfo('dota-quotes', projectDetailsElm, projectsDetails)
          animateIn(projectDetailsElm, 'project-details--show')
        }
      })
    })
  })
}

export default setAnimations
