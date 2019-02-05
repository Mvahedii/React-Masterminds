import React, { Component } from 'react'

import Calcute from './calcute'
import './form.css'

class FormComponent extends Component {

    state = {
        num : null
    }
            setNumberInput = (e) => {
                const guess = e.target.value;

                this.setState(()=> ({num:parseInt(guess)}))
            }


    updateState = () => {
        // e.preventDefault();
        // this.setState({number:this.inputNumber.value})
        console.log(this.state.num)
    }

    render() {

        console.log(this.props.level)

        return (
           <div>
               <input type="number"  defaultValue = "0" onChange={this.setNumberInput} />
               <br />
                <button type="button" onClick = {this.updateState()}>GUESS</button>
                <br />
                {/* <Calcute level={this.props.level} inputNumber={this.state.number}/> */}
           </div>
        )
    }
}

export default FormComponent;