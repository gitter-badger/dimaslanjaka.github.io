function CalculateTR(table){let identifier=table.hasAttribute("id")?table.id:"-";console.log(`Start Calculating Table ${identifier}`);let tr=table.getElementsByTagName("tr");if(tr.length>0)for(i=0;i<tr.length;i++){let td=tr[i].getElementsByTagName("td"),str,thirdTD=void 0!==td[3];thirdTD&&(str=td[3].innerText,console.log(str),/[+\(\)]/gm.test(str)&&(str=str.trim().replaceAll(/x/gm,"*"),td[3].innerText=eval(str)))}}function writeTo(e,t,l,r){"function"==typeof r?t=r(t):"function"==typeof l&&(t=l(t)),l&&"function"!=typeof l||(l="red");let o=document.querySelectorAll(e);for(i=0;i<o.length;i++)o[i].style.backgroundColor=l,"yellow"!=l&&(o[i].style.color="white"),o[i].innerHTML=t.toLocaleString("en-US")}console.clear(),CalculateTR(document.getElementById("char-dish")),CalculateTR(document.getElementById("fairy-dish")),writeTo("[i='hamprice']",149e4,"brown"),writeTo("[i='hamexp']",22e4,"brown"),writeTo("[i='bcprice']",35e3,"yellow"),writeTo("[i='bcexp']",1e4,"yellow"),writeTo("[i='ham-bc']",149e4/35e3,"blue",function(e){return e.toFixed(2)}),writeTo('[i="bctotal"]',425714.2857142857,function(e){return e.toFixed(0)});