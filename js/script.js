// ================================
// GSAP SETUP
// ================================

gsap.registerPlugin(ScrollTrigger);


// ================================
// HERO INTRO ANIMATION
// ================================


const heroTimeline = gsap.timeline({
    defaults:{
        ease:"power3.out"
    }
});


// Navbar

heroTimeline.from(".navbar",{
    y:-80,
    opacity:0,
    duration:1
});


// Hero Tag

heroTimeline.from(".hero-tag",{
    y:40,
    opacity:0,
    duration:0.8
},"-=0.5");


// Heading

heroTimeline.from(".hero h1",{

    y:80,
    opacity:0,
    duration:1

},"-=0.5");


// Paragraph

heroTimeline.from(".hero p",{

    y:40,
    opacity:0,
    duration:0.8

},"-=0.6");


// Buttons

heroTimeline.from(".hero-buttons a",{

    y:30,
    opacity:0,
    stagger:0.2,
    duration:0.7

},"-=0.5");


// Food Image

heroTimeline.from(".hero-image img",{

    scale:0.6,
    opacity:0,
    rotation:10,
    duration:1.2

},"-=0.8");



// ================================
// CONTINUOUS FLOAT EFFECT
// ================================


gsap.to(".hero-image img",{

    y:-20,
    duration:2.5,
    repeat:-1,
    yoyo:true,
    ease:"sine.inOut"

});



// ================================
// ABOUT SCROLL ANIMATION
// ================================


gsap.from(".about-image",{

    scrollTrigger:{
        trigger:".about",
        start:"top 80%",
    },

    x:-100,
    opacity:0,
    duration:1.2,
    ease:"power3.out"

});



gsap.from(".about-content",{

    scrollTrigger:{
        trigger:".about",
        start:"top 80%",
    },

    x:100,
    opacity:0,
    duration:1.2,
    delay:.2,
    ease:"power3.out"

});
gsap.from(".experience-card",{

    scrollTrigger:{
        trigger:".about",
        start:"top 75%",
    },

    scale:0,
    opacity:0,
    duration:1,
    ease:"back.out"

});
/*
gsap.from(".dish-card",{

    scrollTrigger:{
        trigger:".dishes",
        start:"top 85%",
        once:true
    },

    y:80,
    opacity:0,
    scale:0.9,
    stagger:0.2,
    duration:1,
    ease:"power3.out"

});
*/
gsap.fromTo(".dish-card",

{
    y:80,
    opacity:0,
    scale:0.9
},

{
    y:0,
    opacity:1,
    scale:1,

    scrollTrigger:{
        trigger:".dishes",
        start:"top 80%",
    },

    stagger:0.2,
    duration:1,
    ease:"power3.out"

});
gsap.from(".gallery-item",{

    scrollTrigger:{

        trigger:".gallery",

        start:"top 80%",

    },

    y:100,

    opacity:0,

    stagger:0.15,

    duration:1,

    ease:"power3.out"

});
gsap.from(".chef-image",{

    scrollTrigger:{
        trigger:".chef",
        start:"top 80%",
    },

    x:-100,
    opacity:0,
    duration:1.2,
    ease:"power3.out"

});



gsap.from(".chef-content",{

    scrollTrigger:{
        trigger:".chef",
        start:"top 80%",
    },

    x:100,
    opacity:0,
    duration:1.2,
    ease:"power3.out"

});
// =========================
// SCROLL PROGRESS BAR
// =========================

window.addEventListener("scroll", () => {

    const scrollTop =
        document.documentElement.scrollTop;

    const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress =
        (scrollTop / scrollHeight) * 100;

    document.getElementById("progress-bar").style.width =
        progress + "%";

});

// =========================
// STICKY NAVBAR
// =========================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

    if(window.scrollY>80){

        navbar.classList.add("scrolled");

    }else{

        navbar.classList.remove("scrolled");

    }

});
// =========================
// ACTIVE NAVIGATION
// =========================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});
// =========================
// CUSTOM CURSOR
// =========================

const cursor=document.querySelector(".custom-cursor");

document.addEventListener("mousemove",(e)=>{

    cursor.style.left=e.clientX+"px";
    cursor.style.top=e.clientY+"px";

});

document.querySelectorAll("a,button").forEach(item=>{

    item.addEventListener("mouseenter",()=>{

        cursor.classList.add("active");

    });

    item.addEventListener("mouseleave",()=>{

        cursor.classList.remove("active");

    });

});