const moreButton = document.getElementById('more-trigger-button')
const yLine = document.getElementById('y-line')
const moreSection = document.getElementById('more-section')
const navTriggerBtn = document.getElementById('nav-trigger-btn')
const navTriggerBtnIcon = document.getElementById('nav-trigger-btn-icon')
const navWrapper = document.getElementById('main-nav-wrapper')
const navContent = document.getElementById('main-nav-content')
const navLinkList = document.getElementsByClassName('main-nav__link-list')
const primaryNavSection = document.getElementById('primary-nav-section')

moreButton.addEventListener('click', () => {
  if (moreSection.ariaHidden === 'true') {
    yLine.style.display = 'none'
    moreSection.classList.replace('display-none', 'flex-y')
    moreSection.ariaHidden = 'false'
  } else {
    moreSection.ariaHidden = 'true'
    yLine.style.display = 'block'
    moreSection.classList.replace('flex-y', 'display-none')
  }
})

navTriggerBtn.addEventListener('click', () => {
  if (navContent.arialHidden === 'true') {
    navContent.classList.remove('is-hidden')
    moreSection.classList.remove('is-hidden')
    primaryNavSection.classList.add('is-expanded')
    navContent.arialHidden = 'false'
    navTriggerBtnIcon.style.transform = 'rotateZ(90deg)'
  } else {
    primaryNavSection.classList.remove('is-expanded')
    navContent.classList.add('is-hidden')
    moreSection.classList.add('is-hidden')
    navContent.arialHidden = 'true'
    navTriggerBtnIcon.style.transform = 'rotateZ(270deg)'
  }
})
