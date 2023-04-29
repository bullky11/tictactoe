import Elem from "./Elem.js";
$(function(){
    let lepes=0;
    const szuloElem=$("article")
    for (let index = 1; index <= 9; index++) {
        
         const elem1=new Elem(szuloElem,index);
    }
   //vezérli aj átékot látja mind a 9 elemet
   ////ttudja  h hanyadszor kattintottunk
   //
    //mikor kell növelni a lépés számlálót ,--> ha klikkelünk egy elemre
    //feliratkozunk eg saját eseményre
    $(window).on("elemKattintas",function(){
        console.log("asdsa")

    })
    
})