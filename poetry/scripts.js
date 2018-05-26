/* Rollover functions
   (c) 1999-2004 - iandexter(at)mail(dot)com */

var imgPath = "images/psnavbar/";

var still0, still1, queue0, queue1, tanghal0, tanghal1, girbaud0, girbaud1, to_f0, to_f1, orpheus0, orpheus1;
var magic0, magic1, kaarawa0, kaarawa1, axiom0, axiom1, rollover0, rollove1, madfish0, madfish1, chopin0, chopin1;
var satori0, satori1, others0, others1, toggle0, toggle1;



function preloadFront() {

   if (document.images) {

      still0 = new Image();
      still0.src = imgPath + "still0.gif";
      still1 = new Image();
      still1.src = imgPath + "still1.gif";

      queue0 = new Image();
      queue0.src = imgPath + "queue0.gif";
      queue1 = new Image();
      queue1.src = imgPath + "queue1.gif";

      tanghal0 = new Image();
      tanghal0.src = imgPath + "tanghal0.gif";
      tanghal1 = new Image();
      tanghal1.src = imgPath + "tanghal1.gif";

      girbaud0 = new Image();
      girbaud0.src = imgPath + "girbaud0.gif";
      girbaud1 = new Image();
      girbaud1.src = imgPath + "girbaud1.gif";

      to_f0 = new Image();
      to_f0.src = imgPath + "to_f0.gif";
      to_f1 = new Image();
      to_f1.src = imgPath + "to_f1.gif";

      orpheus0 = new Image();
      orpheus0.src = imgPath + "orpheus0.gif";
      orpheus1 = new Image();
      orpheus1.src = imgPath + "orpheus1.gif";

      magic0 = new Image();
      magic0.src = imgPath + "magic0.gif";
      magic1 = new Image();
      magic1.src = imgPath + "magic1.gif";

      kaarawa0 = new Image();
      kaarawa0.src = imgPath + "kaarawa0.gif";
      kaarawa1 = new Image();
      kaarawa1.src = imgPath + "kaarawa1.gif";

      axiom0 = new Image();
      axiom0.src = imgPath + "axiom0.gif";
      axiom1 = new Image();
      axiom1.src = imgPath + "axiom1.gif";

      rollove0 = new Image();
      rollove0.src = imgPath + "rollove0.gif";
      rollove1 = new Image();
      rollove1.src = imgPath + "rollove1.gif";

      madfish0 = new Image();
      madfish0.src = imgPath + "madfish0.gif";
      madfish1 = new Image();
      madfish1.src = imgPath + "madfish1.gif";

      chopin0 = new Image();
      chopin0.src = imgPath + "chopin0.gif";
      chopin1 = new Image();
      chopin1.src = imgPath + "chopin1.gif";

      satori0 = new Image();
      satori0.src = imgPath + "satori0.gif";
      satori1 = new Image();
      satori1.src = imgPath + "satori1.gif";

      others0 = new Image();
      others0.src = imgPath + "others0.gif";
      others1 = new Image();
      others1.src = imgPath + "others1.gif";
   }
}

var imgStatus = 0;   
function flipImg(imageName) {
   
   if (document.images) {
      document[imageName].src = eval(imageName + (imgStatus ? 0 : 1) + ".src");
   }
   
   imgStatus = !imgStatus;
   
   return true;
} 

function preloadImages() {
   if (document.images) {
      toggle0 = new Image();
      toggle0.src = imgPath + "toggle.gif";
      toggle1 = new Image();
      toggle1.src = imgPath + "hide.gif"; 
   }
}
   
var menuStatus = 0;
function showMenu() {
   var theMenu;

   if (document.images) {
      document["toggle"].src = eval("toggle" + (menuStatus ? 0 : 1) + ".src");
   }

   menuStatus = !menuStatus;

   if (document.layers) {
      visible = "show";
      hidden = "hide";
      theMenu = document.layers["popup"];      
   }
   else if (document.all) {
      visible = "visible";
      hidden = "hidden";
      theMenu = document.all("popup").style;
   }

   theMenu.visibility = theMenu.visibility==visible ? hidden : visible;

   return true;
} 