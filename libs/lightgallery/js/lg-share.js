/**!
 * lg-share.js | 0.0.1 | August 1st 2016
 * http://sachinchoolur.github.io/lg-share.js
 * Copyright (c) 2016 Sachin N; 
 * @license Apache 2.0 
 */
!function(t){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).LgShare=t()}}((function(){return function e(t,o,r){function s(i,l){if(!o[i]){if(!t[i]){var a="function"==typeof require&&require;if(!l&&a)return a(i,!0);if(n)return n(i,!0);var d=new Error("Cannot find module '"+i+"'");throw d.code="MODULE_NOT_FOUND",d}var c=o[i]={exports:{}};t[i][0].call(c.exports,(function(o){var r=t[i][1][o];return s(r||o)}),c,c.exports,e,t,o,r)}return o[i].exports}for(var n="function"==typeof require&&require,i=0;i<r.length;i++)s(r[i]);return s}({1:[function(t,o,r){!function(t,o){if(void 0!==r)o();else{o(),t.lgShare={}}}(this,(function(){"use strict";var t=Object.assign||function(t){for(var o=1;o<arguments.length;o++){var r=arguments[o];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},o={share:!0,facebook:!0,facebookDropdownText:"Facebook",twitter:!0,twitterDropdownText:"Twitter",googlePlus:!0,googlePlusDropdownText:"GooglePlus",pinterest:!0,pinterestDropdownText:"Pinterest"},Share=function(r){return this.el=r,this.core=window.lgData[this.el.getAttribute("lg-uid")],this.core.s=t({},o,this.core.s),this.core.s.share&&this.init(),this};Share.prototype.init=function(){var t=this,o='<span id="lg-share" class="lg-icon"><ul class="lg-dropdown" style="position: absolute;">';o+=t.core.s.facebook?'<li><a id="lg-share-facebook" target="_blank"><span class="lg-icon"></span><span class="lg-dropdown-text">'+this.core.s.facebookDropdownText+"</span></a></li>":"",o+=t.core.s.twitter?'<li><a id="lg-share-twitter" target="_blank"><span class="lg-icon"></span><span class="lg-dropdown-text">'+this.core.s.twitterDropdownText+"</span></a></li>":"",o+=t.core.s.googlePlus?'<li><a id="lg-share-googleplus" target="_blank"><span class="lg-icon"></span><span class="lg-dropdown-text">'+this.core.s.googlePlusDropdownText+"</span></a></li>":"",o+=t.core.s.pinterest?'<li><a id="lg-share-pinterest" target="_blank"><span class="lg-icon"></span><span class="lg-dropdown-text">'+this.core.s.pinterestDropdownText+"</span></a></li>":"",o+="</ul></span>",this.core.outer.querySelector(".lg-toolbar").insertAdjacentHTML("beforeend",o),this.core.outer.querySelector(".lg").insertAdjacentHTML("beforeend",'<div id="lg-dropdown-overlay"></div>'),utils.on(document.getElementById("lg-share"),"click.lg",(function(){utils.hasClass(t.core.outer,"lg-dropdown-active")?utils.removeClass(t.core.outer,"lg-dropdown-active"):utils.addClass(t.core.outer,"lg-dropdown-active")})),utils.on(document.getElementById("lg-dropdown-overlay"),"click.lg",(function(){utils.removeClass(t.core.outer,"lg-dropdown-active")})),utils.on(t.core.el,"onAfterSlide.lgtm",(function(o){setTimeout((function(){document.getElementById("lg-share-facebook").setAttribute("href","https://www.facebook.com/sharer/sharer.php?u="+encodeURIComponent(t.core.items[o.detail.index].getAttribute("data-facebook-share-url")||window.location.href)),document.getElementById("lg-share-twitter").setAttribute("href","https://twitter.com/intent/tweet?text="+t.core.items[o.detail.index].getAttribute("data-tweet-text")+"&url="+encodeURIComponent(t.core.items[o.detail.index].getAttribute("data-twitter-share-url")||window.location.href)),document.getElementById("lg-share-googleplus").setAttribute("href","https://plus.google.com/share?url="+encodeURIComponent(t.core.items[o.detail.index].getAttribute("data-googleplus-share-url")||window.location.href)),document.getElementById("lg-share-pinterest").setAttribute("href","http://www.pinterest.com/pin/create/button/?url="+encodeURIComponent(t.core.items[o.detail.index].getAttribute("data-pinterest-share-url")||window.location.href)+"&media="+encodeURIComponent(t.core.items[o.detail.index].getAttribute("href")||t.core.items[o.detail.index].getAttribute("data-src"))+"&description="+t.core.items[o.detail.index].getAttribute("data-pinterest-text"))}),100)}))},Share.prototype.destroy=function(){},window.lgModules.share=Share}))},{}]},{},[1])(1)}));