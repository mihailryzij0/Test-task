!function(){"use strict";function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}new(function(){function e(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),this.sells=t.querySelectorAll(".colls__item"),this.button=t.querySelector(".button"),this.list=t.querySelector(".informer"),this.game=!1,this.installListeners(),this.iterator=0}var n,i;return n=e,(i=[{key:"initInterval",value:function(){var t=this,e=setInterval((function(){t.iterator===t.sells.length?(t.button.innerText="clear sells",clearInterval(e)):(t.sells[t.iterator].style.transform="scale(1,-1)",t.iterator+=1)}),500)}},{key:"startTransform",value:function(){this.game=!0,this.button.innerText="in progress",this.initInterval()}},{key:"clearField",value:function(){this.game=!1,this.button.innerText="Start",this.sells.forEach((function(t){t.style.transform="scale(1,1)"})),this.iterator=0}},{key:"installListeners",value:function(){var t=this;this.button.addEventListener("click",(function(){!1===t.game?t.startTransform():t.clearField()})),this.sells.forEach((function(e,n){e.addEventListener("transitionend",(function(){t.list.innerHTML+='\n        <li class="informe__item">Cell-'.concat(n+1," animation end</li>\n        "),t.list.scrollTop=t.list.scrollHeight})),e.addEventListener("transitionstart",(function(){t.list.innerHTML+='\n      <li class="informe__item">Cell-'.concat(n+1," animation start</li>\n      "),t.list.scrollTop=t.list.scrollHeight}))}))}}])&&t(n.prototype,i),e}())(document.querySelector("body"))}();