function loadJScript(e,t){var n,i,s;i=!1,(n=document.createElement("script")).type="text/javascript",n.src=e,n.onload=n.onreadystatechange=function(){i||this.readyState&&"complete"!=this.readyState||(i=!0,t())},(s=document.getElementsByTagName("script")[0]).parentNode.insertBefore(n,s)}function escapeRegExp(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}const quizUrl="https://dimaslanjaka-cors.herokuapp.com/https://raw.githubusercontent.com/dimaslanjaka/dimaslanjaka.github.io/compiler/source/assets/tlon/Quiz/quiz.txt";let quizSrc=[];function jQueryMethod(){document.getElementById("questions");const e=document.getElementById("search-questions"),t=(document.getElementById("O_only"),function(e){jQuery("ul[id*='questions'] li").each((function(t){const n=jQuery(this).text().search(new RegExp(escapeRegExp(e),"gmi"))<0;jQuery(this).text().search(new RegExp("^"+escapeRegExp(e),"gmi"))<0?jQuery(this).hide():(jQuery(this).show(),jQuery(this).prependTo(jQuery("ul[id*='questions']"))),n?jQuery(this).hide():jQuery(this).show()}))}),n=function(){$("#questions").text(""),$("#questions li").remove();for(let e=0;e<quizSrc.length;e++){let t=quizSrc[e],n=/\(O\)$/i;const i=document.createElement("li");i.innerHTML=t,n.test(t)?i.setAttribute("class","isTrue"):i.setAttribute("class","isFalse"),document.getElementById("questions").appendChild(i)}};$.get(quizUrl).then((function(e){if(e){const t=e.split("\n");quizSrc=quizSrc.concat(t),quizSrc.map((function(e){return e.trim()})),n()}jQuery("#search-questions").keyup((function(){t(jQuery(this).val())}))})),$("#O_only").on("change",(function(i){i.preventDefault(),this.checked?$(".isFalse").remove():n(),e&&e.value&&e.value.trim().length>0&&t(e.value)}))}loadJScript("https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js",jQueryMethod);