import MouseFollower from"mouse-follower";import{ScrollTrigger}from"gsap/all";import lozad from"lozad";import Swiper from"swiper";import"swiper/css";let select=e=>document.querySelector(e),selectAll=e=>document.querySelectorAll(e);document.addEventListener("DOMContentLoaded",(function(){lozad(".lozad",{rootMargin:"200px 0px",loaded:function(e){}}).observe()})),gsap.registerPlugin(ScrollTrigger,ScrollSmoother),ScrollSmoother.create({smooth:1,effects:!0,smoothTouch:.1}),document.addEventListener("DOMContentLoaded",(function(){let e=select("#toTop");function o(){(window.scrollY||document.documentElement.scrollTop)>1.2*window.innerHeight?e.style.display="block":e.style.display="none"}o(),window.addEventListener("scroll",o),e.addEventListener("click",(function(){gsap.to(window,{duration:2,delay:0,scrollTo:{y:0},ease:e=>Math.min(1,1.001-Math.pow(2,-10*e))})}))})),document.addEventListener("DOMContentLoaded",(function(){function e(){if(innerWidth>767){new MouseFollower}}e(),window.addEventListener("resize",e)}));let midmoon=select(".mid-moon"),menuclose=select(".action--close"),menuopen=select(".action--menuUzi");function open(){midmoon.classList.add("mid-moon--light"),midmoon.classList.remove("mid-moon--dark")}function close(){midmoon.classList.add("mid-moon--dark"),midmoon.classList.remove("mid-moon--light")}function assignLinks(e){for(const o in e)if(e.hasOwnProperty(o)){selectAll(o).forEach((t=>{t?t.href=e[o]:console.error(`Elements matching selector ${o} not found.`)}))}}function updateProgressBar(){select(".progress");let e=select(".progress-value"),o=select(".progress .color"),t=0;gsap.to(o,{duration:8,width:"98%",ease:"ease-in"});let n=setInterval((function(){t++,e.textContent=`${t}%`,98==t&&clearInterval(n)}),80)}menuopen.addEventListener("click",open),menuclose.addEventListener("click",close),new Promise(((e,o)=>{document.addEventListener("DOMContentLoaded",(function(){fetch("includes/config.json").then((e=>e.json())).then((o=>{assignLinks(o),e()})).catch((e=>{console.error("Error loading config:",e),o(e)}))}))})).then((()=>{console.log("%c Greetings from Hypercritical","color:white;background:#c389e1; font-size: 26px;font-family:sans-serif")})).catch((e=>{console.error("Failed to load configuration or assign links:",e)})),document.addEventListener("DOMContentLoaded",(()=>{gsap.registerPlugin(ScrollTrigger);const e=gsap.utils.toArray(".white-section");var o=select(".top-arrow-wrapper"),t=select(".top-arrow-path"),n=select(".menu-name"),r=selectAll(".menu-dot-line");function i(){t.style.stroke="var(--color-bg)",o.style.fill="var(--color-black)",r.forEach((e=>{e.style.background="var(--color-black)"})),n.style.color="var(--color-black)"}function s(){t.style.stroke="var(--color-black)",o.style.fill="var(--color-bg)",r.forEach((e=>{e.style.background="var(--color-bg)"})),n.style.color="var(--color-bg)"}function l(){let e=window.scrollY||document.documentElement.scrollTop;e<1*window.innerHeight?s():e>=1*window.innerHeight&&e<1.8*window.innerHeight&&i()}l(),window.addEventListener("scroll",l),e.forEach(((e,o)=>{gsap.timeline({scrollTrigger:{trigger:e,id:o+1,start:"top top",endtrigger:e,end:"bottom bottom",scrub:!0,markers:!1,onEnter:()=>s(),onLeave:()=>i(),onEnterBack:()=>s(),onLeaveBack:()=>i()}})}))}));const options={root:null,rootMargin:"0px",threshold:0},observer=new IntersectionObserver((e=>{e.forEach((e=>{e.isIntersecting&&(updateProgressBar(),observer.unobserve(e.target))}))}),options),targetElement=document.querySelector(".progress");observer.observe(targetElement),$(document).ready((function(){$(".magnetic").each((function(){new Magnetic(this,".magnetic-parent",{y:.15,x:.15,s:.2,rs:.7})}))})),$("[data-magnetic]").each((function(){new Magnetic(this)}));const swiper=new Swiper(".swiper",{loop:!0});let swiperSlides=selectAll(".swiper-slide");swiperSlides.forEach((function(e){e.addEventListener("click",(function(){swiper.slideNext()}))})),gsap.registerPlugin(ScrollTrigger);let maintl=gsap.timeline({scrollTrigger:{trigger:".footer",start:"top top",end:"bottom bottom",scrub:!0,markers:!1,toggleActions:"play none none reverse"}});function scaleModal(){gsap.timeline().addLabel("start","+=0").to(".partner-modal",{duration:.3,opacity:1,scale:1,ease:"power4.inOut"},"start")}function openModal(){gsap.timeline().addLabel("start","+=0").to(".partner-modal",{duration:.001,scale:1.2,ease:"power4.inOut",onComplete:()=>{scaleModal()}},"start")}maintl.to("main",{margin:0,ease:"none",borderRadius:0});let partnerButtons=document.querySelectorAll(".partner-logo");partnerButtons.forEach(((e,o)=>{e.addEventListener("click",openModal)}));let designerButtons=document.querySelectorAll(".designer");function assignExp(e){for(const o in e)if(e.hasOwnProperty(o)){selectAll(o).forEach((t=>{t?t.innerHTML=e[o]:console.error(`Elements matching selector ${o} not found.`)}))}}function scrollToPosition(){gsap.to(window,{duration:2,delay:0,scrollTo:{y:".below-studio-inner-wrapper"},ease:e=>Math.min(1,1.001-Math.pow(2,-10*e))})}designerButtons.forEach(((e,o)=>{e.addEventListener("click",(e=>{e.preventDefault(),openModal()}))})),new Promise(((e,o)=>{document.addEventListener("DOMContentLoaded",(function(){fetch("includes/config-data.json").then((e=>e.json())).then((o=>{assignExp(o),e()})).catch((e=>{console.error("Error loading config:",e),o(e)}))}))})).then((()=>{})).catch((e=>{console.error("Failed to load configuration or assign links:",e)}));let triggerButton=select(".div-svg");triggerButton.addEventListener("click",scrollToPosition);let splitText=new SplitText(".split-text",{type:"lines,words",linesClass:"lineChild",wordsClass:"wordsChild"});function splitShow(){gsap.timeline({scrollTrigger:{trigger:".studio-intro",start:"top bottom",markers:!1,toggleActions:"play none none none"}}).from(".wordsChild",{delay:.5,duration:1,y:100,stagger:.1,ease:"expo3.inOut"})}window.onload=()=>{splitShow()};