if(console.clear(),"cdpn.io"==location.host){function rangeAlphabetic(e,t){for(var n=[],r=e.charCodeAt(0),i=t.charCodeAt(0);r<=i;++r)n.push(String.fromCharCode(r));return n}let e=rangeAlphabetic("a","z").concat(rangeAlphabetic("A","Z")).filter((function(e){return null!=e}));setTimeout((function(){let t=document.getElementById("search-questions");var n=e[Math.floor(Math.random()*e.length)];t.value=n,t.dispatchEvent(new Event("keyup"))}),3e3)}function loadJScript(e,t){var n,r,i;r=!1,(n=document.createElement("script")).type="text/javascript",n.src=e,n.onload=n.onreadystatechange=function(){r||this.readyState&&"complete"!=this.readyState||(r=!0,t())},(i=document.getElementsByTagName("script")[0]).parentNode.insertBefore(n,i)}function uniqArr(e){var t={};return e.filter((function(e){return!t.hasOwnProperty(e)&&(t[e]=!0)}))}function escapeRegExp(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}let quizUrls=["https://dimaslanjaka-cors.herokuapp.com/https://raw.githubusercontent.com/dimaslanjaka/dimaslanjaka.github.io/compiler/source/assets/tlon/Quiz/quiz.txt","https://dimaslanjaka-cors.herokuapp.com/http://backend.webmanajemen.com/tlon/quiz.txt"],quizSrc=[];function jQueryMethod(){document.getElementById("questions");let e=document.getElementById("search-questions"),t=(document.getElementById("O_only"),function(e){jQuery("ul[id*='questions'] li").each((function(t){jQuery(this).text().search(new RegExp("^"+escapeRegExp(e),"gmi"))<0?jQuery(this).hide():(jQuery(this).show(),jQuery(this).prependTo(jQuery("ul[id*='questions']"))),jQuery(this).text().search(new RegExp(escapeRegExp(e),"gmi"))<0?jQuery(this).hide():jQuery(this).show()}))}),n=function(){$("#questions").text(""),$("#questions li").remove();for(let e=0;e<quizSrc.length;e++){let t=quizSrc[e],n=/\(O\)$/i,r=document.createElement("li");r.innerHTML=t,n.test(t)?r.setAttribute("class","isTrue"):r.setAttribute("class","isFalse"),document.getElementById("questions").appendChild(r)}};quizUrls.forEach((function(e){let r=new URL(e);r.search="?uid=1",$.get(r.toString()).then((function(e){if(e){let t=e.split("\n");quizSrc=uniqArr((quizSrc=quizSrc.map((function(e){return e.trim()}))).concat(t).map((function(e){return e.trim()}))),n()}jQuery("#search-questions").keyup((function(){t(jQuery(this).val())}))}))})),$("#O_only").on("change",(function(r){r.preventDefault(),this.checked?$(".isFalse").remove():n(),e&&e.value&&e.value.trim().length>0&&t(e.value)}))}function parse_query_url(e){if(!e)throw"Please provide url";var t=e.substr(1),n={};return t.split("&").forEach((function(e){var t=e.split("=");n[t[0]]=decodeURIComponent(t[1])})),n}function parse_url(e){let t=new URL(e);return t.search=parse_query_url(t.search),t}loadJScript("https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js",jQueryMethod);