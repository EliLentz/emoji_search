import React from 'react';
import './Input_Value.css'

type InputProps = {
    readonly input: string,
    readonly inputHandler: any,
    readonly searchEmoji: any
  }
/**
 * this component builds an input bar to set query for filter a list
 */
class InputBar extends React.Component<InputProps>{
    render() {
        return(
            <div>
                <input 
                className = 'input-area'
                type = 'text'
                value = {this.props.input}
                onChange = { (e) => {this.props.inputHandler(e); this.props.searchEmoji(e)}}
                />
            </div>
        );
    }
}

export default InputBar;