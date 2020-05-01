import React, { Component } from "react";
import Dicemap from './Dicemap';
import './Dice.css';

class Dice extends Component{
    render(){
        let diceClass = `fas fa-dice-${Dicemap[this.props.num]} fa-9x ${this.props.isRolling && "Dice-rolling"}`
        return(
            <div className="Dice">
                <i className={diceClass}></i>
            </div>
        );
    }
}

export default Dice;