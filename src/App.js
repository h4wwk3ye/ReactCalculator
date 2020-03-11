import React from 'react';
import './css/app.css'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      firstOperand: "",
      secondOperand: "",
      operator: "",
      ans: ""
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event) {
    const { name } = event.target

    if (name === '+' || name === '-' || name === '*' || name === '/') {
      return this.setState((prevState) => ({
        operator: name
      }))
    }

    if (name === "clear") {
      return this.setState(() => ({
        firstOperand: "",
        secondOperand: "",
        operator: "",
        ans: ""
      }))
    }

    if (name === "calculate") {
      let x
      if (this.state.operator === '+') {
        x = this.state.firstOperand + this.state.secondOperand
      } else if (this.state.operator === '-') {
        x = this.state.firstOperand - this.state.secondOperand
      } else if (this.state.operator === '*') {
        x = this.state.firstOperand * this.state.secondOperand
      } else if (this.state.operator === '/') {
        x = this.state.firstOperand / this.state.secondOperand
      }
      return this.setState(prevState => ({
        ans: x,
        firstOperand: "",
        secondOperand: "",
        operator: ""
      }))
    }

    if (this.state.operator === '') {
      this.setState(prevState => ({
        firstOperand: prevState.firstOperand * 10 + parseInt(name)
      }))
    } else {
      this.setState(prevState => ({
        secondOperand: prevState.secondOperand * 10 + parseInt(name)
      }))
    }
  }

  handleChange() {
    this.setState({})
  }

  render() {
    return (
      <div className="mainContent">
        <textarea
          className="ansBox"
          value=
          {
            this.state.firstOperand + (this.state.firstOperand === '' ? "" : " ") +
            this.state.operator + (this.state.operator === '' ? "" : " ") +
            this.state.secondOperand + (this.state.secondOperand === '' ? "" : " ") +
            this.state.ans
          }
          onChange={this.handleChange}
        >
        </textarea>

        <br />
        <button className="integers" onClick={this.handleClick} name="1">1</button>
        <button className="integers" onClick={this.handleClick} name="2">2</button>
        <button className="integers" onClick={this.handleClick} name="3">3</button>

        <button className="operation" onClick={this.handleClick} name="+">+</button>

        <br />
        <button className="integers" onClick={this.handleClick} name="4">4</button>
        <button className="integers" onClick={this.handleClick} name="5">5</button>
        <button className="integers" onClick={this.handleClick} name="6">6</button>

        <button className="operation" onClick={this.handleClick} name="-"> - </button>
        <br />
        <button className="integers" onClick={this.handleClick} name="7">7</button>
        <button className="integers" onClick={this.handleClick} name="8">8</button>
        <button className="integers" onClick={this.handleClick} name="9">9</button>

        <button className="operation" onClick={this.handleClick} name="*">x</button>
        <br />
        <button className="integers" onClick={this.handleClick} name="0">0</button>
        <button className="operation" onClick={this.handleClick} name="/">/</button>

        <button className="operation" onClick={this.handleClick} name="calculate">=</button>

        <button className="operation" onClick={this.handleClick} name="clear">C</button>
      </div >
    )
  }
}

export default App;
