define(["jquery"],function(r,a){return function(e,a){var n,t,i=r(a);"video"===(i="contained"===i.data("appearance")?r(a).find('[data-element="inner"]'):i).data("background-type")?require(["Magento_PageBuilder/js/widget/video-background"],function(a){a(e,i[0])}):1===i.data("enableParallax")&&require(["jarallax"],function(){i.addClass("jarallax"),i.attr("data-jarallax",""),n=parseFloat(i.data("parallaxSpeed")),t=window.getComputedStyle(i[0]),window.jarallax(i[0],{imgPosition:t.backgroundPosition||"50% 50%",imgRepeat:t.backgroundRepeat||"no-repeat",imgSize:t.backgroundSize||"cover",speed:isNaN(n)?.5:n})})}});