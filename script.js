gsap.fromTo(
  '.header-img',
  {
    opacity: 0,
    rotation: 5,
  },
  { duration: 1, opacity: 1, rotation: 0 }
);
gsap.fromTo(
  '.header-content',
  {
    opacity: 0,
    rotation: 5,
  },
  { duration: 1, opacity: 1, rotation: 0 }
);
gsap.fromTo(
  '.move-down',
  {
    duration: 1,
    y: -10,
    repeat: -1,
  },
  { duration: 1, y: 0, repeat: -1, yoyo: true }
);

gsap.fromTo('.stat', { opacity: 0 }, { duration: 1, opacity: 1, delay: 0.2, stagger: 0.5 });
gsap.fromTo('.btn', { opacity: 0 }, { duration: 1, opacity: 1, stagger: 0.5, ease: 'power2' });

gsap.fromTo('.card', { opacity: 0 }, { duration: 1, opacity: 1, stagger: 0.2 });

gsap.fromTo('.sec-about', { opacity: 0 }, { duration: 1, opacity: 1, stagger: 0.5 });

// gsap.from('.header-content', {
//   durations: 1.5,
//   x: '100%',
//   ease: 'power2',
//   stagger: 0.5,
// });

// gsap.from('.project-card', {
//   durations: 1.5,
//   x: '1000%',
//   ease: 'Back',
//   stagger: 0.5,
// });

//Slider

const projectCard = document.querySelectorAll('.project-card');

const cardArray = [...projectCard];

projectCard.forEach((card, index) => {
  if (index % 2 === 0) {
    card.dataset.aos = 'zoom-out-right';
  } else {
    card.dataset.aos = 'zoom-out-left';
  }
});

AOS.init();
