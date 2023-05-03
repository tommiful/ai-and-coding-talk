(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function i(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerpolicy&&(n.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?n.credentials="include":o.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(o){if(o.ep)return;o.ep=!0;const n=i(o);fetch(o.href,n)}})();let L=["far-past","past","current","next","far-next"],U=15,a,c;typeof document<"u"&&!("classList"in document.createElement("a"))&&function(e){let t="classList",i="prototype",s=(e.HTMLElement||e.Element)[i],o=Object;if(strTrim=String[i].trim||function(){return this.replace(/^\s+|\s+$/g,"")},arrIndexOf=Array[i].indexOf||function(n){for(let r=0,f=this.length;r<f;r++)if(r in this&&this[r]===n)return r;return-1},DOMEx=function(n,r){this.name=n,this.code=DOMException[n],this.message=r},checkTokenAndGetIndex=function(n,r){if(r==="")throw new DOMEx("SYNTAX_ERR","An invalid or illegal string was specified");if(/\s/.test(r))throw new DOMEx("INVALID_CHARACTER_ERR","String contains an invalid character");return arrIndexOf.call(n,r)},ClassList=function(n){let r=strTrim.call(n.className),f=r?r.split(/\s+/):[];for(let g=0,M=f.length;g<M;g++)this.push(f[g]);this._updateClassName=function(){n.className=this.toString()}},classListProto=ClassList[i]=[],classListGetter=function(){return new ClassList(this)},DOMEx[i]=Error[i],classListProto.item=function(n){return this[n]||null},classListProto.contains=function(n){return n+="",checkTokenAndGetIndex(this,n)!==-1},classListProto.add=function(n){n+="",checkTokenAndGetIndex(this,n)===-1&&(this.push(n),this._updateClassName())},classListProto.remove=function(n){n+="";let r=checkTokenAndGetIndex(this,n);r!==-1&&(this.splice(r,1),this._updateClassName())},classListProto.toggle=function(n){n+="",checkTokenAndGetIndex(this,n)===-1?this.add(n):this.remove(n)},classListProto.toString=function(){return this.join(" ")},o.defineProperty){let n={get:classListGetter,enumerable:!0,configurable:!0};try{o.defineProperty(s,t,n)}catch(r){r.number===-2146823252&&(n.enumerable=!1,o.defineProperty(s,t,n))}}else o[i].__defineGetter__&&s.__defineGetter__(t,classListGetter)}(self);function y(e){return e<0||e>=c.length?null:c[e]}function p(e,t){let i=y(e);if(!!i){t&&i.classList.add(t);for(let s in L)t!=L[s]&&i.classList.remove(L[s])}}function A(){for(let e=0;e<c.length;e++)switch(e){case a-2:p(e,"far-past");break;case a-1:p(e,"past");break;case a:p(e,"current");break;case a+1:p(e,"next");break;case a+2:p(e,"far-next");break;default:p(e);break}K(a-1),$(a),window.setTimeout(()=>{Q(a-2)},301),w(a-1),w(a+2),d()&&X(c[a]),ne()}function j(){let e=c[a].querySelectorAll(".to-build");return e.length?(e[0].classList.remove("to-build"),d()&&X(e[0]),!0):!1}function C(){a>0&&(a--,A())}function x(){j()||a<c.length-1&&(a++,A())}function $(e){let t=y(e);if(!t)return;let i=t.getAttribute("onslideenter");i&&new Function(i).call(t);let s=document.createEvent("Event");s.initEvent("slideenter",!0,!0),s.slideNumber=e+1,t.dispatchEvent(s)}function K(e){let t=y(e);if(!t)return;let i=t.getAttribute("onslideleave");i&&new Function(i).call(t);let s=document.createEvent("Event");s.initEvent("slideleave",!0,!0),s.slideNumber=e+1,t.dispatchEvent(s)}function J(e){e.touches.length==1&&(touchDX=0,touchDY=0,touchStartX=e.touches[0].pageX,touchStartY=e.touches[0].pageY,document.body.addEventListener("touchmove",V,!0),document.body.addEventListener("touchend",I,!0))}function V(e){e.touches.length>1?W():(touchDX=e.touches[0].pageX-touchStartX,touchDY=e.touches[0].pageY-touchStartY)}function I(e){let t=Math.abs(touchDX),i=Math.abs(touchDY);t>U&&i<t*2/3&&(touchDX>0?C():x()),W()}function W(){document.body.removeEventListener("touchmove",V,!0),document.body.removeEventListener("touchend",I,!0)}function Q(e){let t=y(e);if(!t)return;let i=t.getElementsByTagName("iframe");for(var s=0,o;o=i[s];s++)_(o)}function w(e){let t=y(e);if(!t)return;let i=t.getElementsByTagName("iframe");for(var s=0,o;o=i[s];s++)Z(o)}function _(e){e.src="about:blank"}function Z(e){let t=e._src;e.src!=t&&t!="about:blank"&&(e.src=t)}function ee(){let e=document.querySelectorAll("iframe");for(var t=0,i;i=e[t];t++)i._src=i.src,_(i);w(a),w(a+1),w(a+2)}function te(){var e=document.createElement("div");e.className="slide-area",e.id="prev-slide-area",e.addEventListener("click",C,!1),document.querySelector("section.slides").appendChild(e);var e=document.createElement("div");e.className="slide-area",e.id="next-slide-area",e.addEventListener("click",x,!1),document.querySelector("section.slides").appendChild(e),document.body.addEventListener("touchstart",J,!1)}function d(){return!(typeof cvox>"u")}function X(e){if(!d())return;cvox.ChromeVox.navigationManager.switchToStrategy(cvox.ChromeVoxNavigationManager.STRATEGIES.LINEARDOM,0,!0),cvox.ChromeVox.navigationManager.syncToNode(e),cvox.ChromeVoxUserCommands.finishNavCommand("");let t=e;for(;t.firstChild;)t=t.firstChild;cvox.ChromeVox.navigationManager.syncToNode(t)}function ie(){if(!!d()){if(cvox.ChromeVox.navigationManager.switchToStrategy(cvox.ChromeVoxNavigationManager.STRATEGIES.LINEARDOM,0,!0),cvox.ChromeVox.navigationManager.next(!0),!cvox.DomUtil.isDescendantOfNode(cvox.ChromeVox.navigationManager.getCurrentNode(),c[a])){let e=c[a];for(;e.firstChild;)e=e.firstChild;cvox.ChromeVox.navigationManager.syncToNode(e),cvox.ChromeVox.navigationManager.next(!0)}cvox.ChromeVoxUserCommands.finishNavCommand("")}}function se(){if(!!d()){if(cvox.ChromeVox.navigationManager.switchToStrategy(cvox.ChromeVoxNavigationManager.STRATEGIES.LINEARDOM,0,!0),cvox.ChromeVox.navigationManager.previous(!0),!cvox.DomUtil.isDescendantOfNode(cvox.ChromeVox.navigationManager.getCurrentNode(),c[a])){let e=c[a];for(;e.lastChild;)e=e.lastChild;cvox.ChromeVox.navigationManager.syncToNode(e),cvox.ChromeVox.navigationManager.previous(!0)}cvox.ChromeVoxUserCommands.finishNavCommand("")}}function oe(){let e=parseInt(location.hash.substr(1));e?a=e-1:a=0}function ne(){location.replace(`#${a+1}`)}function re(e){switch(e.keyCode){case 39:case 13:case 32:case 34:x(),e.preventDefault();break;case 37:case 8:case 33:C(),e.preventDefault();break;case 40:d()?ie():x(),e.preventDefault();break;case 38:d()?se():C(),e.preventDefault();break}}function ae(){document.addEventListener("keydown",re,!1)}function ce(){for(var e=a,t;t=c[e];e++){let o=t.querySelectorAll(".build > *");for(var i=0,s;s=o[i];i++)s.classList&&s.classList.add("to-build")}}function D(){c=document.querySelectorAll("section.slides > article"),ee(),ae(),A(),te(),ce(),document.body.classList.add("loaded")}function le(){oe(),window._DCL?D():document.addEventListener("DOMContentLoaded",D,!1)}if(!window._DEBUG&&document.location.href.indexOf("?debug")!==-1){document.addEventListener("DOMContentLoaded",function(){window._DCL=!0},!1),window._DEBUG=!0;let e=document.createElement("script");e.type="text/javascript",e.src="../slides.js";let t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t),t.parentNode.removeChild(t)}else le();Number.prototype.clamp=function(e,t){return Math.min(Math.max(this,e),t)};function he(){return typeof navigator<"u"?/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||window.innerWidth<600:null}const ue=e=>document.querySelector(e),k=e=>typeof e=="number"?"#"+("00000"+e.toString(16)).slice(-6):e;function Y(e){for(;e.children&&e.children.length>0;)Y(e.children[0]),e.remove(e.children[0]);e.geometry&&e.geometry.dispose(),e.material&&(Object.keys(e.material).forEach(t=>{!e.material[t]||e.material[t]!==null&&typeof e.material[t].dispose=="function"&&e.material[t].dispose()}),e.material.dispose())}const b=typeof window=="object";let E=b&&window.THREE||{};b&&!window.VANTA&&(window.VANTA={});const l=b&&window.VANTA||{};l.register=(e,t)=>l[e]=i=>new t(i);l.version="0.5.24";const S=function(){return Array.prototype.unshift.call(arguments,"[VANTA]"),console.error.apply(this,arguments)};l.VantaBase=class{constructor(t={}){if(!b)return!1;l.current=this,this.windowMouseMoveWrapper=this.windowMouseMoveWrapper.bind(this),this.windowTouchWrapper=this.windowTouchWrapper.bind(this),this.windowGyroWrapper=this.windowGyroWrapper.bind(this),this.resize=this.resize.bind(this),this.animationLoop=this.animationLoop.bind(this),this.restart=this.restart.bind(this);const i=typeof this.getDefaultOptions=="function"?this.getDefaultOptions():this.defaultOptions;if(this.options=Object.assign({mouseControls:!0,touchControls:!0,gyroControls:!1,minHeight:200,minWidth:200,scale:1,scaleMobile:1},i),(t instanceof HTMLElement||typeof t=="string")&&(t={el:t}),Object.assign(this.options,t),this.options.THREE&&(E=this.options.THREE),this.el=this.options.el,this.el==null)S('Instance needs "el" param!');else if(!(this.options.el instanceof HTMLElement)){const o=this.el;if(this.el=ue(o),!this.el){S("Cannot find element",o);return}}this.prepareEl(),this.initThree(),this.setSize();try{this.init()}catch(o){S("Init error",o),this.renderer&&this.renderer.domElement&&this.el.removeChild(this.renderer.domElement),this.options.backgroundColor&&(console.log("[VANTA] Falling back to backgroundColor"),this.el.style.background=k(this.options.backgroundColor));return}this.initMouse(),this.resize(),this.animationLoop();const s=window.addEventListener;s("resize",this.resize),window.requestAnimationFrame(this.resize),this.options.mouseControls&&(s("scroll",this.windowMouseMoveWrapper),s("mousemove",this.windowMouseMoveWrapper)),this.options.touchControls&&(s("touchstart",this.windowTouchWrapper),s("touchmove",this.windowTouchWrapper)),this.options.gyroControls&&s("deviceorientation",this.windowGyroWrapper)}setOptions(t={}){Object.assign(this.options,t),this.triggerMouseMove()}prepareEl(){let t,i;if(typeof Node<"u"&&Node.TEXT_NODE)for(t=0;t<this.el.childNodes.length;t++){const s=this.el.childNodes[t];if(s.nodeType===Node.TEXT_NODE){const o=document.createElement("span");o.textContent=s.textContent,s.parentElement.insertBefore(o,s),s.remove()}}for(t=0;t<this.el.children.length;t++)i=this.el.children[t],getComputedStyle(i).position==="static"&&(i.style.position="relative"),getComputedStyle(i).zIndex==="auto"&&(i.style.zIndex=1);getComputedStyle(this.el).position==="static"&&(this.el.style.position="relative")}applyCanvasStyles(t,i={}){Object.assign(t.style,{position:"absolute",zIndex:0,top:0,left:0,background:""}),Object.assign(t.style,i),t.classList.add("vanta-canvas")}initThree(){if(!E.WebGLRenderer){console.warn("[VANTA] No THREE defined on window");return}this.renderer=new E.WebGLRenderer({alpha:!0,antialias:!0}),this.el.appendChild(this.renderer.domElement),this.applyCanvasStyles(this.renderer.domElement),isNaN(this.options.backgroundAlpha)&&(this.options.backgroundAlpha=1),this.scene=new E.Scene}getCanvasElement(){if(this.renderer)return this.renderer.domElement;if(this.p5renderer)return this.p5renderer.canvas}getCanvasRect(){const t=this.getCanvasElement();return t?t.getBoundingClientRect():!1}windowMouseMoveWrapper(t){const i=this.getCanvasRect();if(!i)return!1;const s=t.clientX-i.left,o=t.clientY-i.top;s>=0&&o>=0&&s<=i.width&&o<=i.height&&(this.mouseX=s,this.mouseY=o,this.options.mouseEase||this.triggerMouseMove(s,o))}windowTouchWrapper(t){const i=this.getCanvasRect();if(!i)return!1;if(t.touches.length===1){const s=t.touches[0].clientX-i.left,o=t.touches[0].clientY-i.top;s>=0&&o>=0&&s<=i.width&&o<=i.height&&(this.mouseX=s,this.mouseY=o,this.options.mouseEase||this.triggerMouseMove(s,o))}}windowGyroWrapper(t){const i=this.getCanvasRect();if(!i)return!1;const s=Math.round(t.alpha*2)-i.left,o=Math.round(t.beta*2)-i.top;s>=0&&o>=0&&s<=i.width&&o<=i.height&&(this.mouseX=s,this.mouseY=o,this.options.mouseEase||this.triggerMouseMove(s,o))}triggerMouseMove(t,i){t===void 0&&i===void 0&&(this.options.mouseEase?(t=this.mouseEaseX,i=this.mouseEaseY):(t=this.mouseX,i=this.mouseY)),this.uniforms&&(this.uniforms.iMouse.value.x=t/this.scale,this.uniforms.iMouse.value.y=i/this.scale);const s=t/this.width,o=i/this.height;typeof this.onMouseMove=="function"&&this.onMouseMove(s,o)}setSize(){this.scale||(this.scale=1),he()&&this.options.scaleMobile?this.scale=this.options.scaleMobile:this.options.scale&&(this.scale=this.options.scale),this.width=Math.max(this.el.offsetWidth,this.options.minWidth),this.height=Math.max(this.el.offsetHeight,this.options.minHeight)}initMouse(){(!this.mouseX&&!this.mouseY||this.mouseX===this.options.minWidth/2&&this.mouseY===this.options.minHeight/2)&&(this.mouseX=this.width/2,this.mouseY=this.height/2,this.triggerMouseMove(this.mouseX,this.mouseY))}resize(){this.setSize(),this.camera&&(this.camera.aspect=this.width/this.height,typeof this.camera.updateProjectionMatrix=="function"&&this.camera.updateProjectionMatrix()),this.renderer&&(this.renderer.setSize(this.width,this.height),this.renderer.setPixelRatio(window.devicePixelRatio/this.scale)),typeof this.onResize=="function"&&this.onResize()}isOnScreen(){const t=this.el.offsetHeight,i=this.el.getBoundingClientRect(),s=window.pageYOffset||(document.documentElement||document.body.parentNode||document.body).scrollTop,o=i.top+s,n=o-window.innerHeight,r=o+t;return n<=s&&s<=r}animationLoop(){this.t||(this.t=0),this.t2||(this.t2=0);const t=performance.now();if(this.prevNow){let i=(t-this.prevNow)/16.666666666666668;i=Math.max(.2,Math.min(i,5)),this.t+=i,this.t2+=(this.options.speed||1)*i,this.uniforms&&(this.uniforms.iTime.value=this.t2*.016667)}return this.prevNow=t,this.options.mouseEase&&(this.mouseEaseX=this.mouseEaseX||this.mouseX||0,this.mouseEaseY=this.mouseEaseY||this.mouseY||0,Math.abs(this.mouseEaseX-this.mouseX)+Math.abs(this.mouseEaseY-this.mouseY)>.1&&(this.mouseEaseX+=(this.mouseX-this.mouseEaseX)*.05,this.mouseEaseY+=(this.mouseY-this.mouseEaseY)*.05,this.triggerMouseMove(this.mouseEaseX,this.mouseEaseY))),(this.isOnScreen()||this.options.forceAnimate)&&(typeof this.onUpdate=="function"&&this.onUpdate(),this.scene&&this.camera&&(this.renderer.render(this.scene,this.camera),this.renderer.setClearColor(this.options.backgroundColor,this.options.backgroundAlpha)),this.fps&&this.fps.update&&this.fps.update(),typeof this.afterRender=="function"&&this.afterRender()),this.req=window.requestAnimationFrame(this.animationLoop)}restart(){if(this.scene)for(;this.scene.children.length;)this.scene.remove(this.scene.children[0]);typeof this.onRestart=="function"&&this.onRestart(),this.init()}init(){typeof this.onInit=="function"&&this.onInit()}destroy(){typeof this.onDestroy=="function"&&this.onDestroy();const t=window.removeEventListener;t("touchstart",this.windowTouchWrapper),t("touchmove",this.windowTouchWrapper),t("scroll",this.windowMouseMoveWrapper),t("mousemove",this.windowMouseMoveWrapper),t("deviceorientation",this.windowGyroWrapper),t("resize",this.resize),window.cancelAnimationFrame(this.req);const i=this.scene;i&&i.children&&Y(i),this.renderer&&(this.renderer.domElement&&this.el.removeChild(this.renderer.domElement),this.renderer=null,this.scene=null),l.current===this&&(l.current=null)}};const de=l.VantaBase;let R=typeof window=="object"&&window.p5;class fe extends de{constructor(t){R=t.p5||R,super(t),this.mode="p5"}initP5(t){const i=this,s=t.createCanvas(i.width,i.height);s.parent(i.el),i.applyCanvasStyles(t.canvas,{background:k(i.options.backgroundColor)}),i.p5renderer=s,i.p5canvas=t.canvas,i.p5=t}restart(){this.p5&&typeof this.p5=="object"&&this.p5.remove(),super.restart()}destroy(){this.p5&&typeof this.p5=="object"&&this.p5.remove(),super.destroy()}resize(){super.resize(),this.p5&&this.p5.resizeCanvas&&this.p5.resizeCanvas(this.width,this.height)}}let N=typeof window=="object"&&window.p5;class z extends fe{static initClass(){this.prototype.p5=!0,this.prototype.defaultOptions={color:9979487,backgroundColor:2237478,spacing:0,chaos:1}}constructor(t){N=t.p5||N,super(t)}onInit(){const t=this;let i=function(s){let o=20,n=0,r=3,f=.2,g=.12,M=20,H=s.random(1e4),O=s.random(1e4),T=s.random(1e4);s.setup=function(){t.initP5(s),s.strokeWeight(1),s.stroke(k(t.options.color)),s.smooth(),s.noFill()},s.draw=function(){s.clear(),s.translate(s.width/2,s.height/2),q()};function q(){O-=.02,T+=5e-5;for(let h=0;h<o;h++){s.beginShape();for(let m=0;m<360;m++){let v=s.radians(m),u=t.options.chaos*M*F(v,g*h+f,T)+(r*h+n)+(h*t.options.spacing||0);s.vertex(u*s.cos(v),u*s.sin(v))}s.endShape(s.CLOSE)}}function F(h,m,v){let u=h%s.TWO_PI;return u<0&&(u+=s.TWO_PI),s.noise(H+s.cos(u)*m,O+s.sin(u)*m,T+v)}};this.p5=new N(i)}}z.initClass();const me=l.register("TRUNK",z);document.querySelector("body");getComputedStyle(document.documentElement).getPropertyValue("--fogColor1");getComputedStyle(document.documentElement).getPropertyValue("--fogColor3");getComputedStyle(document.documentElement).getPropertyValue("--fogColor5");const P=getComputedStyle(document.documentElement);Object.fromEntries(Object.values(P).filter(e=>e.startsWith("--")).map(e=>[e.replace("--",""),P.getPropertyValue(e)]));me({el:"#trunk",mouseControls:!0,touchControls:!0,gyroControls:!1,minHeight:500,minWidth:500,scale:2,scaleMobile:1,color:6776154,backgroundColor:"transparent",spacing:8,chaos:1});async function pe(e){for(;document.querySelector(e)===null;)await new Promise(t=>requestAnimationFrame(t));return document.querySelector(e)}async function ge(){const e=await pe("#trunk canvas.p5Canvas");navigator.userAgent.toLowerCase().indexOf("firefox")>-1?(document.body.classList.add("firefox"),B(e)):G(e)}async function G(e){console.log("painting");const t=e.toDataURL();document.documentElement.style.setProperty("--image",`url(${t})`),requestAnimationFrame(()=>G(e))}async function B(e){console.log("painting"),e.toBlob(async t=>{const i=URL.createObjectURL(t);document.documentElement.style.setProperty("--image",`url(${i})`),requestAnimationFrame(()=>B(e))})}ge();
