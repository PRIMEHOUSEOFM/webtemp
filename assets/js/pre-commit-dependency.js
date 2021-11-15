"use strict";document.body.classList.add("js");let browser_supports_webp=()=>{var elem=document.createElement("canvas");if(!!(elem.getContext&&elem.getContext("2d"))){return elem.toDataURL("image/webp").indexOf("data:image/webp")==0}else{return false}};if(browser_supports_webp()){document.body.classList.remove("webp--disabled");document.body.classList.add("webp--enabled")}if("serviceWorker"in navigator){navigator.serviceWorker.register("/finished-starter/service-worker.js")}if(Element.prototype.closest){const eventTypes=["animationcancel","animationend","animationiteration","animationstart","blur","canplay","canplaythrough","change","click","compositionend","compositionstart","compositionupdate","contextmenu","dblclick","drag","dragend","dragenter","dragleave","dragover","dragstart","drop","durationchange","emptied","ended","focus","focusin","focusout","fullscreenchange","fullscreenerror","gotpointercapture","input","loadeddata","loadedmetadata","lostpointercapture","mousedown","mouseenter","mouseleave","mousemove","mouseout","mouseover","mouseup","pause","play","playing","pointercancel","pointerdown","pointerenter","pointerleave","pointermove","pointerout","pointerover","pointerup","ratechange","reset","seeked","seeking","show","slotchange","stalled","submit","suspend","SVGAbort","SVGError","SVGLoad","SVGResize","SVGScroll","SVGUnload","SVGZoom","timeupdate","touchcancel","touchend","touchmove","touchstart","transitionend","unload","volumechange","waiting"];eventTypes.forEach(eventType=>{document.addEventListener(eventType,(function(event){if(event.target!==document&&event.target.closest(".js--event--"+eventType)){let elem=event.target.closest(".js--event--"+eventType);const eventTypeCamel=eventType.charAt(0).toUpperCase()+eventType.slice(1).toLowerCase();elem.classList.add("js--event--"+eventType+"--once");if(elem.dataset["jsEvent"+eventTypeCamel+"Count"]){elem.dataset["jsEvent"+eventTypeCamel+"Count"]++}else{elem.dataset["jsEvent"+eventTypeCamel+"Count"]=1}elem.classList.toggle("js--event--"+eventType+"--toggle")}}),false)})}let scrollY=window.scrollY;var scrollClasses=function(e){if(window.scrollY>scrollY){document.body.classList.add("body-scroll--down");document.body.classList.remove("body-scroll--up")}else if(window.scrollY<scrollY){document.body.classList.add("body-scroll--up");document.body.classList.remove("body-scroll--down")}if(window.scrollY===0){document.body.classList.add("body-scroll--top")}else{document.body.classList.remove("body-scroll--top")}scrollY=window.scrollY};var debounce=function(fn,wait){var time=Date.now();return function(e){if(time+wait-Date.now()<0){fn(e);time=Date.now()}}};window.addEventListener("scroll",debounce(scrollClasses,20),{passive:true});let mutationCallbackRegistry=[];if("MutationObserver"in window){var mutationObserver=new MutationObserver((function(mutations){mutations.forEach((function(mutation){if(mutation.target!==document.body&&mutationCallbackRegistry.length){mutationCallbackRegistry.forEach(registrant=>{if(mutation.type&&(mutation.type==="attributes"||mutation.type==="childList")){let elems=[];if(mutation.type==="childList"){elems=mutation.target.querySelectorAll("."+registrant.jsClass+":not(."+registrant.jsClass+"--initialized)")}else if(mutation.type==="attributes"){if(mutation.target.classList.contains(registrant.jsClass)&&!mutation.target.classList.contains(registrant.jsClass+"--initialized")){elems.push(mutation.target)}}if(elems.length){Array.prototype.forEach.call(elems,elem=>{elem.classList.add(registrant.jsClass+"--initialized");window[registrant.initializationFunction].apply(elem,[mutation.type])})}}})}}))}));mutationObserver.observe(document.body,{attributes:true,characterData:true,childList:true,subtree:true,attributeOldValue:false,characterDataOldValue:false})}var utilityInitializer=function(jsClass,initializationFunction){const startElements=document.querySelectorAll("."+jsClass);if(startElements.length){Array.prototype.forEach.call(startElements,elem=>{if(!elem.classList.contains(jsClass+"--initialized")){elem.classList.add(jsClass+"--initialized");window[initializationFunction].apply(elem,["load"])}})}mutationCallbackRegistry.push({jsClass:jsClass,initializationFunction:initializationFunction})};document.addEventListener("click",(function(event){if(event.target!==document&&event.target.closest(".docblock")&&event.target.closest(".docblock--classes--class")){const checkbox=event.target.closest(".docblock--classes--class");if(checkbox.checked){checkbox.closest(".docblock").querySelector(".docblock--example").firstElementChild.classList.add(checkbox.value)}else{checkbox.closest(".docblock").querySelector(".docblock--example").firstElementChild.classList.remove(checkbox.value)}}}),false);const allAnchors=document.querySelectorAll("a");if(allAnchors.length){Array.prototype.forEach.call(allAnchors,thisAnchor=>{if(thisAnchor.href.length&&thisAnchor.hostname!==window.location.hostname&&thisAnchor.href.substring(0,6)!=="mailto"&&thisAnchor.href.substring(0,3)!=="tel"&&thisAnchor.href.substring(0,1)!=="#"){thisAnchor.setAttribute("target","_blank");thisAnchor.setAttribute("rel","external noopener noreferrer")}})}var swapPictureSrc=function(elem){const dataSrc=elem.querySelectorAll("[data-src],[data-srcset]");Array.prototype.forEach.call(dataSrc,thisSrc=>{if(thisSrc.dataset.src){thisSrc.src=thisSrc.dataset.src;delete thisSrc.dataset.src}else{thisSrc.srcset=thisSrc.dataset.srcset;delete thisSrc.dataset.srcset}});elem.classList.add("picture--lazy-load--loaded")};if("IntersectionObserver"in window){document.body.classList.add("js--animation");let animationObserver=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.intersectionRatio>=0&&entry.target.classList.contains("picture--lazy-load")){swapPictureSrc(entry.target);animationObserver.unobserve(entry.target)}else if(entry.intersectionRatio>=.5){entry.target.classList.add("js--animation--observed");animationObserver.unobserve(entry.target)}})},{threshold:.5});var animationInitializationFunction=function(initType){animationObserver.observe(this)};utilityInitializer("js--to-animate","animationInitializationFunction");window.addEventListener("load",event=>{utilityInitializer("picture--lazy-load","animationInitializationFunction")})}else{const pictureLazyLoad=elem.querySelectorAll(".picture--lazy-load");Array.prototype.forEach.call(pictureLazyLoad,thisPic=>{swapPictureSrc(thisPic)})}var childLinkInitializationFunction=function(initType){const thisLink=this.querySelector("a[href]");if(thisLink&&thisLink.href&&thisLink.href.length>=1){this.classList.add("card--hover","cursor--pointer")}};utilityInitializer("js--child--link","childLinkInitializationFunction");let childLinkDown,childLinkUp;document.addEventListener("mousedown",event=>{childLinkDown=+new Date},false);document.addEventListener("mouseup",(function(event){if(event.target!==document&&event.target.closest(".js--child--link")){childLinkUp=+new Date;if(childLinkUp-childLinkDown<200){event.target.closest(".js--child--link").querySelector("a[href]").click()}}}),false);var dismissibleInitializationFunction=function(initType){if(this.hasAttribute("id")){let storedInfo=localStorage.getItem("js--dismissible--"+this.getAttribute("id"));if(storedInfo==="hidden"){this.classList.add("display--none");this.parentNode.removeChild(this)}}const dismissButton=` <button type="button" class="js--dismissible--close" aria-label="Close"> <span aria-hidden="true">&times;</span> </button> `;if(window.getComputedStyle(this).getPropertyValue("position")==="static"){this.classList.add("position--relative")}this.insertAdjacentHTML("afterBegin",dismissButton)};utilityInitializer("js--dismissible","dismissibleInitializationFunction");document.addEventListener("click",(function(event){if(event.target!==document&&event.target.closest(".js--dismissible--close")&&event.target.closest(".js--dismissible")){let dismissible=event.target.closest(".js--dismissible");dismissible.classList.add("display--none","js--dismissible--closed");dismissible.parentNode.removeChild(dismissible);if(dismissible.hasAttribute("id")){localStorage.setItem("js--dismissible--"+dismissible.getAttribute("id"),"hidden")}}}),false);const shareToNativeButton=` <button type="button" class="js--share-to-native fab position--fixed bottom--0 color--grey right--0 font-size--2em margin-horizontal--4 margin-vertical--4 z-index--3" aria-label="Share this page"> <figure class="figure figure--icon"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 54 54"> <path fill-rule="evenodd" d="M46 35v9c0 2-1 5-3 7l-6 2H9l-7-2c-2-2-2-5-2-7V16c0-2 0-5 2-6 2-2 4-3 7-3h9v1l-1 1-4 2H9l-4 2-1 3v28l1 4 4 1h28l3-1 2-4v-8l2-1 1-1zm8-16L41 32h-2l-1-2v-6h-6c-7 0-12 1-14 4-3 3-4 8-3 16v1h-1l-1-1v-1l-2-2-1-3a24 24 0 01-2-8v-3l1-3a12 12 0 012-6l2-2 3-2 5-2 5-1h12V5l1-2 1-1 1 1 13 13z"/> </svg> </figure> </button> `;if("share"in navigator){const shareToNative=async function(shareUrl,shareTitle,shareText,shareImgUrl){let share={url:shareUrl,title:shareTitle,text:shareText};if(shareImgUrl){const shareFileName=shareImgUrl.substr(shareImgUrl.lastIndexOf("/")+1);let fetchImgUrl=shareImgUrl;if(fetchImgUrl.indexOf(window.location.hostname)!==-1){fetchImgUrl=fetchImgUrl.substr(fetchImgUrl.indexOf(window.location.origin)+window.location.origin.length)}try{const response=await fetch(fetchImgUrl);const blob=await response.blob();const file=new File([blob],shareFileName,{type:blob.type});share.files=[file]}catch(err){console.log(err.name,err.message)}}await navigator.share(share)};document.body.insertAdjacentHTML("beforeEnd",shareToNativeButton);document.addEventListener("click",(function(event){if(event.target!==document&&event.target.closest(".js--share-to-native")){shareToNative(window.location.href,document.title,document.querySelector('[property="og:description"]').getAttribute("content"))}}),false)}var togglebelowInitializationFunction=function(initType){let ariaExpanded=this.getAttribute("aria-expanded");if(!ariaExpanded||ariaExpanded!=="true"&&ariaExpanded!=="false"){this.setAttribute("aria-expanded","false");ariaExpanded="false"}if(ariaExpanded==="true"){this.querySelector(".js--toggle-below--label").textContent="Close below";this.nextElementSibling.classList.add("js--toggle-below--open");this.nextElementSibling.classList.remove("js--toggle-below--closed")}else{this.querySelector(".js--toggle-below--label").textContent="Open below";this.nextElementSibling.classList.add("js--toggle-below--closed");this.nextElementSibling.classList.remove("js--toggle-below--open")}};utilityInitializer("js--toggle-below","togglebelowInitializationFunction");document.addEventListener("click",(function(event){let toggleBelow,ariaExpanded;if(event.target!==document&&event.target.closest(".js--toggle-below")){toggleBelow=event.target.closest(".js--toggle-below");ariaExpanded=toggleBelow.getAttribute("aria-expanded");if(!ariaExpanded||ariaExpanded==="false"){toggleBelow.querySelector(".js--toggle-below--label").textContent="Close below";ariaExpanded="true"}else{toggleBelow.querySelector(".js--toggle-below--label").textContent="Open below";ariaExpanded="false"}toggleBelow.setAttribute("aria-expanded",ariaExpanded);if(ariaExpanded==="true"){toggleBelow.nextElementSibling.classList.add("js--toggle-below--open");toggleBelow.nextElementSibling.classList.remove("js--toggle-below--closed");if(toggleBelow.nextElementSibling.querySelector("input")){toggleBelow.nextElementSibling.querySelector("input").focus()}}else{toggleBelow.nextElementSibling.classList.add("js--toggle-below--closed");toggleBelow.nextElementSibling.classList.remove("js--toggle-below--open")}}}),false);var youtubeInitializationFunction=function(initType){console.log({message:"YouTube video initialized",element:this})};utilityInitializer("js--youtube","youtubeInitializationFunction");var stringToHTML=function(str){var parser=new DOMParser;var doc=parser.parseFromString(str,"text/html");return doc.body};document.addEventListener("click",(function(event){if(event.target!==document&&event.target.closest(".js--youtube")){event.preventDefault();let thisVid=event.target.closest(".js--youtube");const vidId=thisVid.dataset["youtube"];const vidIframe=`<iframe width="960" height="480" src="https://www.youtube.com/embed/${vidId}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>`;const iframeNode=stringToHTML(vidIframe);thisVid.parentNode.replaceChild(iframeNode,thisVid)}}),false);document.addEventListener("click",(function(event){if(event.target!==document&&event.target.closest(".js--hamburger")){let burger=event.target.closest(".js--hamburger");const burgerTarget=burger.getAttribute("aria-controls");burger.classList.toggle("is-active");document.querySelector("#"+burgerTarget).classList.toggle("open");document.body.classList.toggle("mobile--tray--open");let expanded=burger.getAttribute("aria-expanded")==="true"||false;burger.setAttribute("aria-expanded",!expanded)}}),false);var twitterTweetInitializationFunction=function(initType){if(!document.body.classList.contains("twitter-tweet--script-attached")){var script=document.createElement("script");script.src="https://platform.twitter.com/widgets.js";document.body.insertAdjacentElement("beforeend",script);document.body.classList.add("twitter-tweet--script-attached")}if(typeof twttr!=="undefined"&&typeof twttr.widgets.load==="function"){twttr.widgets.load()}};utilityInitializer("twitter-tweet","twitterTweetInitializationFunction");const copyaboveAttrRegex=/^(.*)[:]{1,}([0-9]{1,})$/;var copyaboveInitializationFunction=function(initType){this.classList.add("js--event--click")};utilityInitializer("js--copy-above","copyaboveInitializationFunction");var copyaboveTraverse=function(elem,depth){depth=typeof depth==="number"?depth+1:1;const colons=new Array(depth+1).join(":");Array.prototype.forEach.call(["aria-controls","aria-describedby","aria-details","aria-errormessage","aria-labelledby","aria-owns","for","id","itemid","name"],thisAttr=>{if(elem.hasAttribute(thisAttr)){const attrValue=elem.getAttribute(thisAttr);const attrMatch=attrValue.match(copyaboveAttrRegex);if(!attrMatch||!attrMatch[2]){elem.setAttribute(thisAttr,attrValue+colons+2)}else{elem.setAttribute(thisAttr,attrMatch[1]+colons+(parseInt(attrMatch[2])+1))}}});if(elem.children.length){Array.prototype.forEach.call(elem.children,childElement=>{copyaboveTraverse(childElement,depth)})}};document.addEventListener("click",(function(event){if(event.target!==document&&event.target.closest(".js--copy-above")){let copyabove=event.target.closest(".js--copy-above");let aboveElem=copyabove.previousElementSibling.cloneNode(true);aboveElem.classList.add("js--dismissible");copyaboveTraverse(aboveElem);copyabove.insertAdjacentElement("beforeBegin",aboveElem)}}),false);