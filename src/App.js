import React from "react";
import "./App.css";
import Question from "./components/Question";
import Status from "./components/Status";

const ANSWER_TIME = 30; 

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quiz: [
        { question: "Bác Hồ sinh năm bao nhiêu", answers: ["A: 1890", "B: 1891", "C: 1892", "D: 1893"], trueAns: "1890" },
        { question: "Cậu vàng thích ăn gì?", answers: ["A: Xương", "B: Thịt Chó", "C: Riềng", "D: Patê"], trueAns: "Patê" },
        { question: "Học không hiểu thì làm gì", answers: ["A: Nghỉ", "B: Hỏi", "C: Học lại", "D: Nói chuyện cùng bạn"], trueAns: "Hỏi" },
      ],
      timeLeft: 30,
      currentQuestion: 0,

    };
  }


  updateCurrentQuestion() {
    if (this.state.currentQuestionIndex < this.state.quiz.length - 1) {
      this.setState(state => ({
        currentQuestionIndex: state.currentQuestionIndex + 1
      }));
    }

    // TODO: Reset lại đáp án

  }

  ticking() {
    this.interval = setInterval(() => { }, ANSWER_TIME * 1000);

    if (this.state.timeLeft > 0) {
      // đến 0 thì ngưng
      this.setState(state => ({ timeLeft: state.timeLeft - 1 }));
    } else {
      this.setState(state => ({ timeLeft: ANSWER_TIME }));
    }
  }

  onAnswer(answer, trueAns) {
    // Hiển thị đáp án
    this.setState(state => ({ displayResult: "block" }));

    // Kiểm tra đáp án
    if (answer === trueAns) {
      this.setState(state => ({ score: state.score + 1 }));


    } else {

    }

    // Chuyển câu hỏi sau 2 giây
    // TODO: Trong 2 giây này không cho phép chọn đáp án
    setTimeout(() => {
      this.updateCurrentQuestion();
    }, 2000);
  }


  render() {
    return (
      <div className="table">
        <Status
          updateCurrentQuestion={this.updateCurrentQuestion}
          timeLeft={this.state.timeLeft}
          totalQuestion={this.state.quiz.length}
          currentQuestion={this.state.currentQuestion}
          progress={this.state.progress}
          score={this.state.score}
        />
        <Question
          quiz={this.state.quiz}
          currentQuestion={this.state.currentQuestion}
        />
      </div>
    );
  }
}

export default App;
