gsap.registerPlugin(ScrollTrigger);

const marquee = document.querySelector('.marquee-inner');
const items = Array.from(marquee.children);

// Duplicate items for infinite seamless loop
items.forEach(el => marquee.appendChild(el.cloneNode(true)));

let xPos = 0;

ScrollTrigger.create({
  trigger: ".marquee-block",
  start: "top bottom",
  end: "bottom top",
  scrub: true,
  onUpdate(self) {
    // The number can be adjusted to change speed
    const speed = self.getVelocity() * 0.01;

    xPos -= speed;

    // Reset to prevent large numbers / looping seamlessly
    if (xPos <= -marquee.offsetWidth / 2) xPos = 0;
    if (xPos >= 0) xPos = -marquee.offsetWidth / 2;

    gsap.set(marquee, {
      x: xPos
    });
  }
});
