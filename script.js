const marquee = document.querySelector('.marquee-inner');
[...marquee.children].forEach(el => marquee.appendChild(el.cloneNode(true)));


gsap.to(marquee, {
x: '-50%',
duration: 20,
ease: 'linear',
repeat: -1
});
