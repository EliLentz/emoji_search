import React from 'react';
import InputBar from './Components/Input_Value';
import EmojiList, {Item} from './Components/Emoji_List';
import emoji from './emojiList.json'
import './App.css'

type QueryState = {
  query: string,
  result: Item[]
}

type QueryProps = {
}

class App extends React.Component<QueryProps, QueryState>{
  constructor(props: QueryProps){
    super(props);
    this.state = {
        query : '',
        result : emoji
    }
    this.inputHandler = this.inputHandler.bind(this);
    this.searchEmoji = this.searchEmoji.bind(this);
  }
  /**
   * function changes query
   * @param event 
   */
  inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState(({query}) => ({query : event.target.value}))
  }

  /**
   * function filters list of emojis
   * @param event 
   */
  searchEmoji = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState(({result}) => ({result : emoji.filter((item) => 
    item.title.toLowerCase().includes(event.target.value.toLowerCase()))}));
  }

  render(){
    return (
      <div className = 'main-page'>
        <h1>😸Emoji Search😺</h1>  
        <InputBar
        input = {this.state.query}
        inputHandler = {this.inputHandler}
        searchEmoji = {this.searchEmoji}/>
        <EmojiList
        result = {this.state.result}
        />
      </div>
    );
  }
}

export default App;