AJS.toInit(function(d){if(!AJS.params.editMode){return}var f,c=d("#enableQuickNav"),a=d("#maxSimultaneousQuickNavRequests"),h=a.siblings("span.inline-text"),b=d("#editbaseurl"),e=window.location.href;var k=function(){var l=d("#urlWarning");var n=d("#editbaseurl").val();if(n[n.length-1]=="/"){n+="admin"}else{n+="/admin"}var m=e.substring(0,n.length);if(m!=n){l.removeClass("hidden")}else{l.addClass("hidden")}};var j=function(){if(c.attr("checked")){a.removeAttr("disabled").css("color","#000");h.css("color",f);if(a.val()==0){a.val(40)}}else{a.attr("disabled","disabled").css("color","#ccc");f=h.css("color");h.css("color","#ccc")}};k();b.change(k);c.click(j);j();var g=d("#enableDidYouMean"),i=g.siblings("div.description");i.hide();if(d("#dymIndexExists").length==0){g.attr("disabled","disabled");i.show()}});