import '../scss/contact-page.scss'

window.addEventListener('load', (e) => {
  const loadingCover = document.querySelector('.loading-cover')
  const verticalRedBar = document.querySelector('.vertical-red-bar')
  const sendBtn = document.querySelector('.form-submit__btn')
  const formName = document.querySelector('.group-name__field')
  const formEmail = document.querySelector('.group-email__field')
  const formMessage = document.querySelector('.group-message__field')

  window.addEventListener('keyup', (e) => {
    if (formName.value && formEmail.value && formMessage.value) {
      sendBtn.classList.remove('form-submit__btn--hide')
      sendBtn.classList.add('form-submit__btn--show')
    } else {
      sendBtn.classList.remove('form-submit__btn--show')
      sendBtn.classList.add('form-submit__btn--hide')
    }
  })

  loadingCover.classList.add('loading-cover--hide')
  verticalRedBar.classList.add('vertical-red-bar--show')
  document.body.style.overflow = 'auto'
})
