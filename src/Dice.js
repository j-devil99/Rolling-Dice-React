import React, { Component } from "react";
import Dicemap from './Dicemap';

class Dice extends Component{
    constructor(props){
        super(props);
        this.state = {
            num: 1
        }
    }
    render(){
        let diceClass = `fas fa-dice-${Dicemap[this.state.num]} fa-9x`
        return(
            <div>
                <h1>Dice Component</h1>
                <i class={diceClass}></i>
            </div>
        );
    }
}

export default Dice;