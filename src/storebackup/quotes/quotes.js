import $ from "jquery";
import React from 'react';
let i=0;
let quotesData;
       class Quotes extends React.Component {
    constructor(props){
      super(props);
      this.handleClick=this.handleClick.bind(this);
      this.getQuotes=this.getQuotes.bind(this);
      this.handleTweet=this.handleTweet.bind(this)
      this.state={
     
        //i:0,
        currentQuote:"Start where you are. Use what you have. Do what you can",
        currentAuth:'Arthur Ashe'
   

      }
    }

 componentDidMount() {
  this.getQuotes();
  
  
 }
    getQuotes() {
      return $.ajax({
        headers: {
          Accept: "application/json"
        },
        url: 'https://raw.githubusercontent.com/ubermachine/react-randomQuoteGen/master/src/assets/quotes',
        success: function(jsonQuotes) {
          if (typeof jsonQuotes === 'string') {
            quotesData = JSON.parse(jsonQuotes);
    
          }
        }
      });
    }

    handleClick(){
      let col=`#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`
      $(".App-header").css("color",col );
      $(".App-header").css("background-color",col );
      $("#new-quote").css("background-color",col );
      
      i=Math.floor(Math.random()*(quotesData.quotes.length-1))
      this.setState({
        currentQuote:quotesData.quotes[i].quote,
        currentAuth:quotesData.quotes[i].author
      });
      
      
    }
    handleTweet(){
      $('#tweet-quote').attr('href', 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + this.state.currentQuote + '" ' + this.state.currentAuth));
    }
    render(){
      return(
        <div id='wrapper'>

        <div id='quote-box'>
          <div id="text" >{this.state.currentQuote}</div>
          <div id="author">{this.state.currentAuth}</div>
          <button class='btn btn-info btn-sm' id="new-quote" onClick={this.handleClick}>New quote</button>
          <a class="button" id="tweet-quote" title="Tweet this quote!" target="_blank" onClick={this.handleTweet}>
        <i class="fa fa-twitter"></i>
      </a>
        </div>
      </div>
      )
    }
}
export default Quotes;
