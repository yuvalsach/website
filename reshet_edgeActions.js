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
         $("body").css({"background-color":"transparent"});
         
         sym.$("#Stage_Reshet_reshet1").css("background-image","url(images/external/reshetLogo.png)","background-repeat","repeat");
         sym.$("#Stage_Reshet_reshet2").css("background-image","url(images/external/reshetPhone.png)","background-repeat","repeat");
         sym.$("#Stage_Reshet_reshet3").css("background-image","url(images/external/reshetAllIcons.png)","background-repeat","repeat");
         sym.$("#Stage_Reshet_reshet4").css("background-image","url(images/external/reshetTwoIcons.png)","background-repeat","repeat");
         sym.$("#Stage_Reshet_reshet5").css("background-image","url(images/external/reshetBreak.png)","background-repeat","repeat");
         sym.$("#Stage_Reshet_reshet6").css("background-image","url(images/external/reshetSizes.png)","background-repeat","repeat");
         
         sym.$('#Stage_Reshet_Pattern').css({
         "background-image": "url('images/reshetBgPattern.png')",
         "background-repeat": "repeat"
         });
         
         sym.$('#Stage_Reshet_Bg').css({"width":"100%"});

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'Reshet'
   (function(symbolName) {   
   
   })("Reshet");
   //Edge symbol end:'Reshet'

})(jQuery, AdobeEdge, "EDGE-12703497");