window.addEventListener("load",(function(){var e;(e=document.getElementById("page-header"))&&document.addEventListener("scroll",(function(){var n=window.pageYOffset||document.body.scrollTop||document.documentElement.scrollTop;e.classList[n>30?"add":"remove"]("page__header--small")})),function(){var e=document.querySelector("button.page__menu-btn"),n=document.querySelector("nav.page__nav");if(e&&n){var t=new Pack(n);t.base("js-open").transfrom("page__nav--open"),e.addEventListener("click",(function(){t.toggle()}))}}(),function(){var e=document.getElementById("page-header");if(e){var n=e.querySelector(".info__title"),t=e.querySelector(".info__desc");n&&new Pack(n).animation("js-animation").end((function(){["js-animation"].forEach((function(e){n.classList.remove(e)}))})).toggle(),t&&new Pack(t).base("js-ease-out-leave-active").base("js-ease-out-leave").transfrom("js-ease-out-enter-active").end((function(){["js-ease-out-enter","js-ease-out-enter-active","js-ease-out-leave","js-ease-out-leave-active"].forEach((function(e){t.classList.remove(e)}))})).toggle()}}()}));