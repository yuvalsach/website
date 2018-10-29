/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      

      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         sym.stop();
         
         $("#Stage").css("margin","auto"); 
         //sym.$("Bg").css("background-image":"url(/images/Bg.png)");
         //sym.$("Bg").css({"background-image": "url(images/Bg.png)", "background-repeat": "repeat"});
         //sym.$("BgBottom").css({"background-image": "url(images/BgBottom.png)", "background-repeat": "repeat"});
         
         sym.$("darioFrame").append('<iframe id="Frame0" src="dario.html" ALLOWTRANSPARENCY="true" frameborder="0" scrolling="no"></iframe>');
         sym.$("#Frame0").css({"height":"100%","width":"100%"});
         sym.$('#Frame0').load(function() {
         	sym.$("myHeritageFrame").append('<iframe id="Frame1" src="myheritage.html" ALLOWTRANSPARENCY="true" frameborder="0" scrolling="no"></iframe>');
         	sym.$("#Frame1").css({"height":"100%","width":"100%"});
         	sym.$('#Frame1').load(function() {
         		sym.$("weaveeFrame").append('<iframe id="Frame2" src="weavee.html" ALLOWTRANSPARENCY="true" frameborder="0" scrolling="no"></iframe>');
         		sym.$("#Frame2").css({"height":"100%","width":"100%"});
         		sym.$('#Frame2').load(function() {
         			sym.$("reshetFrame").append('<iframe id="Frame3" src="reshet.html" ALLOWTRANSPARENCY="true" frameborder="0" scrolling="no"></iframe>');
         			sym.$("#Frame3").css({"height":"100%","width":"100%"});
         			sym.$('#Frame3').load(function() {
         				sym.$("netafimFrame").append('<iframe id="Frame4"src="netafim.html" ALLOWTRANSPARENCY="true" frameborder="0" scrolling="no"></iframe>');
         				sym.$("#Frame4").css({"height":"100%","width":"100%"});
         				sym.$('#Frame4').load(function() {
         					sym.$("discountFrame").append('<iframe id="Frame5"src="discount.html" ALLOWTRANSPARENCY="true" frameborder="0" scrolling="no"></iframe>');
         					sym.$("#Frame5").css({"height":"100%","width":"100%"});
         					sym.$('#Frame5').load(function() {
         						sym.$("frames1Frame").append('<iframe id="Frame6"src="frames1.html" ALLOWTRANSPARENCY="true" frameborder="0" scrolling="no"></iframe>');
         						sym.$("#Frame6").css({"height":"100%","width":"100%"});
         						sym.$('#Frame6').load(function() {
         							//sym.$("frames2Frame").append('<iframe id="Frame5"src="frames2.html" ALLOWTRANSPARENCY="true" frameborder="0" scrolling="no"></iframe>');
         							//sym.$("#Frame5").css({"height":"100%","width":"100%"});
         						});
         					});
         				});
         			});
         		});
         	});
         });
         
         
         
         //sym.$('Stage').height(19100);
         
         sym.$('Stage').height(25369);
         var stageHeight = sym.$('Stage').height(); // Set a variable for the height of the stage
         
         $("#html_body").css("overflow","auto");
         $("body").css({"overflow-x":"hidden"}).css({"overflow-y":"auto"}).css({"margin-left":"auto"}).css({"margin-right":"auto"});
         
         sym.$("#Stage").css({ // Set the transform origin so we always scale to the top left corner of the stage
         "transform-origin":"0 0",
         "-ms-transform-origin":"0 0",
         "-webkit-transform-origin":"0 0",
         "-moz-transform-origin":"0 0",
         "-o-transform-origin":"0 0"
         });
         
         /*
         sym.$("#Stage_MenuSmall").css({ // Set the transform origin so we always scale to the top left corner of the stage
         "transform-origin":"0 0",
         "-ms-transform-origin":"0 0",
         "-webkit-transform-origin":"0 0",
         "-moz-transform-origin":"0 0",
         "-o-transform-origin":"0 0"
         });
         
         sym.$("MenuSmall").css('position','absolute');
         
         sym.$("#Stage_Menu").css({ // Set the transform origin so we always scale to the top left corner of the stage
         "transform-origin":"0 0",
         "-ms-transform-origin":"0 0",
         "-webkit-transform-origin":"0 0",
         "-moz-transform-origin":"0 0",
         "-o-transform-origin":"0 0"
         });*/
         
         
         function scaleStage() {
             var stage = sym.$('Stage'); // Set a reusable variable to reference the stage
             var parent = sym.$('Stage').parent(); // Set a reusable variable to reference the parent container of the stage
         
             var parentWidth = stage.parent().width(); // Get the parent of the stage width
             if (parentWidth>=1024) parentWidth=1366;
             var stageWidth = stage.width(); // Get the stage width
             var desiredWidth = Math.round(parentWidth * 1); // Set the new width of the stage as it scales
             var rescale = (desiredWidth / stageWidth); // Set a variable to calculate the new width of the stage as it scales
         
         // Rescale the stage!
         
         	 stage.css('transform', 'scale(' + rescale + ')'); 
             stage.css('-o-transform', 'scale(' + rescale + ')');
         	 stage.css('-ms-transform', 'scale(' + rescale + ')');
             stage.css('-webkit-transform', 'scale(' + rescale + ')');
         	 stage.css('-moz-transform', 'scale(' + rescale + ')');
             parent.height(stageHeight * rescale); // Reset the height of the parent container so the objects below it will reflow as the height adjusts
         	 $("#Menu").css('transform', 'scale(' + rescale + ')');
         	 $("#Menu").css(  '-o-transform', 'scale(' + rescale + ')');
         	 $("#Menu").css('-ms-transform', 'scale(' + rescale + ')');
             $("#Menu").css('-webkit-transform', 'scale(' + rescale + ')');
         	 $("#Menu").css('-moz-transform', 'scale(' + rescale + ')');
         	//alert(rescale);
         }
         
         function setMenu(){
         	 var stageScroll = sym.$('Stage'); // Set a reusable variable to reference the stage
             var parentScroll = sym.$('Stage').parent(); // Set a reusable variable to reference the parent container of the stage
             var parentWidthScroll = stageScroll.parent().width(); // Get the parent of the stage width
         
             var howToMargin1 = sym.$('Stage').parent().width();
         		if (howToMargin1>=1366) {
         			howToMargin1=(howToMargin1-1366)/2
         		}
         		else {
         			howToMargin1=0;
         		}
         
         			//alert(howToMargin1);
         
             $("body").append($("#Stage_Menu").css({'margin-left':howToMargin1}));
         	 $("body").append($("#Stage_Menu").css({'margin-left':howToMargin1}));
         	 $("body").append($("#Stage_Menu").css({'margin-left':howToMargin1}));
         	 $("body").append($("#Stage_Menu").css({'margin-left':howToMargin1}));
         	 $("body").append($("#Stage_Menu").css({'margin-left':howToMargin1}));
         
         
             if (parentWidthScroll<1024) {
         		$("#Stage_Menu").css({'display':'none'});
         		$("#Stage_Start").css("display","none");
         		$("#Stage_StartMobile").css("display","inline");
         		//$('#Stage_MenuSmall').css("display","inline");
         		//$("#Stage_Start").css("top","63px");
             }
             if (parentWidthScroll>=1024) {
         		$("#Stage_Menu").css({'display':'inline'});
         		$("#Stage_Start").css("display","inline");
         		$("#Stage_StartMobile").css("display","none");
         		//$('#Stage_MenuSmall').css("display","none");
         		//$("#Stage_Start").css("top","0px");
         	}	
         }
         /*
         function placeSmallMenu(){
         	 var stage1 = sym.$('Stage'); // Set a reusable variable to reference the stage
             var parent1 = sym.$('Stage').parent(); // Set a reusable variable to reference the parent container of the stage
         
             var parentWidth1 = stage1.parent().width(); // Get the parent of the stage width
             var stageWidth1 = stage1.width(); // Get the stage width
             var desiredWidth1 = Math.round(parentWidth1 * 1); // Set the new width of the stage as it scales
             var rescale1 = (desiredWidth1 / stageWidth1);
             var howMuch = $(window).scrollTop();
             var whereTo = howMuch/rescale1;
             //var offset = $("MenuSmall").offset();
         
         	 var element = sym.$("MenuSmall");
             element.css({'top':whereTo,'position':'absolute'});
             //sym.$("MenuSmall").animate({top:whereTo}, -10);
             //element.css({'position':'fixed','top':'0px'});ix
             //sym.$("MenuSmall").css('top',0);
         
         
         }*/
         /*
         function animateSmallMenu(){
         	 var stage1 = sym.$('Stage'); // Set a reusable variable to reference the stage
             var parent1 = sym.$('Stage').parent(); // Set a reusable variable to reference the parent container of the stage
         
             var parentWidth1 = stage1.parent().width(); // Get the parent of the stage width
             var stageWidth1 = stage1.width(); // Get the stage width
             var desiredWidth1 = Math.round(parentWidth1 * 1); // Set the new width of the stage as it scales
             var rescale1 = (desiredWidth1 / stageWidth1);
             var howMuch = $(window).scrollTop();
             var whereTo = howMuch/rescale1;
         
         	 var element = sym.$("MenuSmall");
             element.animate({'top':whereTo},50);
         }
         */
         function menuAppend(){
         
         		var howToMargin = sym.$('Stage').parent().width();
         		if (howToMargin>=1366) {
         			howToMargin=(howToMargin-1366)/2
         		}
         		else {
         			howToMargin=0;
         		}
         
         		var scrollVal2 = $(this).scrollTop();
         
         		if (scrollVal2 == scrollVal2) {
         			scaleStage();
         			$("body").append($("#Stage_Menu").width(74).height(74).css({'transform':'translateZ(0)','position':'fixed','top':'0px','margin-left':howToMargin}));
         			$("body").append($("#Stage_Menu").width(74).height(74).css({'-o-transform':'translateZ(0)','position':'fixed','top':'0px','margin-left':howToMargin}));
         			$("body").append($("#Stage_Menu").width(74).height(74).css({'-ms-transform':'translateZ(0)','position':'fixed','top':'0px','margin-left':howToMargin}));
         			$("body").append($("#Stage_Menu").width(74).height(74).css({'-webkit-transform':'translateZ(0)','position':'fixed','top':'0px','margin-left':howToMargin}));
         			$("body").append($("#Stage_Menu").width(74).height(74).css({'-moz-transform':'translateZ(0)','position':'fixed','top':'0px','margin-left':howToMargin}));
         
         			//$("#Stage_Menu").css("margin","auto");
         			//$("#Stage_Menu_menuMe").css("opacity","0.5");
         			//$("#Stage_MenuSmall_menuMe").css("opacity","0.5");
         		} 
         
         		if (scrollVal > 314) {
         			scaleStage();
         			$("body").append($("#Stage_Menu").width(74).height(74).css({'transform':'translateZ(0)','position':'fixed','top':'0px','margin-left':howToMargin}));
         			$("body").append($("#Stage_Menu").width(74).height(74).css({'-o-transform':'translateZ(0)','position':'fixed','top':'0px','margin-left':howToMargin}));
         			$("body").append($("#Stage_Menu").width(74).height(74).css({'-ms-transform':'translateZ(0)','position':'fixed','top':'0px','margin-left':howToMargin}));
         			$("body").append($("#Stage_Menu").width(74).height(74).css({'-webkit-transform':'translateZ(0)','position':'fixed','top':'0px','margin-left':howToMargin}));
         			$("body").append($("#Stage_Menu").width(74).height(74).css({'-moz-transform':'translateZ(0)','position':'fixed','top':'0px','margin-left':howToMargin}));
         
         			//$("#Stage_Menu").css("margin","auto");
         			//$("#Stage_Menu_menuMe").css("opacity","0.5");
         			//$("#Stage_MenuSmall_menuMe").css("opacity","0.5");
         		} 
         		if (scrollVal <= 314) {
         			scaleStage();
         			$("body").append($("#Stage_Menu").width(74).height(74).css({'transform':'translateZ(0)','position':'absolute','top':'314px','margin-left':howToMargin}));
         			$("body").append($("#Stage_Menu").width(74).height(74).css({'-o-transform':'translateZ(0)','position':'absolute','top':'314px','margin-left':howToMargin}));
         			$("body").append($("#Stage_Menu").width(74).height(74).css({'-ms-transform':'translateZ(0)','position':'absolute','top':'314px','margin-left':howToMargin}));
         			$("body").append($("#Stage_Menu").width(74).height(74).css({'-webkit-transform':'translateZ(0)','position':'absolute','top':'314px','margin-left':howToMargin}));
         			$("body").append($("#Stage_Menu").width(74).height(74).css({'-moz-transform':'translateZ(0)','position':'absolute','top':'314px','margin-left':howToMargin}));
         
         			//$("#Stage_Menu").css("margin","auto");
         			//$("#Stage_Menu_menuMe").css("opacity","1");
         			//$("#Stage_MenuSmall_menuMe").css("opacity","1");
         		}
         }
         /*
         function smallMenuAppend(){
         
         			$("#Stage").append($('MenuSmall').css({'transform':'translateZ(0)','position':'fixed','top':'0px'}));
         			$("#Stage").append($('MenuSmall').css({'-o-transform':'translateZ(0)','position':'fixed','top':'0px'}));
         			$("#Stage").append($('MenuSmall').css({'-ms-transform':'translateZ(0)','position':'fixed','top':'0px'}));
         			$("#Stage").append($('MenuSmall').css({'-webkit-transform':'translateZ(0)','position':'fixed','top':'0px'}));
         			$("#Stage").append($('MenuSmall').css({'-moz-transform':'translateZ(0)','position':'fixed','top':'0px'}));
         
         }
         */
         
         $(window).on('resize', function(){ 
         	 scaleStage(); 
         	 setMenu();
         	// $("#Stage").css("margin","auto");
         	 /*var leftMargin = $("#Stage").css('margin-right');
         		alert (leftMargin);*/
         		jQuery('img').each(function(){
             var margT = jQuery(this).css('margin');
             // Do something with margT
         	//alert(margT);
         });
         	 //placeSmallMenu();
         	 //smallMenuAppend()
         
         	 //$("#Stage").css("margin","auto"); 
         });
         
         $(document).ready(function(){
             scaleStage();
             setMenu();
             //$("#Stage").css("margin","auto");
             //$("#Stage").css("margin","auto"); 
         
             $(window).scroll(function() {
         
         			var stageScroll2 = sym.$('Stage'); // Set a reusable variable to reference the stage
         			var parentScroll2 = sym.$('Stage').parent(); // Set a reusable variable to reference the parent container of the stage
         			var parentWidthScroll2 = stageScroll2.parent().width(); // Get the parent of the stage width
         
         			if (parentWidthScroll2>=1024) menuAppend(); 
         			//if (parentWidthScroll<1024) smallMenuAppend(); 
         			//animateSmallMenu();
         
         	});
         });
         

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${_bottomArrowBtn}", "click", function(sym, e) {
         var element =$("#Stage_startPoint")
         $('html,body').animate({scrollTop:0}, "slow");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_bottomArrowBtn}", "mouseover", function(sym, e) {
         var mySymbolObject = sym.getSymbol("bottomArrow");
         mySymbolObject.play(1);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_bottomArrowBtn}", "mouseout", function(sym, e) {
         var mySymbolObject = sym.getSymbol("bottomArrow");
         mySymbolObject.playReverse();
         

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${_Stage}", "touchmove", function(sym, e) {
         //sym.$("#Stage_MenuSmall").css("opacity","0");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Stage}", "touchend", function(sym, e) {
         //sym.$("#Stage_MenuSmall").css("opacity","100");
         //animateSmallMenu();
         

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'Menu'
   (function(symbolName) {   
   
      

      

      Symbol.bindElementAction(compId, symbolName, "${_menuDigitalBtn}", "mouseover", function(sym, e) {
         // play the timeline from the given position (ms or label)
         var mySymbolObject = sym.getSymbol("menuDigital");
         mySymbolObject.play(1000);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_menuDigitalBtn}", "click", function(sym, e) {
         //var element = $("#Stage_Start");
         //$('html,body').animate({scrollTop: element.offset().top},"slow");
         
         $('html,body').animate({scrollTop: 0},"slow");
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_menuAnalogBtn}", "mouseover", function(sym, e) {
         // play the timeline from the given position (ms or label)
         var mySymbolObject = sym.getSymbol("menuAnalog");
         mySymbolObject.play(1000);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_menuAnalogBtn}", "click", function(sym, e) {
         /*var element =$("#Stage_Start")
         $('html,body').animate({scrollTop: element.offset().top}, "slow");*/
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute for a new window)
         window.open("analog/index.html", "_self");

      });
      //Edge binding end

   })("Menu");
   //Edge symbol end:'Menu'

   //=========================================================
   
   //Edge symbol: 'netafimLoop'
   (function(symbolName) {   
   
   })("netafimLoop");
   //Edge symbol end:'netafimLoop'

   //=========================================================
   
   //Edge symbol: 'Buzzilla'
   (function(symbolName) {   
   
      Symbol.bindTimelineAction(compId, symbolName, "Default Timeline", "stop", function(sym, e) {
         // insert code here to be run when the timeline stops
         
      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         //sym.stop();

      });
      //Edge binding end

      

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         sym.stop();
         

      });
      //Edge binding end

      

      

      

      

      

      

      

      

      

      

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${_buzzillaBtn1}", "mouseover", function(sym, e) {
         var theIndex = sym.$("#Stage_Buzzilla_buzzillaBtn1").css("z-index");
         
         if ( theIndex == "1") {
         
         sym.$("#Stage_Buzzilla_buzzillaCircle1").animate({ opacity: "0.8" }, 250);
         }
         else{
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_buzzillaBtn1}", "mousedown", function(sym, e) {
         var theIndex = sym.$("#Stage_Buzzilla_buzzillaBtn1").css("z-index");
         
         if ( theIndex == "1") {
         
         var myCover = sym.getSymbol("buzzillaAnimCover");
         myCover.play(12);
         sym.$("#Stage_Buzzilla_buzzillaLoad").css("background-image","url(images/Anim1.gif)","background-repeat","repeat");
         
         
         sym.$("#Stage_Buzzilla_buzzillaCircle1").animate({ opacity: "1" }, 250);
         sym.$("#Stage_Buzzilla_buzzillaCircle2").animate({ opacity: "0.65" }, 250);
         sym.$("#Stage_Buzzilla_buzzillaCircle3").animate({ opacity: "0.65" }, 250);
         
         sym.$("#Stage_Buzzilla_buzzillaBtn2").css("z-index", "1");
         sym.$("#Stage_Buzzilla_buzzillaBtn3").css("z-index", "1");
         }
         else{
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_buzzillaBtn1}", "mouseout", function(sym, e) {
         var theIndex = sym.$("#Stage_Buzzilla_buzzillaBtn1").css("z-index");
         
         if ( theIndex == "1") {
         
         sym.$("#Stage_Buzzilla_buzzillaCircle1").animate({ opacity: "0.65" }, 250);
         }
         else{
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_buzzillaBtn1}", "mouseup", function(sym, e) {
         sym.$("#Stage_Buzzilla_buzzillaBtn1").css("z-index", "2");
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_buzzillaBtn2}", "mouseover", function(sym, e) {
         var theIndex = sym.$("#Stage_Buzzilla_buzzillaBtn2").css("z-index");
         
         if ( theIndex == "1") {
         
         sym.$("#Stage_Buzzilla_buzzillaCircle2").animate({ opacity: "0.8" }, 250);
         }
         else{
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_buzzillaBtn2}", "mousedown", function(sym, e) {
         var theIndex = sym.$("#Stage_Buzzilla_buzzillaBtn2").css("z-index");
         
         if ( theIndex == "1") {
         
         var myCover = sym.getSymbol("buzzillaAnimCover");
         myCover.play(12);
         sym.$("#Stage_Buzzilla_buzzillaLoad").css("background-image","url(images/Anim2.gif)","background-repeat","repeat");
         
         
         sym.$("#Stage_Buzzilla_buzzillaCircle2").animate({ opacity: "1" }, 250);
         sym.$("#Stage_Buzzilla_buzzillaCircle1").animate({ opacity: "0.65" }, 250);
         sym.$("#Stage_Buzzilla_buzzillaCircle3").animate({ opacity: "0.65" }, 250);
         
         sym.$("#Stage_Buzzilla_buzzillaBtn1").css("z-index", "1");
         sym.$("#Stage_Buzzilla_buzzillaBtn3").css("z-index", "1");
         }
         else{
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_buzzillaBtn2}", "mouseout", function(sym, e) {
         var theIndex = sym.$("#Stage_Buzzilla_buzzillaBtn2").css("z-index");
         
         if ( theIndex == "1") {
         
         sym.$("#Stage_Buzzilla_buzzillaCircle2").animate({ opacity: "0.65" }, 250);
         }
         else{
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_buzzillaBtn2}", "mouseup", function(sym, e) {
         sym.$("#Stage_Buzzilla_buzzillaBtn2").css("z-index", "2");
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_buzzillaBtn3}", "mouseover", function(sym, e) {
         var theIndex = sym.$("#Stage_Buzzilla_buzzillaBtn3").css("z-index");
         
         if ( theIndex == "1") {
         
         sym.$("#Stage_Buzzilla_buzzillaCircle3").animate({ opacity: "0.8" }, 250);
         }
         else{
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_buzzillaBtn3}", "mousedown", function(sym, e) {
         var theIndex = sym.$("#Stage_Buzzilla_buzzillaBtn3").css("z-index");
         
         if ( theIndex == "1") {
         
         var myCover = sym.getSymbol("buzzillaAnimCover");
         myCover.play(12);
         sym.$("#Stage_Buzzilla_buzzillaLoad").css("background-image","url(images/Anim3.gif)","background-repeat","repeat");
         
         
         sym.$("#Stage_Buzzilla_buzzillaCircle3").animate({ opacity: "1" }, 250);
         sym.$("#Stage_Buzzilla_buzzillaCircle2").animate({ opacity: "0.65" }, 250);
         sym.$("#Stage_Buzzilla_buzzillaCircle1").animate({ opacity: "0.65" }, 250);
         
         sym.$("#Stage_Buzzilla_buzzillaBtn2").css("z-index", "1");
         sym.$("#Stage_Buzzilla_buzzillaBtn1").css("z-index", "1");
         }
         else{
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_buzzillaBtn3}", "mouseup", function(sym, e) {
         sym.$("#Stage_Buzzilla_buzzillaBtn3").css("z-index", "2");
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_buzzillaBtn3}", "mouseout", function(sym, e) {
         var theIndex = sym.$("#Stage_Buzzilla_buzzillaBtn3").css("z-index");
         
         if ( theIndex == "1") {
         
         sym.$("#Stage_Buzzilla_buzzillaCircle3").animate({ opacity: "0.65" }, 250);
         }
         else{
         }
         

      });
      //Edge binding end

   })("Buzzilla");
   //Edge symbol end:'Buzzilla'

   //=========================================================
   
   //Edge symbol: 'Reshet'
   (function(symbolName) {   
   
   })("Reshet");
   //Edge symbol end:'Reshet'

   //=========================================================
   
   //Edge symbol: 'Netafim'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_netafimBtn}", "click", function(sym, e) {
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute for a new window)
         window.open("http://www.netafimlegacy.com", "_blank");
         

      });
      //Edge binding end

   })("Netafim");
   //Edge symbol end:'Netafim'

   //=========================================================
   
   //Edge symbol: 'Discount'
   (function(symbolName) {   
   
   })("Discount");
   //Edge symbol end:'Discount'

   //=========================================================
   
   //Edge symbol: 'castUpSpeedbit'
   (function(symbolName) {   
   
   })("castUpSpeedbit");
   //Edge symbol end:'castUpSpeedbit'

   //=========================================================
   
   //Edge symbol: 'buzzillaCircle'
   (function(symbolName) {   
   
      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 125, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("buzzillaCircle");
   //Edge symbol end:'buzzillaCircle'

   //=========================================================
   
   //Edge symbol: 'menuMe'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1340, function(sym, e) {
         // stop the timeline at the given position (ms or label)
         sym.stop(0);

      });
      //Edge binding end

   })("menuMe");
   //Edge symbol end:'menuMe'

   //=========================================================
   
   //Edge symbol: 'Start'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_mailBtn}", "click", function(sym, e) {
         window.open("mailto:yuval.sach@gmail.com", "_blank");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_mailBtn}", "mouseover", function(sym, e) {
         sym.$("#Stage_Start_TextMail").animate({ opacity: "1" }, 250);
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_mailBtn}", "mouseout", function(sym, e) {
         sym.$("#Stage_Start_TextMail").animate({ opacity: "0.75" }, 250);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("Start");
   //Edge symbol end:'Start'

   //=========================================================
   
   //Edge symbol: 'buzzillaAnimCover'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("buzzillaAnimCover");
   //Edge symbol end:'buzzillaAnimCover'

   //=========================================================
   
   //Edge symbol: 'Preloader'
   (function(symbolName) {   
   
   })("Preloader");
   //Edge symbol end:'Preloader'

   //=========================================================
   
   //Edge symbol: 'bottomArrow'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 377, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("bottomArrow");
   //Edge symbol end:'bottomArrow'

   //=========================================================
   
   //Edge symbol: 'menuMe_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1340, function(sym, e) {
         // stop the timeline at the given position (ms or label)
         sym.stop(0);

      });
         //Edge binding end

      })("menuAnalog");
   //Edge symbol end:'menuAnalog'

   //=========================================================
   
   //Edge symbol: 'Menu_1'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_menuMeBtn}", "mouseover", function(sym, e) {
         // play the timeline from the given position (ms or label)
         var mySymbolObject = sym.getSymbol("menuMe");
         mySymbolObject.play(1000);
         

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_menuMeBtn}", "click", function(sym, e) {
         var element =$("#Stage_Start")
         $('html,body').animate({scrollTop: element.offset().top-63}, "slow");

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_menuDigitalBtn}", "mouseover", function(sym, e) {
         /*
         var mySymbolObject = sym.getSymbol("menuMe");
         mySymbolObject.play(1000);*/
         

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_menuDigitalBtn}", "click", function(sym, e) {
         /*var element =$("#Stage_Start")
         $('html,body').animate({scrollTop: element.offset().top}, "slow");*/

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_menuAnalogBtn}", "mouseover", function(sym, e) {
         // play the timeline from the given position (ms or label)
         var mySymbolObject = sym.getSymbol("menuAnalog");
         mySymbolObject.play(1000);
         

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_menuAnalogBtn}", "click", function(sym, e) {
         /*var element =$("#Stage_Start")
         $('html,body').animate({scrollTop: element.offset().top}, "slow");*/
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute for a new window)
         window.open("Analog.html", "_self");

      });
         //Edge binding end

      })("MenuSmall");
   //Edge symbol end:'MenuSmall'

   //=========================================================
   
   //Edge symbol: 'menuDigital'
   (function(symbolName) {   
   
   })("menuDigital2");
   //Edge symbol end:'menuDigital2'

   //=========================================================
   
   //Edge symbol: 'menuAnalog_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
            //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1340, function(sym, e) {
         // stop the timeline at the given position (ms or label)
         sym.stop(0);

      });
            //Edge binding end

         })("menuDigital");
   //Edge symbol end:'menuDigital'

   //=========================================================
   
   //Edge symbol: 'Start_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_mailBtn}", "click", function(sym, e) {
         window.open("mailto://yuval.sach@gmail.com", "_blank");
         

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_mailBtn}", "mouseover", function(sym, e) {
         sym.$("#Stage_StartMobile_mailBg").animate({ opacity: "0.75" }, 250);
         
         

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_mailBtn}", "mouseout", function(sym, e) {
         sym.$("#Stage_StartMobile_mailBg").animate({ opacity: "1" }, 250);

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_analogBtn}", "click", function(sym, e) {
         window.open("analog/index.html", "_self");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_analogBtn}", "mouseover", function(sym, e) {
         sym.$("#Stage_StartMobile_analogBg").animate({ opacity: "0.75" }, 250);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_analogBtn}", "mouseout", function(sym, e) {
         sym.$("#Stage_StartMobile_analogBg").animate({ opacity: "1" }, 250);

      });
      //Edge binding end

      })("StartMobile");
   //Edge symbol end:'StartMobile'

   //=========================================================
   
   //Edge symbol: 'frames1Frame'
   (function(symbolName) {   
   
   })("frames1Frame");
   //Edge symbol end:'frames1Frame'

   //=========================================================
   
   //Edge symbol: 'frames2Frame'
   (function(symbolName) {   
   
   })("frames2Frame");
   //Edge symbol end:'frames2Frame'

})(jQuery, AdobeEdge, "EDGE-601539441");