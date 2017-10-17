const projectsElms = Array.from(document.querySelectorAll('.project'))
const verticalRedBar = document.querySelector('.vertical-red-bar')

function setAnimations () {
  addVerticalRedBarAnimation()
  addProjectsInfoAnimation()
}

function addVerticalRedBarAnimation () {
  if (verticalRedBar.classList.contains('vertical-red-bar--show')) {
    verticalRedBar.classList.remove('vertical-red-bar--show')
  }

  verticalRedBar.classList.add('vertical-red-bar--show')
}

function addProjectsInfoAnimation () {
  const sleepingSwanInfo = document.querySelector('.project-info.sleeping-swan')
  const dotaQuotesInfo = document.querySelector('.project-info.dota-quotes')
  const inTimeInfo = document.querySelector('.project-info.in-time')

  projectsElms.map((elm) => {
    const children = Array.from(elm.children)

    children.map((child) => {
      child.addEventListener('click', (e) => {
        if (elm.classList.contains('sleeping-swan')) {
          animateIn(sleepingSwanInfo, 'project-info--show')
        } else if (elm.classList.contains('dota-quotes')) {
          animateIn(dotaQuotesInfo, 'project-info--show')
        } else if (elm.classList.contains('in-time')) {
          animateIn(inTimeInfo, 'project-info--show')
        }
      })
    })
  })
}

function animateIn (elm, cl) {
  elm.classList.add(cl)
}

export default setAnimations
