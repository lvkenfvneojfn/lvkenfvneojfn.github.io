!function(e){function o(e,o){l++,d=l/c,TweenLite.to(g,.7,{progress:d,ease:Linear.easeNone})}function t(){d=Math.round(100*g.progress()),e(".txt-perc").text(d+"%")}function a(){var o=new TimelineMax;return o.to(e(".progress"),.3,{y:100,autoAlpha:0,ease:Back.easeIn}).to(e(".txt-perc"),.3,{y:100,autoAlpha:0,ease:Back.easeIn},.1).set(e("body"),{className:"-=is-loading"}).set(e("#intro"),{className:"+=is-loaded"}).to(e("#preloader"),.7,{yPercent:100,ease:Power4.easeInOut}).set(e("#preloader"),{className:"+=is-hidden"}).from(e("#intro .title"),1,{autoAlpha:0,ease:Power1.easeOut},"-=0.2").from(e("#intro p"),.7,{autoAlpha:0,ease:Power1.easeOut},"+=0.2").from(e(".scroll-hint"),.3,{y:-20,autoAlpha:0,ease:Power1.easeOut},"+=0.1"),o}
var r=new ScrollMagic.Controller,
n=["#slide01","#slide02","#slide03","#slide04","#slide05","#slide06","#slide07","#slide08","#slide09","#slide010"],
s=["#slide01 header","#slide02 header","#slide03 header","#slide04 header","#slide05 header","#slide06 header","#slide07 header","#slide08 header","#slide09 header","#slide010 header"],
i=["#cb01","#cb02","#cb03","#cb04", "#cb05","#cb06","#cb07","#cb08","#cb09","#cb010"],
l=0,
c=e(".bcg").length,d=0;
e(".bcg").imagesLoaded({background:!0}).progress(function(e,t){o()});var g=new TimelineMax({paused:!0,onUpdate:t,onComplete:a});
if(g.to(e(".progress span"),1,{width:100,ease:Linear.easeNone}),!Modernizr.touch){
    n.forEach(function(e,o){{
        var t=o+1;
        new ScrollMagic.Scene({triggerElement:o,triggerHook:1,reverse:true,duration:"100%"}).setTween(TweenMax.from(a,1,{y:"-40%",autoAlpha:.3,ease:Power0.easeNone})).addTo(r)}});
        var u=new TimelineMax;u.to(e("#intro header, .scroll-hint"),.2,{autoAlpha:0,ease:Power1.easeNone}).to(e("#intro"),.7,{autoAlpha:.5,ease:Power1.easeNone},0);
        {new ScrollMagic.Scene({triggerElement:"#intro",triggerHook:0,reverse:true,duration:"100%"}).setTween(u).addTo(r)}r.scrollTo(function(e){TweenMax.to(window,1,{scrollTo:{y:e},ease:Power1.easeInOut})}),e(document).on("click","a[href^='#']",function(o){var t=e(this).attr("href");e(t).length>0&&(o.preventDefault(),r.scrollTo(t),window.history&&window.history.pushState&&history.pushState("",document.title,t))})}}(jQuery);