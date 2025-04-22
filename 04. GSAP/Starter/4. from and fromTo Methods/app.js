// from: In from method you don't have to specify the initial state, (it will figure it out by itself)



gsap.from(".box1",{
  y: -200,
  duration: 3,
  ease: "linear",
  repeat: -1,
  yoyo: true,
});


// fromTo: In fromTo method you Have to specifythe default value, and also the new animation state.

gsap.fromTo(".box2",{
  y: 300, opacity: 0,
}, {
  opacity: 1,
  y:-300,
  duration: 3,
  ease: "linear",
  borderRadius: 0,
  repeat: -1,
  yoyo: true,
})


gsap.from(".box3",{
  y: 200,
  x: 50,
  duration: 3,
  ease: "linear",
  repeat: -1,
  yoyo: true,
});