gsap.set(".box",{
  opacity: 0,
  background: "yellow",
})

gsap.to(".box",{
  opacity:1,
  background: "crimson",
  duration: 3,
  y: 200,
  x: -250,
  repeat: -1,
  yoyo: true
});