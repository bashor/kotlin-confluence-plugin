AJS.menuShowCount=0;jQuery.fn.ajsMenu=function(a){a=a||{};var b=jQuery;var d=null;var c=function(f){if(typeof AJS.dropDownTimer!="undefined"&&AJS.dropDownHider){clearTimeout(AJS.dropDownTimer);delete AJS.dropDownTimer;AJS.dropDownHider();AJS.dropDownHider=null}};b(".ajs-button",this).each(function(){b(this).mouseover(c)});b(".ajs-menu-item",this).each(function(){var g=this,e=b(this),k=b(".ajs-drop-down",g);if(!k.length){return}k=k[0];k.hidden=true;k.focused=-1;k.hide=function(){if(!this.hidden){e.toggleClass("opened");b(g.parentNode).toggleClass("menu-bar-open");var n=b("a",this);b(this).toggleClass("assistive");this.hidden=true;b(document).unbind("click",this.fhide).unbind("keydown",this.fmovefocus).unbind("keypress",this.blocker);if(this.focused+1){b(n[this.focused]).removeClass("active")}this.focused=-1}};k.show=function(){if(typeof this.hidden=="undefined"||this.hidden){var n=this,r=b(this);r.toggleClass("assistive");e.toggleClass("opened");b(g.parentNode).toggleClass("menu-bar-open");this.hidden=false;this.timer=setTimeout(function(){b(document).click(n.fhide)},1);b(document).keydown(n.fmovefocus).keypress(n.blocker);var o=b("a",n);o.each(function(t){var s=this.parentNode.parentNode;b(this).hover(function(u){if(s.focused+1){b(o[s.focused].parentNode).removeClass("active")}b(this.parentNode).addClass("active");s.focused=t},function(u){if(s.focused+1){b(o[s.focused].parentNode).removeClass("active")}s.focused=-1})});var q=(window.pageYOffset||document.documentElement.scrollTop);var p=q+b(window).height();r.removeClass("above");if(!a.isFixedPosition){if(r.offset().top+r.height()>p){r.addClass("above");if(r.offset().top<q){r.removeClass("above")}}}}};k.fmovefocus=function(n){k.movefocus(n)};k.fhide=function(n){k.hide(n)};k.blocker=function(n){var o=n.which;if(o==40||o==38){return false}};k.movefocus=function(p){var s=p.which,o=this.getElementsByTagName("a"),r=this.focused,n=(s==9),q;do{switch(s){case 40:case 9:if(p.shiftKey){this.focused--}else{this.focused++}break;case 38:this.focused--;break;case 27:this.hide();return false;default:return true}q=(this.focused<0||this.focused>o.length-1)}while(!q&&b(o[this.focused].parentNode).hasClass("assistive"));if(n&&q){if(r!=-1){b(o[r].parentNode).removeClass("active")}this.focused=-1;this.hide();return false}else{if(!n){if(this.focused<0){this.focused=o.length-1}else{if(this.focused>o.length-1){this.focused=0}}}}if(r>=0){b(o[r].parentNode).removeClass("active")}o[this.focused].focus();b(o[this.focused].parentNode).addClass("active");p.stopPropagation();p.preventDefault();return false};k.show();clearTimeout(k.timer);var h=b(k),f=h.offset();k.hide();var j=b(".trigger",g);if(j.length){var l=function(){clearTimeout(AJS.dropDownTimer);delete AJS.dropDownTimer;AJS.dropDownHider();AJS.dropDownHider=null;k.show()};var m=function(o){var n=typeof AJS.dropDownTimer!="undefined";d=k;if(n){l()}else{AJS.dropDownShower=function(){k.show();delete AJS.dropDownShowerTimer};AJS.dropDownShowerTimer=setTimeout(AJS.dropDownShower,o)}};var i=function(n){var o=typeof AJS.dropDownShowerTimer!="undefined";if(o){clearTimeout(AJS.dropDownShowerTimer);delete AJS.dropDownShowerTimer}if(typeof AJS.dropDownTimer!="undefined"){clearTimeout(AJS.dropDownTimer);delete AJS.dropDownHider}AJS.dropDownHider=function(){k.hide();delete AJS.dropDownTimer};AJS.dropDownTimer=setTimeout(AJS.dropDownHider,n)};e.mouseover(function(){m(500)});e.mouseout(function(){i(300)});j.click(function(){if(k.hidden){k.show()}else{k.hide()}})}})};AJS.toInit(function(d){var b=["action-view-source-link","view-user-history-link"];for(var e=b.length;e--;){d("#"+b[e]).click(function(i){window.open(this.href,(this.id+"-popupwindow").replace(/-/g,"_"),"width=600, height=400, scrollbars, resizable");i.preventDefault();return false})}var f=function(i,m){var n=d("#ajax-error");if(n.length==0){d("#com-atlassian-confluence").prepend("<div id='ajax-error'></div>");n=d("#ajax-error")}n.append("<span class='error'>"+i+"<a class='close'>Close</a></span>");n.find("a.close").click(function(){var o=d(this).parent();d(o).slideUp(1000,function(){d(o).remove();if(d("#ajax-error").children(".error").length==0){d("#ajax-error").remove()}});return false});m.removeClass("waiting")};d("#page-favourite").click(function(n){var m=d(this);if(m.hasClass("waiting")){return AJS.stopEvent(n)}m.addClass("waiting");var i=AJS.Confluence.getContextPath()+"/json/addfavourite.action";if(m.hasClass("selected")){i=AJS.Confluence.getContextPath()+"/json/removefavourite.action"}AJS.safeAjax({url:i,type:"POST",dataType:"json",data:{entityId:AJS.params.pageId},success:function(p){if(p.actionErrors){for(var o=0;o<p.actionErrors.length;o++){f(p.actionErrors,m)}return}if(p.errorMessage){f(p.errorMessage,m);return}m.removeClass("waiting");m.toggleClass("selected");m.toggleClass("ie-page-favourite-selected")},error:function(o){f("Server error while updating favourite",m)}});return AJS.stopEvent(n)});var k=d("#page-watch"),l=d("#page-unwatch"),h=d(k.parent("li")),j=d(l.parent("li"));if(k.hasClass("inactive")){h.addClass("assistive")}if(l.hasClass("inactive")){j.addClass("assistive")}var g=function(i,m,n){m.addClass("waiting");AJS.safe.ajax({url:i,type:"POST",dataType:"json",data:{entityId:AJS.params.pageId},success:function(p){if(p.actionErrors){for(var o=0;o<p.actionErrors.length;o++){f(p.actionErrors,m)}return}if(p.errorMessage){f(p.errorMessage,m);return}m.removeClass("waiting");m.toggleClass("inactive");n.toggleClass("inactive");m.parent("li").toggleClass("assistive");n.parent("li").toggleClass("assistive")},error:function(o){m.removeClass("waiting");f("Server error while updating favourite",menuItem)}})};k.click(function(i){g(AJS.Confluence.getContextPath()+"/pages/startwatching.action",k,l);k.addClass("waiting");return AJS.stopEvent(i)});l.click(function(i){g(AJS.Confluence.getContextPath()+"/pages/stopwatching.action",l,k);l.addClass("waiting");return AJS.stopEvent(i)});var a=d("#action-menu-link"),c=d("#add-menu-link");if(a.length){a.next().addClass("most-right-menu-item")}else{if(c.length){c.next().addClass("most-right-menu-item")}}d(".ajs-menu-bar").ajsMenu({isFixedPosition:true})});AJS.$(function(a){a("#header-menu-bar .ajs-menu-item").each(function(){var c=a(this),d=a(".ajs-drop-down",this),b=c.width();if(b>d.width()){d.width(b.valueOf()+50);AJS.log("Dropdown width override occurred")}})});