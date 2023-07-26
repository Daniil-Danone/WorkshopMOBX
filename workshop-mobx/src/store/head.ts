import { makeAutoObservable } from "mobx";

class Head {
    color = 'white'
    
    constructor(){
        makeAutoObservable(this)
    }

    setColor(color: string) {
        this.color = color
    }
}

export default new Head;