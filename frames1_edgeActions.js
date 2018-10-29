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
         sym.$("#Stage_Buzzilla_buzzillaBtn1").css("z-index", "2");
         sym.$("#Stage_Buzzilla_buzzillaBtn2").css("z-index", "1");
         sym.$("#Stage_Buzzilla_buzzillaBtn3").css("z-index", "1");
         
         //sym.$("#Stage_Buzzilla_buzzillaLoad").css("background-image","url(images/Anim3.gif)","background-repeat","repeat");
         //sym.$("#Stage_Buzzilla_buzzillaLoad").css("background-image","url(images/Anim2.gif)","background-repeat","repeat");
         sym.$("#Stage_Buzzilla_buzzillaLoad").css("background-image","url(images/Anim1.gif)","background-repeat","repeat");
         
         function preloadimages(arr){
             var newimages=[]
             var arr=(typeof arr!="object")? [arr] : arr //force arr parameter to always be an array
             for (var i=0; i<arr.length; i++){
                 newimages[i]=new Image()
                 newimages[i].src=arr[i]
             }
         }
          
         //preload 3 images:
         preloadimages(['images/Anim1.gif', 'images/Anim2.gif', 'images/Anim3.gif'])
         
         

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

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
   
   //Edge symbol: 'Buzzilla'
   (function(symbolName) {   
   
      Symbol.bindTimelineAction(compId, symbolName, "Default Timeline", "stop", function(sym, e) {
         // insert code here to be run when the timeline stops
         
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

   })("Buzzilla");
   //Edge symbol end:'Buzzilla'

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
   
   //Edge symbol: 'Comverse'
   (function(symbolName) {   
   
   })("Comverse");
   //Edge symbol end:'Comverse'

   //=========================================================
   
   //Edge symbol: 'castUpSpeedbit'
   (function(symbolName) {   
   
   })("castUpSpeedbit");
   //Edge symbol end:'castUpSpeedbit'

})(jQuery, AdobeEdge, "EDGE-13581645");