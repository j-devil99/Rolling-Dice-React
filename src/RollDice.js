import React, { Component } from "react";
import Dice from './Dice';
import './RollDice.css';

class RollDice extends Component{    
    constructor(props){
        super(props);
        this.state = {
            die1: 2,
            die2: 1,
            rolling: false
        }
        this.roll = this.roll.bind(this);
    }
    
    roll(){
        let num1 = Math.floor(Math.random()* 6) + 1;
        let num2 = Math.floor(Math.random()* 6) + 1;
        this.setState({die1: num1, die2: num2, rolling: true});
        setTimeout(() => {
            this.setState({rolling: false});
        }, 1000);
    }

    render(){
        return(
            <div className="RollDice">
                <div className="RollDice-container">
                    <Dice num={this.state.die1} isRolling={this.state.rolling}/>
                    <Dice num={this.state.die2} isRolling={this.state.rolling}/>
                </div>
                <button onClick={this.roll} disabled={this.state.rolling}>{this.state.rolling?"Rolling...": "Roll Dice!"}</button>
            </div>
        );
    }
}

export default RollDice;