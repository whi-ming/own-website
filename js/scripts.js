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

function displayMore() {
  var sub1 = document.getElementsById("more1");
  var sub2 = document.getElementsById("more2");

  if (sub1.style.display === "none") {
    sub1.style.display = "inline";
    sub2.style.display = "inline";
  } else {
    sub1.style.display = "none";
    sub2.style.display = "none";
  }
}

let t1 = gsap.timeline({
  scrollTrigger:{
      trigger:'.hey',
      start: '-100 center',
      end: '450 center',
      scrub: true,
      markers: true
  }
})
t1.to('.hey', {
  y:-550
})