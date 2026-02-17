gsap.from("header", {
  opacity: 0,
  y: -30,
  duration: 0.8,
  ease: "power3.out",
});

gsap.from("section", {
  opacity: 0,
  y: 40,
  stagger: 0.2,
  duration: 0.9,
  ease: "power3.out",
});

// gsap.from(".link-card", {
//   opacity: 1,
//   y: 30,
//   stagger: 0.08,
//   duration: 0.8,
//   ease: "power3.out",
// });
