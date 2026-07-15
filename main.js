/*=============== SHOW & CLOSE MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Show menu */
if(navToggle){
   navToggle.addEventListener('click', () =>{
      navMenu.classList.add('show-menu')
   })
}

/* Hide menu */
if(navClose){
   navClose.addEventListener('click', () =>{
      navMenu.classList.remove('show-menu')
   })
}


/*=============== REMOVE MOBILE MENU ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
   const navMenu = document.getElementById('nav-menu')
   // When we click on each nav__link, we remove the show-menu class
   navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE HEADER STYLES ===============*/
const scrollHeader = () =>{
   const header = document.getElementById('header')
   // Add the .scroll-header class if the bottom scroll of the viewport is greater than 50
   this.scrollY >= 50 ? header.classList.add('scroll-header') 
                      : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)


/*=============== SHOW SCROLL UP ===============*/ 

const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
   // Add the .scroll-header class if the bottom scroll of the viewport is greater than 350
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						     : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp) 
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true // Uncomment this if you want animations to repeat on scroll
})

// Apply the reveal to your specific elements
sr.reveal(`.home__data, .home__images`)
sr.reveal(`.home__title`, {origin: 'left'})
sr.reveal(`.home__lamp`, {origin: 'top', delay: 600})


sr.reveal('.home__salt-1', {
    origin: 'right',   // Where it starts from: 'top', 'bottom', 'left', 'right'
    distance: '80px', // How far it travels
    duration: 3000,   // How long the animation takes (in milliseconds)
    delay: 500,       // How long to wait before starting
    opacity: 0,       // Starts invisible and fades in
    scale: 0.8       // Starts at 80% size and grows to 100%
});

sr.reveal('.home__salt-2', {
    origin: 'left',   // Where it starts from: 'top', 'bottom', 'left', 'right'
    distance: '80px', // How far it travels
    duration: 3000,   // How long the animation takes (in milliseconds)
    delay: 700,       // How long to wait before starting
    opacity: 0,       // Starts invisible and fades in
    scale: 0.8       // Starts at 80% size and grows to 100%
});


sr.reveal('.home__pepper', {
    origin: 'bottom',   // Where it starts from: 'top', 'bottom', 'left', 'right'
    distance: '80px', // How far it travels
    duration: 3000,   // How long the animation takes (in milliseconds)
    delay: 600,       // How long to wait before starting
    opacity: 0,       // Starts invisible and fades in
    scale: 0.8       // Starts at 80% size and grows to 100%
});

sr.reveal('.lamp-glow', {
    origin: 'top',   // Where it starts from: 'top', 'bottom', 'left', 'right'
    distance: '80px', // How far it travels
    duration: 3500,   // How long the animation takes (in milliseconds)
    delay: 900,       // How long to wait before starting
    opacity: 0,       // Starts invisible and fades in
    scale: 0.8       // Starts at 80% size and grows to 100%
});

sr.reveal('.home__house', {
    origin: 'top',   // Where it starts from: 'top', 'bottom', 'left', 'right'
    distance: '80px', // How far it travels
    duration: 1000,   // How long the animation takes (in milliseconds)
    delay: 3000,       // How long to wait before starting
    opacity: 0,       // Starts invisible and fades in
    scale: 0.8       // Starts at 80% size and grows to 100%
});


sr.reveal('.about__binder-wrapper', {
    origin: 'top',   // Where it starts from: 'top', 'bottom', 'left', 'right'
    distance: '80px', // How far it travels
    duration: 2500,   // How long the animation takes (in milliseconds)
    delay: 500,       // How long to wait before starting
    opacity: 0,       // Starts invisible and fades in
    scale: 0.8       // Starts at 80% size and grows to 100%
});

sr.reveal('.about__photo-stack ', {
    origin: 'bottom',   // Where it starts from: 'top', 'bottom', 'left', 'right'
    distance: '80px', // How far it travels
    duration: 2500,   // How long the animation takes (in milliseconds)
    delay: 700,       // How long to wait before starting
    opacity: 0,       // Starts invisible and fades in
    scale: 0.8       // Starts at 80% size and grows to 100%
});

sr.reveal('.about__subtitle', {
    origin: 'left',   // Where it starts from: 'top', 'bottom', 'left', 'right'
    distance: '80px', // How far it travels
    duration: 2500,   // How long the animation takes (in milliseconds)
    delay: 700,       // How long to wait before starting
    opacity: 0,       // Starts invisible and fades in
    scale: 0.8       // Starts at 80% size and grows to 100%
});

sr.reveal('.about__title-left', {
    origin: 'left',   // Where it starts from: 'top', 'bottom', 'left', 'right'
    distance: '80px', // How far it travels
    duration: 2500,   // How long the animation takes (in milliseconds)
    delay: 700,       // How long to wait before starting
    opacity: 0,       // Starts invisible and fades in
    scale: 0.8       // Starts at 80% size and grows to 100%
});




sr.reveal('.about__data', {
    origin: 'left',   // Where it starts from: 'top', 'bottom', 'left', 'right'
    distance: '80px', // How far it travels
    duration: 2500,   // How long the animation takes (in milliseconds)
    delay: 700,       // How long to wait before starting
    opacity: 0,       // Starts invisible and fades in
    scale: 0.8       // Starts at 80% size and grows to 100%
});




sr.reveal('.about__sign', {
    origin: 'bottom',   // Where it starts from: 'top', 'bottom', 'left', 'right'
    distance: '80px', // How far it travels
    duration: 2500,   // How long the animation takes (in milliseconds)
    delay: 700,       // How long to wait before starting
    opacity: 0,       // Starts invisible and fades in
    scale: 0.8       // Starts at 80% size and grows to 100%
});



//-----------------SERVICES SECTION----------------------





sr.reveal('..menu__card ', {
    origin: 'left',   // Where it starts from: 'top', 'bottom', 'left', 'right'
    distance: '80px', // How far it travels
    duration: 2500,   // How long the animation takes (in milliseconds)
    delay: 700,       // How long to wait before starting
    opacity: 0,       // Starts invisible and fades in
    scale: 0.8       // Starts at 80% size and grows to 100%
});

sr.reveal('.menu__main-img1 ', {
    origin: 'left',   // Where it starts from: 'top', 'bottom', 'left', 'right'
    distance: '80px', // How far it travels
    duration: 2500,   // How long the animation takes (in milliseconds)
    delay: 700,       // How long to wait before starting
    opacity: 0,       // Starts invisible and fades in
    scale: 0.8       // Starts at 80% size and grows to 100%
});


sr.reveal('.menu__main-img2', {
    origin: 'left',   // Where it starts from: 'top', 'bottom', 'left', 'right'
    distance: '80px', // How far it travels
    duration: 2500,   // How long the animation takes (in milliseconds)
    delay: 700,       // How long to wait before starting
    opacity: 0,       // Starts invisible and fades in
    scale: 0.8       // Starts at 80% size and grows to 100%
});

sr.reveal('.menu__main-img3', {
    origin: 'left',   // Where it starts from: 'top', 'bottom', 'left', 'right'
    distance: '80px', // How far it travels
    duration: 2500,   // How long the animation takes (in milliseconds)
    delay: 700,       // How long to wait before starting
    opacity: 0,       // Starts invisible and fades in
    scale: 0.8       // Starts at 80% size and grows to 100%
});

sr.reveal('.menu__name', {
    origin: 'left',   // Where it starts from: 'top', 'bottom', 'left', 'right'
    distance: '80px', // How far it travels
    duration: 2500,   // How long the animation takes (in milliseconds)
    delay: 700,       // How long to wait before starting
    opacity: 0,       // Starts invisible and fades in
    scale: 0.8       // Starts at 80% size and grows to 100%
});

sr.reveal('.menu__intro', {
    origin: 'left',   // Where it starts from: 'top', 'bottom', 'left', 'right'
    distance: '80px', // How far it travels
    duration: 2500,   // How long the animation takes (in milliseconds)
    delay: 700,       // How long to wait before starting
    opacity: 0,       // Starts invisible and fades in
    scale: 0.8       // Starts at 80% size and grows to 100%
});


sr.reveal('.menu__summary', {
    origin: 'bottom',   // Where it starts from: 'top', 'bottom', 'left', 'right'
    distance: '80px', // How far it travels
    duration: 2500,   // How long the animation takes (in milliseconds)
    delay: 700,       // How long to wait before starting
    opacity: 0,       // Starts invisible and fades in
    scale: 0.8       // Starts at 80% size and grows to 100%
});


sr.reveal('.menu__hanging-text ', {
    origin: 'top',   // Where it starts from: 'top', 'bottom', 'left', 'right'
    distance: '80px', // How far it travels
    duration: 2500,   // How long the animation takes (in milliseconds)
    delay: 700,       // How long to wait before starting
    opacity: 0,       // Starts invisible and fades in
    scale: 0.8       // Starts at 80% size and grows to 100%
});

sr.reveal('.menu__paper-bg ', {
    origin: 'right',   // Where it starts from: 'top', 'bottom', 'left', 'right'
    distance: '80px', // How far it travels
    duration: 2500,   // How long the animation takes (in milliseconds)
    delay: 700,       // How long to wait before starting
    opacity: 0,       // Starts invisible and fades in
    scale: 0.8       // Starts at 80% size and grows to 100%
});

sr.reveal('.menu__hanging', {
    origin: 'top',   // Where it starts from: 'top', 'bottom', 'left', 'right'
    distance: '80px', // How far it travels
    duration: 2500,   // How long the animation takes (in milliseconds)
    delay: 700,       // How long to wait before starting
    opacity: 0,       // Starts invisible and fades in
    scale: 0.8       // Starts at 80% size and grows to 100%
});

sr.reveal('.menu__bg-img', {
    origin: 'right',   // Where it starts from: 'top', 'bottom', 'left', 'right'
    distance: '80px', // How far it travels
    duration: 2500,   // How long the animation takes (in milliseconds)
    delay: 700,       // How long to wait before starting
    opacity: 0,       // Starts invisible and fades in
    scale: 0.8       // Starts at 80% size and grows to 100%
});



sr.reveal('.contact__telephone', {
    origin: 'right',   // Where it starts from: 'top', 'bottom', 'left', 'right'
    distance: '80px', // How far it travels
    duration: 2500,   // How long the animation takes (in milliseconds)
    delay: 700,       // How long to wait before starting
    opacity: 0,       // Starts invisible and fades in
    scale: 0.8       // Starts at 80% size and grows to 100%
});


sr.reveal('.section__title', {
    origin: 'top',   // Where it starts from: 'top', 'bottom', 'left', 'right'
    distance: '80px', // How far it travels
    duration: 2500,   // How long the animation takes (in milliseconds)
    delay: 700,       // How long to wait before starting
    opacity: 0,       // Starts invisible and fades in
    scale: 0.8       // Starts at 80% size and grows to 100%
});


sr.reveal('.contact__map', {
    origin: 'left',   // Where it starts from: 'top', 'bottom', 'left', 'right'
    distance: '80px', // How far it travels
    duration: 2500,   // How long the animation takes (in milliseconds)
    delay: 900,       // How long to wait before starting
    opacity: 0,       // Starts invisible and fades in
    scale: 0.8       // Starts at 80% size and grows to 100%
});


sr.reveal(' .contact__map img', {
    origin: 'left',   // Where it starts from: 'top', 'bottom', 'left', 'right'
    distance: '80px', // How far it travels
    duration: 2500,   // How long the animation takes (in milliseconds)
    delay: 900,       // How long to wait before starting
    opacity: 0,       // Starts invisible and fades in
    scale: 0.8       // Starts at 80% size and grows to 100%
});


sr.reveal('.contact__wrapper', {
    origin: 'bottom',   // Where it starts from: 'top', 'bottom', 'left', 'right'
    distance: '80px', // How far it travels
    duration: 2500,   // How long the animation takes (in milliseconds)
    delay: 800,       // How long to wait before starting
    opacity: 0,       // Starts invisible and fades in
    scale: 0.8       // Starts at 80% size and grows to 100%
});


sr.reveal('.contact__details', {
    origin: 'right',   // Where it starts from: 'top', 'bottom', 'left', 'right'
    distance: '80px', // How far it travels
    duration: 2500,   // How long the animation takes (in milliseconds)
    delay: 1000,       // How long to wait before starting
    opacity: 0,       // Starts invisible and fades in
    scale: 0.8       // Starts at 80% size and grows to 100%
});



sr.reveal('.contact__link', {
    origin: 'right',   // Where it starts from: 'top', 'bottom', 'left', 'right'
    distance: '80px', // How far it travels
    duration: 2500,   // How long the animation takes (in milliseconds)
    delay: 1000,       // How long to wait before starting
    opacity: 0,       // Starts invisible and fades in
    scale: 0.8       // Starts at 80% size and grows to 100%
});



sr.reveal('.contact__link img', {
    origin: 'right',   // Where it starts from: 'top', 'bottom', 'left', 'right'
    distance: '80px', // How far it travels
    duration: 2500,   // How long the animation takes (in milliseconds)
    delay: 1000,       // How long to wait before starting
    opacity: 0,       // Starts invisible and fades in
    scale: 0.8       // Starts at 80% size and grows to 100%
});


sr.reveal('.footer__container', {
    origin: 'bottom',   // Where it starts from: 'top', 'bottom', 'left', 'right'
    distance: '80px', // How far it travels
    duration: 2500,   // How long the animation takes (in milliseconds)
    delay: 700,       // How long to wait before starting
    opacity: 0,       // Starts invisible and fades in
    scale: 0.8       // Starts at 80% size and grows to 100%
});


sr.reveal('.footer__title', {
    origin: 'top',   // Where it starts from: 'top', 'bottom', 'left', 'right'
    distance: '80px', // How far it travels
    duration: 2500,   // How long the animation takes (in milliseconds)
    delay: 800,       // How long to wait before starting
    opacity: 0,       // Starts invisible and fades in
    scale: 0.8       // Starts at 80% size and grows to 100%
});

sr.reveal('.footer__logo', {
    origin: 'bottom',   // Where it starts from: 'top', 'bottom', 'left', 'right'
    distance: '80px', // How far it travels
    duration: 2500,   // How long the animation takes (in milliseconds)
    delay: 900,       // How long to wait before starting
    opacity: 0,       // Starts invisible and fades in
    scale: 0.8       // Starts at 80% size and grows to 100%
});


sr.reveal('.footer__email', {
    origin: 'bottom',   // Where it starts from: 'top', 'bottom', 'left', 'right'
    distance: '80px', // How far it travels
    duration: 2500,   // How long the animation takes (in milliseconds)
    delay: 900,       // How long to wait before starting
    opacity: 0,       // Starts invisible and fades in
    scale: 0.8       // Starts at 80% size and grows to 100%
});




sr.reveal('.section__footer', {
    origin: 'right',   // Where it starts from: 'top', 'bottom', 'left', 'right'
    distance: '80px', // How far it travels
    duration: 2500,   // How long the animation takes (in milliseconds)
    delay: 900,       // How long to wait before starting
    opacity: 0,       // Starts invisible and fades in
    scale: 0.8       // Starts at 80% size and grows to 100%
});
