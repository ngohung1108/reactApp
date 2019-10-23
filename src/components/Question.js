import React from "react";

class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayResult: "none",
    };
  }

  onAnswer(answer, trueAns) {
    this.setState(state => ({ displayResult: "block" }));
    if (answer === trueAns) {
      this.setState(state => ({ score: state.score + 1 }))
      this.wrongSound.play();
    } else {
      this.wrongSound.play();
    }
  }

  render() {

    return (
      <div>
        <div id="question">
          <h2>{this.props.quiz[this.props.currentQuestion].question}</h2>
          <div className="question1">
            {this.props.quiz[this.props.currentQuestion].answers.map(
              (answer, index) => (
                <span key={index} className="answer">
                  <div

                    onChange={this.onAnswer.bind(
                      this,
                      answer,
                      this.props.quiz[this.props.currentQuestion].trueAns
                    )}
                  />

                  <label htmlFor={index}>{answer}</label>
                </span>
              )
            )}
          </div>

        </div>


      </div>
    );
  }
}

export default Question;
