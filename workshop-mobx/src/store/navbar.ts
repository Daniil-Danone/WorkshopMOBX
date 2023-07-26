import { makeAutoObservable } from "mobx";

class Navbar {
    part = 'head'
    
    constructor(){
        makeAutoObservable(this)
    }

    changePart(part: string) {
        this.part = part
    }

    
}

export default new Navbar;