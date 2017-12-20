import React, { Component } from 'react';

import showNextQuiz from "./showNextQuiz";

class Exam extends Component {
  render() {
    return (
      <div>
        <header className="bg-dark">
          <div className="container">
            <nav className="navbar navbar-dark navbar_no-padding">
              <a href="#" className="navbar-brand" onClick={this.props.action}>JavaScript Quiz</a>
            </nav>
          </div>
          <div style={{height: 5 + "px"}} className="progress">
            <div id="progress-success" style={{width: 0 + "%"}} className="progress-bar bg-success"></div>
            <div id="progress-failure" style={{width: 0 + "%"}} className="progress-bar bg-danger"></div>
          </div>
        </header>
        <main className="container">
          <div id="quiz-screen" className="row">
            <button type="button" onClick={this.props.action} className="close btn_cursor" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
            <div className="col-12 bg-solarized">
          <pre className="language_custom">
            <code id="code" className="language-javascript"></code>
          </pre>
            </div>
            <div className="col-12">
              <form>
                <div className="form-group">
                  <label htmlFor="console-output">Web Console Output:</label>
                  <textarea id="console-output" onKeyPress={this.addRow} rows="2" autoFocus={true} className="form-control console-output"></textarea>
                </div>
                <div className="btn-group">
                  <button id="answer" onClick={this.toAnswer} type="button" className="btn btn-info btn_cursor">Answer</button>
                  <button id="next-quiz" onClick={showNextQuiz} type="button" className="btn btn-light btn_cursor">Next quiz</button>
                </div>
              </form>
            </div>
          </div>
        </main>
      </div>
    )
  }
}

export default Exam;