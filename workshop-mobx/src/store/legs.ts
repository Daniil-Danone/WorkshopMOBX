import { makeAutoObservable } from "mobx";

class Legs {
    color = 'white'
    
    constructor(){
        makeAutoObservable(this)
    }

    setColor(color: string) {
        this.color = color
    }
}

export default new Legs;