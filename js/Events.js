class Event {
  constructor () {
    this.events = {}
  }

  on (eventName, fn) {
    this.events[eventName] = this.events[eventName] || []
    this.events[eventName].push(fn)
  }

  off (eventName, fn) {
    let events = this.events[eventName]

    if (events) {
      events.map((el, i) => events[i] === fn ? events.splice(i, 1) : null)
    }
  }

  emit (eventName, data) {
    let events = this.events[eventName]

    if (events) {
      events.map(fn => fn(data))
    }
  }
}

export default new Event()
