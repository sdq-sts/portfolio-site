import '../scss/main.scss'
import setEvents from './setEvents'
import setStyles from './setStyles'
import setAnimations from './setAnimations'

window.addEventListener('load', (e) => {
  setEvents()
  setStyles()
  setAnimations()
})
