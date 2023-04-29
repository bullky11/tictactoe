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
           console.log(`ma  ${this.#index} fánkot evett Peti`)
        })

    }
    getIndex(){
        return this.#index;
    }
    setElem(adat){
        this.h1Elem.html(adat)
    }
}
export default Elem;