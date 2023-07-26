import { makeAutoObservable } from "mobx";

class Arms {
    color = 'white'
    
    constructor(){
        makeAutoObservable(this)
    }

    setColor(color: string) {
        this.color = color
    }
}

export default new Arms;