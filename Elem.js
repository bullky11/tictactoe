class Elem {
    #index
    constructor (szuloelem,index){
        this.#index=index
        szuloelem.append(`<div class="elem">
                            <h1></h1>
                            </div>
        `)
        //megfogom a html elemeket
        this.divElem=$("article div:last-child")
//
        this.h1Elem=$("article div:last-child h1")
        this.divElem.on("click",()=>{
           this.setElem("X")
          console.log(this.#index)
           //létrehozunk egy saját esemént : elem Kattintas
           this.kattintasTrigger()
        })

    }
    getIndex(){
        return this.#index;
    }
    setElem(adat){
        this.h1Elem.html(adat)
    }
    kattintasTrigger(){
        //létrehozza a saját eseményünket
        const esemeny=new CustomEvent("elemKattintas",{detail:this.#index})
        window.dispatchEvent(esemeny)
    }
}
export default Elem;