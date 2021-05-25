import React from 'react';
import './Emoji_List.css'

export interface Item {
    title: string,
    symbol: string
}
type ResultProps = {
    readonly result: Item[]
  }
/**
 * this component builds a list of buttons of all emojis from a json file
 */
export default class EmojiList extends React.Component<ResultProps>{
    /**
     * function that is called onClick
     * function copy current item to clipboard
     * @param item - current emoji
     */
    ClickToCopy = (item: Item) => {
        navigator.clipboard.writeText(item.symbol)
    }

    render(){
        return(
            <div className = 'emoji-list'>
                {this.props.result.map((item) => (
                    <li key = {item.title} className = 'item-list'>
                        <button className = 'item-button' onClick = {() => this.ClickToCopy(item)}>
                                <span>{item.symbol} {item.title}</span>
                                <span className = 'hide-click-item'>Click to copy emoji</span>
                        </button>
                    </li>
                ))}
            </div>
        
            );
    }  
}