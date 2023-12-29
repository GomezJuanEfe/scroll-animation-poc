// const path = document.querySelector('path')
// const pathLength = path.getTotalLength()

// path.style.strokeDasharray = pathLength + ' ' + pathLength;

// path.style.strokeDashoffset = pathLength;

// window.addEventListener('scroll', () => {
//   // What % down is it?
//   let scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);

//   // Length to offset the dashes
//   let drawLength = pathLength * scrollPercentage;

//   // Draw in reverse
//   path.style.strokeDashoffset = pathLength - drawLength;
// })

const svg = document.querySelector("svg.squiggle")
const path = svg.querySelector("path")

svg.style.display = 'none'

const scroll = () => {
  svg.style.display = 'block'

  const distance = window.scrollY
  const totalDistance = document.body.clientHeight - window.innerHeight

  const percentage = distance / totalDistance

  const pathLength = path.getTotalLength()

  path.style.strokeDasharray = `${pathLength}`
  path.style.strokeDashoffset = `${pathLength * (1 - percentage)}`

  const target = document.querySelectorAll('.scroll')

  for (let i = 0; i < target.length; i++) {
    let pos = window.scrollY * target[i].dataset.rate;

    if (target[i].dataset.direction === 'vertical') {
      target[i].style.transform = `translate3d(0px, ${pos}px, 0px)`
    } else {
      let posX = window.scrollY * target[i].dataset.ratex
      let posY = window.scrollY * target[i].dataset.ratey

      target[i].style.transform = `translate3d(${posX}px, ${posY}px, 0px)`
    }
  }
}

window.addEventListener("scroll", scroll)