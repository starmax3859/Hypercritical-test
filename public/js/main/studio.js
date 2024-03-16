import MouseFollower from"mouse-follower";import Lenis from"@studio-freight/lenis";import{ScrollTrigger}from"gsap/all";import lozad from"lozad";import Reeller from"reeller";let select=e=>document.querySelector(e),selectAll=e=>document.querySelectorAll(e);document.addEventListener("DOMContentLoaded",(function(){lozad(".lozad",{rootMargin:"200px 0px",loaded:function(e){}}).observe()}));let lenis=new Lenis({duration:3,easing:e=>Math.min(1,1.001-Math.pow(2,-10*e)),direction:"vertical",gestureDirection:"vertical",smooth:!0,smoothTouch:!1,touchMultiplier:2,infinite:!1,autoResize:!0});function raf(e){lenis.raf(e),requestAnimationFrame(raf)}lenis.on("scroll",(e=>{})),requestAnimationFrame(raf),document.addEventListener("DOMContentLoaded",(function(){let e=select("#toTop");function o(){(window.scrollY||document.documentElement.scrollTop)>1.2*window.innerHeight?e.style.display="block":e.style.display="none"}o(),window.addEventListener("scroll",o),e.addEventListener("click",(function(){gsap.to(window,{duration:2,delay:0,scrollTo:{y:0},ease:e=>Math.min(1,1.001-Math.pow(2,-10*e))})}))})),document.addEventListener("DOMContentLoaded",(function(){function e(){if(innerWidth>767){new MouseFollower}}e(),window.addEventListener("resize",e)}));let midmoon=select(".mid-moon"),menuclose=select(".action--close"),menuopen=select(".action--menuUzi");function open(){midmoon.classList.add("mid-moon--light"),midmoon.classList.remove("mid-moon--dark")}function close(){midmoon.classList.add("mid-moon--dark"),midmoon.classList.remove("mid-moon--light")}function assignLinks(e){for(const o in e)if(e.hasOwnProperty(o)){selectAll(o).forEach((t=>{t?t.href=e[o]:console.error(`Elements matching selector ${o} not found.`)}))}}function updateProgressBar(){select(".progress");let e=select(".progress-value"),o=select(".progress .color"),t=0;gsap.to(o,{duration:8,width:"98%",ease:"ease-in"});let n=setInterval((function(){t++,e.textContent=`${t}%`,98==t&&clearInterval(n)}),80)}menuopen.addEventListener("click",open),menuclose.addEventListener("click",close),new Promise(((e,o)=>{document.addEventListener("DOMContentLoaded",(function(){fetch("includes/config.json").then((e=>e.json())).then((o=>{assignLinks(o),e()})).catch((e=>{console.error("Error loading config:",e),o(e)}))}))})).then((()=>{})).catch((e=>{console.error("Failed to load configuration or assign links:",e)})),document.addEventListener("DOMContentLoaded",(()=>{gsap.registerPlugin(ScrollTrigger);const e=gsap.utils.toArray(".white-section");var o=select(".top-arrow-wrapper"),t=select(".top-arrow-path"),n=select(".menu-name"),r=selectAll(".menu-dot-line");function i(){t.style.stroke="var(--color-bg)",o.style.fill="var(--color-black)",r.forEach((e=>{e.style.background="var(--color-black)"})),n.style.color="var(--color-black)"}function s(){t.style.stroke="var(--color-black)",o.style.fill="var(--color-bg)",r.forEach((e=>{e.style.background="var(--color-bg)"})),n.style.color="var(--color-bg)"}e.forEach(((e,o)=>{gsap.timeline({scrollTrigger:{trigger:e,id:o+1,start:"top top",endtrigger:e,end:"bottom bottom",scrub:!0,onEnter:()=>s(),onLeave:()=>i(),onEnterBack:()=>s(),onLeaveBack:()=>i()}})}))}));const options={root:null,rootMargin:"0px",threshold:0},observer=new IntersectionObserver((e=>{e.forEach((e=>{e.isIntersecting&&(updateProgressBar(),observer.unobserve(e.target))}))}),options),targetElement=document.querySelector(".progress");observer.observe(targetElement),$(document).ready((function(){$(".magnetic").each((function(){new Magnetic(this,".magnetic-parent",{y:.15,x:.15,s:.2,rs:.7})}))})),$("[data-magnetic]").each((function(){new Magnetic(this)}));import Swiper from"swiper";import"swiper/css";const swiper=new Swiper(".swiper",{loop:!0});let swiperSlides=selectAll(".swiper-slide");swiperSlides.forEach((function(e){e.addEventListener("click",(function(){swiper.slideNext()}))}));