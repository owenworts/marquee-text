gsap.registerPlugin(ScrollTrigger);
const marquee = document.querySelector('.marquee-inner');
[...marquee.children].forEach(el => marquee.appendChild(el.cloneNode(true)));
let x = 0;
ScrollTrigger.create({
trigger: '.marquee-block',
start: 'top bottom',
end: 'bottom top',
scrub: true,
onUpdate(self) {
x -= self.getVelocity() * 0.01;
const limit = marquee.scrollWidth / 2;
if (x <= -limit) x = 0;
if (x >= 0) x = -limit;
gsap.set(marquee, { x });
}
});
