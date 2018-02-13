'use strict'

const doc = document
const l = (text, thing) => console.log(text, '===>',  thing)

const adminForm = doc.querySelector('.form-navigator')

if (adminForm) {
  window.addEventListener('load', () => {
    const header = doc.getElementById('banner')
    const footer = doc.getElementById('footer')
    const toolbar = doc.querySelector('.toolbar')

    const scrollBottomBtn = doc.createElement('button')
    const scrollTopBtn = doc.createElement('button')

    scrollBottomBtn.classList.add('btn', 'go-to-bottom')
    scrollBottomBtn.innerText = '↓'
    scrollBottomBtn.addEventListener('click', () => footer.scrollIntoView())
    scrollBottomBtn.setAttribute('type', 'button')

    scrollTopBtn.classList.add('btn', 'go-to-top')
    scrollTopBtn.innerText = '↑'
    scrollTopBtn.addEventListener('click', () => document.documentElement.scrollTop = 0)
    scrollTopBtn.setAttribute('type', 'button')

    toolbar.appendChild(scrollBottomBtn)
    toolbar.appendChild(scrollTopBtn)
  })
}