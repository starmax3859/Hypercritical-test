(e=>{const t=()=>{},n=e=>e.length,r=e=>{var t,n,r;try{const n=null===(t=null==e?void 0:e.constructor)||void 0===t?void 0:t.name;if(n)return n}catch(e){}try{const t=null===(r=null===(n=null==e?void 0:e.__zone_symbol__originalInstance)||void 0===n?void 0:n.constructor)||void 0===r?void 0:r.name;if(t)return t}catch(e){}return""},o=(e,t)=>e.startsWith(t),i=e=>!(o(e,"webkit")||o(e,"toJSON")||o(e,"constructor")||o(e,"toString")||o(e,"_")),a=e=>11===e.nodeType&&e.host?"#s":e.nodeName,s=()=>Math.round(Math.random()*Number.MAX_SAFE_INTEGER).toString(36),d={Anchor:"a",DList:"dl",Image:"img",OList:"ol",Paragraph:"p",Quote:"q",TableCaption:"caption",TableCell:"td",TableCol:"colgroup",TableRow:"tr",TableSection:"tbody",UList:"ul"},c={Graphics:"g",SVG:"svg"},l={preserveBehavior:!1},p=Object.freeze((e=>{const t=new Set;let n=[];do{Object.getOwnPropertyNames(n).forEach((e=>{"function"==typeof n[e]&&t.add(e)}))}while((n=Object.getPrototypeOf(n))!==Object.prototype);return Array.from(t)})()),$=Symbol(),u=Symbol(),f=new Map,m=new Map,w={},g=new WeakMap,y=(e,t)=>{if(e)return(t=g.get(e))||(t=e[$])||b(e,t=s()),t},h=(e,t,n,r,o)=>{if((n=w[e])&&n.$window$){if(e===t)return n.$window$;if(r=n.$window$.document,"d"===(o=t.split(".").pop()))return r;if("e"===o)return r.documentElement;if("h"===o)return r.head;if("b"===o)return r.body}return f.get(t)},b=(e,t,n)=>{e&&(f.set(t,e),e[$]=t,e[u]=n=Date.now(),n>v+5e3&&(f.forEach(((e,t)=>{e[u]<v&&e.nodeType&&!e.isConnected&&f.delete(t)})),v=n))};let v=0;const I=e.parent,S=document.implementation.createHTMLDocument(),E=I.partytown||{},O=(E.lib||"/~partytown/")+"debug/",M=e=>{console.debug.apply(console,["%cMain 🌎","background: #717171; color: white; padding: 2px 3px; border-radius: 2px; font-size: 0.8em;",e])},T=[],L=e=>(T.includes(e)||T.push(e),T.indexOf(e)+1),j=(e,t,n)=>{const r=((e,t)=>{return n=e,r={value:t},Object.defineProperty(n,"name",{...r,configurable:!0});var n,r})(class extends w[e].$window$.HTMLElement{},n[0]);return"connectedCallback,disconnectedCallback,attributeChangedCallback,adoptedCallback".split(",").map((n=>r.prototype[n]=function(...r){t.postMessage([15,e,y(this),n,r])})),r.observedAttributes=n[1],r},C=(e,t,n,i,s,d)=>void 0!==t&&(i=typeof t)?"string"===i||"number"===i||"boolean"===i||null==t?[0,t]:"function"===i?[6]:(n=n||new Set)&&Array.isArray(t)?n.has(t)?[1,[]]:n.add(t)&&[1,t.map((t=>C(e,t,n)))]:"object"===i?P(t)?[14,{name:t.name,message:t.message,stack:t.stack}]:""===(s=r(t))?[2,{}]:"Window"===s?[3,[e,e]]:"HTMLCollection"===s||"NodeList"===s?[7,Array.from(t).map((t=>C(e,t,n)[1]))]:s.endsWith("Event")?[5,A(e,t,n)]:"CSSRuleList"===s?[12,Array.from(t).map(k)]:o(s,"CSS")&&s.endsWith("Rule")?[11,k(t)]:"CSSStyleDeclaration"===s?[13,A(e,t,n)]:"Attr"===s?[10,[t.name,t.value]]:t.nodeType?[3,[e,y(t),a(t),d]]:[2,A(e,t,n,!0,!0)]:void 0:t,A=(e,t,n,o,a,s,d,c)=>{if(s={},!n.has(t))for(d in n.add(t),t)i(d)&&(c="path"===d&&r(t).endsWith("Event")?t.composedPath():t[d],(o||"function"!=typeof c)&&(a||""!==c)&&(s[d]=C(e,c,n)));return s},k=e=>{let t,n={};for(t in e)U.includes(t)&&(n[t]=String(e[t]));return n},P=t=>t instanceof e.top.Error,R=(t,n,r,o)=>{if(n)return r=n[0],o=n[1],0===r?o:4===r?x(t,o):1===r?o.map((e=>R(t,e))):3===r?h(o[0],o[1]):5===r?N(W(t,o)):2===r?W(t,o):8===r?o:9===r?new e[n[2]](o):void 0},x=(e,{$winId$:t,$instanceId$:n,$refId$:r},o)=>((o=m.get(r))||(o=function(...o){e.postMessage([9,{$winId$:t,$instanceId$:n,$refId$:r,$thisArg$:C(t,this),$args$:C(t,o)}])},m.set(r,o)),o),N=e=>new("detail"in e?CustomEvent:Event)(e.type,e),W=(e,t,n,r)=>{for(r in n={},t)n[r]=R(e,t[r]);return n},U="cssText,selectorText,href,media,namespaceURI,prefix,name,conditionText".split(","),_=async(e,t)=>{let r,o,i,a,s,d,c={$msgId$:t.$msgId$},l=n(t.$tasks$),p=0;for(;p<l;p++)try{d=p===l-1,r=t.$tasks$[p],o=r.$winId$,i=r.$applyPath$,!w[o]&&o.startsWith("f_")&&await new Promise((e=>{let t=0,n=()=>{w[o]||t++>1e3?e():requestAnimationFrame(n)};n()})),1===i[0]&&i[1]in w[o].$window$?b(new w[o].$window$[i[1]](...R(e,i[2])),r.$instanceId$):(a=h(o,r.$instanceId$),a?(s=q(e,o,a,i,d,r.$groupedGetters$),r.$assignInstanceId$&&("string"==typeof r.$assignInstanceId$?b(s,r.$assignInstanceId$):w[r.$assignInstanceId$.$winId$]={$winId$:r.$assignInstanceId$.$winId$,$window$:{document:s}}),"object"==typeof($=s)&&$&&$.then&&(s=await s,d&&(c.$isPromise$=!0)),d&&(c.$rtnValue$=C(o,s,void 0,void 0,void 0,r.$instanceId$))):(c.$error$=`Error finding instance "${r.$instanceId$}" on window ${L(o)}`,console.error(c.$error$,r)))}catch(e){d?c.$error$=String(e.stack||e):console.error(e)}var $;return c},q=(e,t,o,i,a,s)=>{let d,c,l,p,$,u=0,f=n(i);for(;u<f;u++){c=i[u],d=i[u+1],l=i[u-1];try{if(!Array.isArray(d))if("string"==typeof c||"number"==typeof c){if(u+1===f&&s)return $={},s.map((e=>$[e]=o[e])),$;o=o[c]}else{if(0===d)return void(o[l]=R(e,c));if("function"==typeof o[l]&&(p=R(e,c),"define"===l&&"CustomElementRegistry"===r(o)&&(p[1]=j(t,e,p[1])),"insertRule"===l&&p[1]>n(o.cssRules)&&(p[1]=n(o.cssRules)),o=o[l].apply(o,p),"play"===l))return Promise.resolve()}}catch(e){if(a)throw e;console.debug("Non-blocking setter error:",e)}}return o},F=(e,t)=>{let r,o,i,a=t.$winId$,s=t.$window$,d=s.document,c='script[type="text/partytown"]:not([data-ptid]):not([data-pterror])',$=c+":not([async]):not([defer])";if(d&&d.body)if(r=d.querySelector($),r||(r=d.querySelector(c)),r)r.dataset.ptid=o=y(r,a),i={$winId$:a,$instanceId$:o},r.src?(i.$url$=r.src,i.$orgUrl$=r.dataset.ptsrc||r.src):i.$content$=r.innerHTML,e.postMessage([7,i]);else{if(!t.$isInitialized$){t.$isInitialized$=1,((e,t,r)=>{let o,i,a=r._ptf,s=(r.partytown||{}).forward||[],d=(n,r)=>e.postMessage([10,{$winId$:t,$forward$:n,$args$:C(t,Array.from(r))}]);if(r._ptf=void 0,s.map((e=>{const[t,{preserveBehavior:o}]=(e=>{if("string"==typeof e)return[e,l];const[t,n=l]=e;return[t,{...l,...n}]})(e);i=r,t.split(".").map(((e,t,a)=>{var s;i=i[a[t]]=t+1<n(a)?i[a[t]]||(s=a[t+1],p.includes(s)?[]:{}):(()=>{let e=null;if(o){const{methodOrProperty:t,thisObject:n}=((e,t)=>{let n=e;for(let e=0;e<t.length-1;e+=1)n=n[t[e]];return{thisObject:n,methodOrProperty:t.length>0?n[t[t.length-1]]:void 0}})(r,a);"function"==typeof t&&(e=(...e)=>t.apply(n,...e))}return(...t)=>{let n;return e&&(n=e(t)),d(a,t),n}})()}))})),a)for(o=0;o<n(a);o+=2)d(a[o],a[o+1])})(e,a,s),d.dispatchEvent(new CustomEvent("pt0"));{const e=s===s.top?"top":"iframe";M(`Executed ${e} window ${L(a)} environment scripts in ${(performance.now()-t.$startTime$).toFixed(1)}ms`)}}e.postMessage([8,a])}else requestAnimationFrame((()=>F(e,t)))},z=(e,t,n)=>{if(!g.has(n)){g.set(n,t);const r=n.document,o=n.history,i=g.get(n.parent);let a=!1;const s=[],d=e=>{a?e():s.push(e)},c=()=>{e.postMessage([5,{$winId$:t,$parentWinId$:i,$url$:r.baseURI,$visibilityState$:r.visibilityState}]),setTimeout((()=>{a=!0,s.forEach((e=>{e()}))}))},l=o.pushState.bind(o),p=o.replaceState.bind(o),$=(n,o,i,a)=>()=>{e.postMessage([13,{$winId$:t,type:n,state:o,url:r.baseURI,newUrl:i,oldUrl:a}])};o.pushState=(e,t,n)=>{l(e,t,n),d($(0,e,null==n?void 0:n.toString()))},o.replaceState=(e,t,n)=>{p(e,t,n),d($(1,e,null==n?void 0:n.toString()))},n.addEventListener("popstate",(e=>{d($(2,e.state))})),n.addEventListener("hashchange",(e=>{d($(3,{},e.newURL,e.oldURL))})),n.addEventListener("ptupdate",(()=>{F(e,w[t])})),r.addEventListener("visibilitychange",(()=>e.postMessage([14,t,r.visibilityState]))),w[t]={$winId$:t,$window$:n},w[t].$startTime$=performance.now();M(`Registered ${t===i?"top":"iframe"} window ${L(t)}`);"complete"===r.readyState?c():n.addEventListener("load",c)}},D=()=>{const e=S.createElement("i"),t=S.createTextNode(""),n=S.createComment(""),r=S.createDocumentFragment(),o=S.createElement("p").attachShadow({mode:"open"}),i=Q(I,"IntersectionObserver"),a=Q(I,"MutationObserver"),s=Q(I,"ResizeObserver"),d=I.performance,c=I.screen,l=[[I.history],[d],[d.navigation],[d.timing],[c],[c.orientation],[I.visualViewport],[i,12],[a,12],[s,12],[t],[n],[r],[o],[e],[e.attributes],[e.classList],[e.dataset],[e.style],[S],[S.doctype]],p=[V("Window",I),V("Node",t)],$=function(e){return JSON.stringify(e,((e,t)=>("function"==typeof t&&(t=String(t)).startsWith(e+"(")&&(t="function "+t),"loadScriptsOnMainThread"===e&&(t=t.map((e=>Array.isArray(e)?e:["string"==typeof e?"string":"regexp","string"==typeof e?e:e.source]))),t)))}(E),u={$config$:$,$interfaces$:H(l,p),$libPath$:new URL(O,I.location)+"",$origin$:origin};return X(u.$interfaces$,I,"IntersectionObserverEntry"),u},G=()=>{const e=Object.getOwnPropertyNames(I).map((e=>((e,t,n,r)=>{if(n=t.match(/^(HTML|SVG)(.+)Element$/))return r=n[2],"S"==t[0]?e.createElementNS("http://www.w3.org/2000/svg",c[r]||r.slice(0,2).toLowerCase()+r.slice(2)):e.createElement(d[r]||r)})(S,e))).filter((e=>e)).map((e=>[e]));return H(e,[])},H=(e,t)=>{const n=new Set(["Object"]);return e.filter((e=>e[0])).map((e=>{const t=e[0],n=e[1],o=r(t);return[o,I[o].prototype,t,n]})).map((([e,r,o,i])=>B(n,t,e,r,o,i))),t},V=(e,t,n)=>{let r=[],o=[e,"Object",r];for(n in t)J(r,t,n);return o},B=(e,t,n,o,i,s)=>{if(!e.has(n)){e.add(n);const d=Object.getPrototypeOf(o),c=r(d),l=[],p=Object.getOwnPropertyDescriptors(o);B(e,t,c,d,i,s);for(const e in p)J(l,i,e);t.push([n,c,l,s,a(i)])}},J=(e,t,n,o,a,s)=>{try{i(n)&&isNaN(n[0])&&"all"!==n&&("function"===(a=typeof(o=t[n]))?(String(o).includes("[native")||Object.getPrototypeOf(t)[n])&&e.push([n,5]):"object"===a&&null!=o?"Object"!==(s=r(o))&&"Function"!==s&&self[s]&&e.push([n,o.nodeType||s]):"symbol"!==a&&(n.toUpperCase()===n?e.push([n,6,o]):e.push([n,6])))}catch(e){console.warn(e)}},Q=(e,n)=>void 0!==e[n]?new e[n](t):0,X=(e,t,n)=>{void 0!==t[n]&&e.push([n,"Object",Object.keys(t[n].prototype).map((e=>[e,6])),12])};let K;(t=>{const n=e.navigator.serviceWorker;return n.getRegistration().then((e=>(n.addEventListener("message",(t=>{return n=t.data,r=t=>e.active&&e.active.postMessage(t),_(K,n).then(r);var n,r})),(e,t)=>{0===t[0]?e.postMessage([1,D()]):2===t[0]?e.postMessage([3,G()]):((e,t,n)=>{4===t[0]?z(e,s(),I):(n=w[t[1]])&&(7===t[0]?requestAnimationFrame((()=>F(e,n))):6===t[0]&&((e,t,n,r,o)=>{(o=t.$window$.document.querySelector(`[data-ptid="${n}"]`))&&(r?o.dataset.pterror=r:o.type+="-x",delete o.dataset.ptid),F(e,t)})(e,n,t[2],t[3]))})(e,t)})))})().then((e=>{e&&(K=new Worker(O+"partytown-ww-sw.js?v=0.10.0",{name:"Partytown 🎉"}),K.onmessage=t=>{const n=t.data;12===n[0]?_(K,n[1]):e(K,n)},M("Created Partytown web worker (0.10.0)"),K.onerror=e=>console.error("Web Worker Error",e),I.addEventListener("pt1",(e=>z(K,y(e.detail.frameElement),e.detail))))}))})(window);