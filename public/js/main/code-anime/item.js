import{lerp,getMousePos,getRandomString}from"./utils.js";let mousepos={x:0,y:0};window.addEventListener("mousemove",(e=>{mousepos=getMousePos(e)}));export class Item{DOM={el:null,deco:null};renderedStyles={x:{previous:0,current:0,amt:.1},y:{previous:0,current:0,amt:.1}};randomString=getRandomString(2e3);scrollVal;rect;constructor(e){this.DOM.el=e,this.DOM.deco=this.DOM.el.querySelector(".grid__item-img-decox"),this.calculateSizePosition(),this.initEvents()}calculateSizePosition(){this.scrollVal={x:window.scrollX,y:window.scrollY},this.rect=this.DOM.el.getBoundingClientRect()}initEvents(){window.addEventListener("resize",(()=>this.calculateSizePosition())),this.DOM.el.addEventListener("mousemove",(()=>{this.randomString=getRandomString(2e3)})),this.DOM.el.addEventListener("mouseenter",(()=>{gsap.to(this.DOM.deco,{duration:.5,ease:"power3",opacity:1});this.loopRender(!0)})),this.DOM.el.addEventListener("mouseleave",(()=>{this.stopRendering(),gsap.to(this.DOM.deco,{duration:.5,ease:"power3",opacity:0})}))}loopRender(e=!1){this.requestId||(this.requestId=requestAnimationFrame((()=>this.render(e))))}stopRendering(){this.requestId&&(window.cancelAnimationFrame(this.requestId),this.requestId=void 0)}render(e){this.requestId=void 0;const t=this.scrollVal.x-window.scrollX,s=this.scrollVal.y-window.scrollY;this.renderedStyles.x.current=mousepos.x-(t+this.rect.left),this.renderedStyles.y.current=mousepos.y-(s+this.rect.top),e&&(this.renderedStyles.x.previous=this.renderedStyles.x.current,this.renderedStyles.y.previous=this.renderedStyles.y.current);for(const e in this.renderedStyles)this.renderedStyles[e].previous=lerp(this.renderedStyles[e].previous,this.renderedStyles[e].current,this.renderedStyles[e].amt);gsap.set(this.DOM.el,{"--x":this.renderedStyles.x.previous,"--y":this.renderedStyles.y.previous}),this.DOM.deco.innerHTML=this.randomString,this.loopRender()}}