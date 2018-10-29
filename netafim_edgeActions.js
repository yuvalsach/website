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
         sym.$("#Stage_Netafim_netafim1").css("background-image","url(images/netafimLogo.png)","background-repeat","repeat");
         sym.$("#Stage_Netafim_netafim2").css("background-image","url(images/netafimComputer.jpg)","background-repeat","repeat");
         sym.$("#Stage_Netafim_netafim3").css("background-image","url(images/netafimTopBg.jpg)","background-repeat","repeat");
         sym.$("#Stage_Netafim_netafim4").css("background-image","url(images/netafimCircles.jpg)","background-repeat","repeat");
         sym.$("#Stage_Netafim_netafim5").css("background-image","url(images/netafimMap.jpg)","background-repeat","repeat");
         //sym.$("#Stage_Netafim_netafim6").css("background-image","url(images/netafimLoop.gif)","background-size","421px 94px;","background-repeat","no-repeat");
         sym.$("#Stage_Netafim_netafim7").css("background-image","url(images/netafimWorld.jpg)","background-repeat","repeat");
         

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

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
   
   //Edge symbol: 'netafimLoop'
   (function(symbolName) {   
   
   })("netafimLoop");
   //Edge symbol end:'netafimLoop'

})(jQuery, AdobeEdge, "EDGE-13121668");