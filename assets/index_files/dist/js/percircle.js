!function(t){"use strict";"function"==typeof define&&define.amd?define(["jquery"],t):"object"==typeof exports&&"object"==typeof module?module.exports=t(require("jquery")):t(jQuery)}(function(t,e){"use strict";t.fn.percircle=function(e){var a={animate:!0};e||(e={}),t.extend(e,a);var s=3.6;return this.each(function(){function a(){p-=1,o.html("<span>"+p+"</span>"),t('<div class="slice"><div class="bar" '+n+'></div><div class="fill" '+n+"></div></div>").appendTo(o),0===p&&o.removeClass("gt50"),p>30&&o.addClass("gt50"),p<30&&o.removeClass("gt50");var e=6*p;if(t(".bar",o).css({"-webkit-transform":"rotate("+e+"deg)","-moz-transform":"rotate("+e+"deg)","-ms-transform":"rotate("+e+"deg)","-o-transform":"rotate("+e+"deg)",transform:"rotate("+e+"deg)"}),p<=0)return clearInterval(v),void o.html("<span>"+g+"</span>")}var o=t(this),n="",d=function(t,e){o.on("mouseover",function(){t.children("span").css("color",e)}),o.on("mouseleave",function(){t.children("span").attr("style","")})};o.hasClass("percircle")||o.addClass("percircle"),"undefined"!=typeof o.attr("data-animate")&&(e.animate="true"==o.attr("data-animate")),e.animate&&o.addClass("animate"),"undefined"!=typeof o.attr("data-color")?(e.progressBarColor=o.attr("data-color"),n="style='border-color: "+e.progressBarColor+"'",d(t(this),e.progressBarColor)):"undefined"!=typeof e.progressBarColor&&(n="style='border-color: "+e.progressBarColor+"'",d(t(this),e.progressBarColor));var i=o.attr("data-percent")||e.percent||0,l=o.attr("data-perclock")||e.perclock||0,c=o.attr("data-perdown")||e.perdown||0;if(i){i>50&&o.addClass("gt50");var f=o.attr("data-text")||e.text||i+"%";t("<span>"+f+"</span>").appendTo(o),t('<div class="slice"><div class="bar" '+n+'></div><div class="fill" '+n+"></div></div>").appendTo(o),i>50&&t(".bar",o).css({"-webkit-transform":"rotate(180deg)","-moz-transform":"rotate(180deg)","-ms-transform":"rotate(180deg)","-o-transform":"rotate(180deg)",transform:"rotate(180deg)"});var m=s*i;setTimeout(function(){t(".bar",o).css({"-webkit-transform":"rotate("+m+"deg)","-moz-transform":"rotate("+m+"deg)","-ms-transform":"rotate("+m+"deg)","-o-transform":"rotate("+m+"deg)",transform:"rotate("+m+"deg)"})},0)}else if(l)o.hasClass("perclock")||o.addClass("perclock"),setInterval(function(){var e=new Date,a=r(e.getHours())+":"+r(e.getMinutes())+":"+r(e.getSeconds());o.html("<span>"+a+"</span>"),t('<div class="slice"><div class="bar" '+n+'></div><div class="fill" '+n+"></div></div>").appendTo(o);var s=e.getSeconds();0===s&&o.removeClass("gt50"),s>30&&(o.addClass("gt50"),t(".bar",o).css({"-webkit-transform":"rotate(180deg);scale(1,3)","-moz-transform":"rotate(180deg);scale(1,3)","-ms-transform":"rotate(180deg);scale(1,3)","-o-transform":"rotate(180deg);scale(1,3)",transform:"rotate(180deg);scale(1,3)"}));var d=6*s;t(".bar",o).css({"-webkit-transform":"rotate("+d+"deg)","-moz-transform":"rotate("+d+"deg)","-ms-transform":"rotate("+d+"deg)","-o-transform":"rotate("+d+"deg)",transform:"rotate("+d+"deg)"})},1e3);else if(c){var p=o.attr("data-secs")||e.secs,g=o.attr("data-timeUpText")||e.timeUpText;g.length>8&&(g="the end");var v=setInterval(a,1e3)}})};var r=function(t){return t<10?"0"+t:t}});