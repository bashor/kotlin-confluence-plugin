AJS.toInit(function(g){function d(i){return g.trim(i).length==0}var c,f=140;function e(){var i=new AJS.Dialog(650,200,"update-user-status-dialog");var j=i.popup.element;i.addHeader(AJS.params.statusDialogHeading||"What are you working on?");i.addPanel("Set Status","<form class='aui update-status'><fieldset><legend class='assistive'>Status Update</legend><label for='status-text' class='assistive'>"+AJS.params.statusDialogAccessibilityLabel+"</label><textarea name='status-text' id='status-text'></textarea><span id='update-status-chars-left'>"+f+"</span><div id='dialog-current-status' class='current-user-latest-status'>"+(AJS.params.statusDialogLatestLabel||"Latest:")+" <span class='status-text'></span></div></fieldset></form>");i.addButton(AJS.params.statusDialogUpdateButtonLabel||"Update",a,"status-update-button");i.addCancel(AJS.params.statusDialogCancelButtonLabel||"Cancel",function(k){k.hide()});j.find(".dialog-button-panel").append("<span class='error-message'></span>");i.setError=function(k){g("#update-user-status-dialog .error-message").html(k)};if(Confluence.KeyboardShortcuts.enabled||AJS.Data.get("use-keyboard-shortcuts")==="true"){i.addHelpText(AJS.params.shortcutDialogTip,{shortcut:"s"})}return i}function b(i){g(".current-user-latest-status .status-text").html(i.text);g(".current-user-latest-status a[id^=view]").each(function(){var k=g(this),j=k.attr("href");k.attr("href",j.replace(/\d+$/,i.id)).text(i.friendlyDate).attr("title",new Date(i.date).toLocaleString())})}function h(){g.getJSON(AJS.Confluence.getContextPath()+"/status/current.action",function(i){if(i.errorMessage!=null){c.setError(i.errorMessage)}else{b(i)}})}var a=function(){var i=g("#update-user-status-dialog #status-text").attr("disabled","disabled").attr("readonly","readonly").blur();var j=i.val();g(".status-update-button").attr("disabled","disabled");if(j.length>f||d(j)){return false}AJS.safe.ajax({url:AJS.Confluence.getContextPath()+"/status/update.action",type:"POST",dataType:"json",data:{text:j},success:function(k){if(k.errorMessage!=null){c.setError(k.errorMessage)}else{b(k);i.val("");setTimeout(function(){c.hide()},1000)}},error:function(m,l,k){AJS.log("Error updating status: "+l);AJS.log(k);c.setError("There was an error - "+k)}})};g("#set-user-status-link").click(function(k){var j=g(this).parents(".ajs-drop-down")[0];j&&j.hide();if(typeof c=="undefined"){c=e();var l=g("#update-status-chars-left");var i=g(".status-update-button").attr("disabled","disabled");g("#update-user-status-dialog form.update-status #status-text").keydown(function(m){if(m.which==13){a()}}).bind("blur focus change "+(g.browser.mozilla?"paste input":"keyup"),function(){var m=f-g(this).val().length;l.removeClass("over-limit").removeClass("close-to-limit").text(m);i.removeAttr("disabled");if(d(g(this).val())){i.attr("disabled","disabled")}if(m<0){l.addClass("over-limit").html("&minus;"+-m);i.attr("disabled","disabled")}else{if(m<20){l.addClass("close-to-limit")}}});g("#update-user-status-dialog form.update-status").submit(function(m){a();return AJS.stopEvent(m)})}c.setError("");h();c.show();g("#update-user-status-dialog #status-text").removeAttr("readonly").removeAttr("disabled").focus();return AJS.stopEvent(k)})});