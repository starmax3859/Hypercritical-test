import MouseFollower from"mouse-follower";import Lenis from"@studio-freight/lenis";import{ScrollTrigger}from"gsap/all";import lozad from"lozad";let select=e=>document.querySelector(e),selectAll=e=>document.querySelectorAll(e);document.addEventListener("DOMContentLoaded",(function(){lozad(".lozad",{rootMargin:"200px 0px",loaded:function(e){}}).observe()}));let lenis=new Lenis({duration:3,easing:e=>Math.min(1,1.001-Math.pow(2,-10*e)),direction:"vertical",gestureDirection:"vertical",smooth:!0,smoothTouch:!1,touchMultiplier:2,infinite:!1,autoResize:!0});function raf(e){lenis.raf(e),requestAnimationFrame(raf)}lenis.on("scroll",(e=>{})),requestAnimationFrame(raf),document.addEventListener("DOMContentLoaded",(function(){let e=select("#toTop");function o(){(window.scrollY||document.documentElement.scrollTop)>1.2*window.innerHeight?e.style.display="block":e.style.display="none"}o(),window.addEventListener("scroll",o),select(".circle-arrow").addEventListener("click",(function(){gsap.to(window,{duration:2,delay:0,scrollTo:{y:".service-welcome"},ease:e=>Math.min(1,1.001-Math.pow(2,-10*e))})})),e.addEventListener("click",(function(){gsap.to(window,{duration:2,delay:0,scrollTo:{y:0},ease:e=>Math.min(1,1.001-Math.pow(2,-10*e))})}))})),document.addEventListener("DOMContentLoaded",(function(){function e(){if(innerWidth>767){new MouseFollower}}e(),window.addEventListener("resize",e)})),gsap.registerPlugin(ScrollTrigger);let videotl=gsap.timeline({scrollTrigger:{trigger:".cb-intro-figure",start:"top 90%",end:"top 10",scrub:!0,markers:!1,toggleActions:"play none none reverse"}});videotl.to(".cb-intro-figure",{width:"98%",height:"98vh",ease:"expo.inOut"}),gsap.registerPlugin(ScrollTrigger);let redifinetl=gsap.timeline({scrollTrigger:{trigger:".hc-greeting-bg",start:"top 20%",end:"bottom top",scrub:2,markers:!1,toggleActions:"play none none reverse"}});redifinetl.to(".hc-greeting-bg-media",{x:"-20%",ease:"expo.inOut"});let midmoon=select(".mid-moon"),menuclose=select(".action--close"),menuopen=select(".action--menuUzi");function open(){midmoon.classList.add("mid-moon--light"),midmoon.classList.remove("mid-moon--dark")}function close(){midmoon.classList.add("mid-moon--dark"),midmoon.classList.remove("mid-moon--light")}function assignLinks(e){for(const o in e)if(e.hasOwnProperty(o)){selectAll(o).forEach((n=>{n?n.href=e[o]:console.error(`Elements matching selector ${o} not found.`)}))}}menuopen.addEventListener("click",open),menuclose.addEventListener("click",close),new Promise(((e,o)=>{document.addEventListener("DOMContentLoaded",(function(){fetch("includes/config.json").then((e=>e.json())).then((o=>{assignLinks(o),e()})).catch((e=>{console.error("Error loading config:",e),o(e)}))}))})).then((()=>{console.log("%c Greetings from Hypercritical","color:white;background:#c389e1; font-size: 26px;font-family:sans-serif")})).catch((e=>{console.error("Failed to load configuration or assign links:",e)})),document.addEventListener("DOMContentLoaded",(()=>{gsap.registerPlugin(ScrollTrigger);const e=gsap.utils.toArray(".white-section");var o=select(".top-arrow-wrapper"),n=select(".top-arrow-path"),t=select(".menu-name"),r=selectAll(".menu-dot-line");function i(){n.style.stroke="var(--color-bg)",o.style.fill="var(--color-black)",r.forEach((e=>{e.style.background="var(--color-black)"})),t.style.color="var(--color-black)"}function l(){n.style.stroke="var(--color-black)",o.style.fill="var(--color-bg)",r.forEach((e=>{e.style.background="var(--color-bg)"})),t.style.color="var(--color-bg)"}e.forEach(((e,o)=>{gsap.timeline({scrollTrigger:{trigger:e,id:o+1,start:"top top",endtrigger:e,end:"bottom bottom",scrub:!0,onEnter:()=>l(),onLeave:()=>i(),onEnterBack:()=>l(),onLeaveBack:()=>i()}})}))})),gsap.registerPlugin(SplitText);const herolargelogo=select(".hero-largelogo");let herotext=new SplitText(".innerservice",{type:"chars",charsClass:"inner-service2"});function assignExp(e){for(const o in e)if(e.hasOwnProperty(o)){selectAll(o).forEach((n=>{n?n.innerHTML=e[o]:console.error(`Elements matching selector ${o} not found.`)}))}}new Promise(((e,o)=>{document.addEventListener("DOMContentLoaded",(function(){fetch("includes/config-data.json").then((e=>e.json())).then((o=>{assignExp(o),e()})).catch((e=>{console.error("Error loading config:",e),o(e)}))}))})).then((()=>{})).catch((e=>{console.error("Failed to load configuration or assign links:",e)}));let rightScan=select(".right-scan"),leftScan=select(".left-scan");function animatehero(){gsap.timeline().addLabel("start").from(rightScan,{delay:.6,duration:2,x:100},"start").from(leftScan,{delay:.6,duration:2,x:-100},"start")}window.onload=()=>{animatehero()};