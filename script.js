anime({
  targets: " .logo",
  opacity: [0, 1],
  translateY: [-50, 0],
  duration: 2000,
  easing: "easeOutExpo",
});

anime({
  targets: ".btn, .main-nav-list li",
  opacity: [0, 1],
  translateY: [30, 0],
  delay: anime.stagger(300, { start: 1000 }),
  duration: 800,
  easing: "easeOutCubic",
});
anime({
  targets: ".nav-cta",
  scale: [
    { value: 1, duration: 0 },
    { value: 1.1, duration: 500 },
    { value: 1, duration: 500 },
  ],
  easing: "easeInOutQuad",
  loop: true,
});

anime({
  targets: ".delivered-meals",
  translateX: ["-100%", "0%"],
  opacity: [0, 1],
  duration: 3000,
  easing: "easeOutExpo",
});
