const marquee = document.querySelector('.marquee-inner');
const items = [...marquee.children];

// Duplicate items for seamless looping
items.forEach(el => marquee.appendChild(el.cloneNode(true)));

let width = 0;
items.forEach(item => width += item.offsetWidth + parseInt(getComputedStyle(item).marginRight));

// Animate marquee infinitely
gsap.to(marquee, {
  x: `-${width}px`,
  duration: 20,     // adjust speed here
  ease: 'linear',
  repeat: -1
});
