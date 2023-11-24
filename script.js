// let controller;
// let slideScene;

// function animateSlides() {
//     // Init Controller
//     controller = new ScrollMagic.Controller();
//     // Select some things
//     const sliders = document.querySelectorAll('.slide');
//     // Loop over each slide
//     sliders.forEach(slide => {
//         const revealImg = slide.querySelector('.reveal-img');
//         const img = slide.querySelector('img');
//         const revealText = slide.querySelector('.reveal-text')
//         // GSAP
//         gsap.to(revealImg, 1, {x: '100%', opacity: '0.5'}) /* cначала выбираем элемент, затем время затем что с ним сделать */
//         gsap.to(img, 1, {scale: 2})
//         // const slideTl = gsap.timeline({
//         //     defaults: {duration: 1, ease: 'power2.inOut'}
//         // });
//         // slideTl.fromTo(revealImg, {x: '0%'}, {x: '100%'});
//         // slideTl.fromTo(img, {scale: 2}, {scale: 1}, '-=1');
//         // slideTl.fromTo(revealText, {x: '0%'}, {x: '100%'}, '-=1');
//         // slideTl.fromTo(nav, {y: '-100%'}, {y: '0%'}, '-=1');


//     })
// }

// animateSlides()


const revealImg = document.querySelector('.reveal-img');
const revealText = document.querySelector('.reveal-text')
gsap.to(revealImg, 1, {x: '100%', opacity: '1'}) /* cначала выбираем элемент, затем время затем что с ним сделать */
gsap.to(revealText, 1, {x: '100%', opacity: '1'}) /* cначала выбираем элемент, затем время затем что с ним сделать */
