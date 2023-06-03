const moreButton = document.getElementById('more-trigger-button')
const yLine = document.getElementById('y-line')
const moreSection = document.getElementById('more-section')
const navTriggerBtn = document.getElementById('nav-trigger-btn')
const navWrapper = document.getElementById('main-nav-wrapper')
const navContent = document.getElementById('main-nav-content')
const navLinkList = document.getElementsByClassName('main-nav__link-list')
const primaryNavSection = document.getElementById('primary-nav-section')

moreButton.addEventListener('click', () => {
  if (moreSection.ariaHidden === 'true') {
    yLine.style.display = 'none'
    moreSection.style.display = 'flex'
    moreSection.ariaHidden = 'false'
  } else {
    moreSection.ariaHidden = 'true'
    yLine.style.display = 'block'
    moreSection.style.display = 'none'
  }
})

navTriggerBtn.addEventListener('click', () => {
  navWrapper.classList.replace('flex-x', 'flex-y')
  navContent.classList.remove('is-collapsed')
  moreSection.classList.remove('is-collapsed')
  moreSection.ariaHidden = 'false'

  primaryNavSection.classList.add('is-expanded')

  for (let i = 0; i < navLinkList.length; i++) {
    navLinkList[i].classList.add('flex-y')
    navLinkList[i].classList.replace('align-center', 'align-start')
    navLinkList[i].classList.add('gap-0')
  }
})
