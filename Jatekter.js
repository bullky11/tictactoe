import Elem from "./Elem.js";
class Jatekter{
    #lepes;
constructor(){
    this.#lepes=0;
    this.#lista["","","","","","","","",""]
    const szuloElem=$("article")
    for (let index = 1; index <= 9; index++) {
        
         const elem1=new Elem(szuloElem,index);
    }
   //vezérli aj átékot látja mind a 9 elemet
   ////ttudja  h hanyadszor kattintottunk
   //
    //mikor kell növelni a lépés számlálót ,--> ha klikkelünk egy elemre
    //feliratkozunk eg saját eseményre
    $(window).on("elemKattintas",function(event){
        console.log(event.detail)
        const aktElem=event.detail
        if(this.#lepes%2===0){
        
            event.detail.setElem("X")
        }else{
            event.detail.setElem("O") 
           
        }
        this.lepes++
        
    })
    
})}