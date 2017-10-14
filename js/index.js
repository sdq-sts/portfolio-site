import '../scss/main.scss'
import setStyles from './setStyles'
import setAnimations from './setAnimations'

window.addEventListener('load', (e) => {
  setStyles()
  window.addEventListener('resize', (e) => { setStyles() })
  setAnimations()
})
