//smooth scroll
const lenis = new Lenis()
lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)


let t1 = gsap.timeline({
  scrollTrigger:{
      trigger:'.hey',
      start: '-700 center',
      end: '450 center',
      scrub: true,
      markers: true
  }
})
t1.to('.hey', {
  y:-500
})