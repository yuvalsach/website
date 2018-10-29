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
         // insert code to be run when the composition is fully loaded here
         sym.$("#Stage_Discount_discount1").css("background-image","url(images/discountOverlap.png)","background-repeat","repeat");
         sym.$("#Stage_Discount_discount2").css("background-image","url(images/discountGoogle.jpg)","background-repeat","repeat");
         sym.$("#Stage_Discount_discount3").css("background-image","url(images/discountLogo.png)","background-repeat","repeat");
         sym.$("#Stage_Discount_discount4").css("background-image","url(images/discountSketches.jpg)","background-repeat","repeat");
         sym.$("#Stage_Discount_discount5").css("background-image","url(images/discountTwoFigures.jpg)","background-repeat","repeat");
         sym.$("#Stage_Discount_discount6").css("background-image","url(images/discountCircle1.jpg)","background-repeat","repeat");
         sym.$("#Stage_Discount_discount7").css("background-image","url(images/discountCircle2.jpg)","background-repeat","repeat");
         sym.$("#Stage_Discount_discount8").css("background-image","url(images/discountCircle3.jpg)","background-repeat","repeat");
         sym.$("#Stage_Discount_discount9").css("background-image","url(images/discountCircle4.jpg)","background-repeat","repeat");
         sym.$("#Stage_Discount_discount10").css("background-image","url(images/discountCircle5.jpg)","background-repeat","repeat");
         sym.$("#Stage_Discount_discount11").css("background-image","url(images/discountJollyFigure.gif)","background-repeat","repeat");

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'Discount'
   (function(symbolName) {   
   
   })("Discount");
   //Edge symbol end:'Discount'

})(jQuery, AdobeEdge, "EDGE-13316667");