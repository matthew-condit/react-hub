import React, {Component} from 'react';

import './hangmanWidget.css';

class HangmanWidget extends Component {

    constructor(props) {
        super(props);
        this.state = {
            guessWord: [],
            guessedLetters: [],
            guess: "",
            currentWord: [],
            originalInput: true,
            numOfGuesses: 0
        };
    }

    componentWillMount() {
    }


    componentDidMount() {
        // this.getMessage();
    }

    handleOriginal(event) {
        this.setState({
            guessWord: event.target.value.split("")
        });
    }

    handleSubmit(event) {
        this.setState({
            originalInput: false,
            currentWord: [].fill("_", this.state.guessWord.length)
        });
    }

    handleGuess(event) {

    }
    guess(event) {

    }


    render() {

        const currentGuessHtml = ""
        return (
            <div className="hangman-widget">
                <div className={"original-word-input " + (this.state.originalInput ? "start-game" : "")}>
                    <label>What's your word??!?!</label>
                    <input type="text" onChange={this.handleOriginal.bind(this)}/>
                    <button onClick={this.handleSubmit.bind(this)}>Submit</button>
                </div>
                <div className="game-wrapper">
                    <div className="hangman">

                    </div>
                    <div className="guess-state">
                        {
                            this.state.currentWord
                        }
                    </div>
                    <div className="guessed-letters">
                        {this.state.guessedLetters}
                    </div>
                    <div className="guess-input">
                        <label>Guess:</label>
                        <input type="text" maxLength="1" onChange={this.handleGuess.bind(this)} />
                        <button onClick={this.guess.bind(this)}>Guess!</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default HangmanWidget;
