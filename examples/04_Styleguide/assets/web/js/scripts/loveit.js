var Wall=function(){var i=function(){setTimeout(function(){$(".wall-intro").addClass("expanded")},1e3),t(),e(),n()},t=function(){$('a[rel^="configurator"]').bind("click",r),$('a[rel^="split-screen"]').bind("click",s),$("a.splitscreen--close").bind("click",o),$(window).bind("resize",$.throttle(1e3,c)),$(window).bind("scroll",$.throttle(300,d))},e=function(){$(".loveit-wall").isotope({itemSelector:".loveit-tile",layoutMode:"masonry"}),$(".loveit-wall").infinitescroll({navSelector:"#infscr-next:last",nextSelector:"a#infscr-next:last",itemSelector:".loveit-wall .loveit-tile",debug:!0,loading:{finishedMsg:'<div class="vertical-positioned text-center"><div class="vertical-center"><div class="button button-solid button-solid-blue-light"><span>Du hast das Ende der Love-it Wall erreicht</span></div></div></div>',img:null,msg:null,msgText:'<div class="vertical-positioned text-center"><div class="vertical-center"><div class="button button-solid button-solid-blue-light loading"><i class="icon"><span>a</span></i><span>Loading</span></div></div></div>',selector:null,speed:1,start:void 0}},function(i){return $(".loveit-wall").isotope("appended",i),$(".loveit-wall").isotope("appended",$('.loveit-wall [data-loveit-filter="*"]')),$(window).trigger("scroll"),$('a[rel^="configurator"]').bind("click",r),$('a[rel^="split-screen"]').bind("click",s),$("[data-loveit-filter]").bind("click",a),!1}),$("a#infscr-next").click(function(){return $(".loveit-wall").infinitescroll("retrieve"),!1}),$(".loveit-configurator").loveitConfigurator(),$("[data-loveit-filter]").bind("click",a)},n=function(){{var i=$(window).scrollTop();i+$(window).height()}},l=function(i){$(".configurator-split-screen").addClass("hidden"),$("html,body").animate({scrollTop:0},600),setTimeout(function(){$("."+i).removeClass("hidden")},600),setTimeout(function(){$(window).trigger("resize")},1400)},o=function(){$(".configurator-split-screen").addClass("hidden")},s=function(){return $("html,body").animate({scrollTop:0},600),$(".site-intro").removeClass("expanded"),setTimeout(function(){$(".configurator-split-screen").removeClass("hidden")},600),!1},r=function(){return l($(this).attr("rel")),!1},a=function(){var i=$(this).data("loveitFilter");return console.info("filter: "+i),$(".loveit-wall").isotope({filter:i}),$(".site-intro").removeClass("expanded"),"*"!=i&&$(".site-intro"+i).addClass("expanded"),$("html,body").animate({scrollTop:0},500),!1},c=function(){$(".tile--text").each(function(){var i=$(this).css("maxWidth");if("none"!=i){var t=50;$(this).css("fontSize",t);var e=$(this).outerWidth();for($(this).css("maxWidth","");t>0&&(t-=.5,$(this).css("fontSize",t),!($(this).outerWidth()<e)););$(this).css("maxWidth",i)}}),n()},d=function(){n()};return{init:i}}();$(Wall.init);