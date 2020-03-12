import React from 'react';
import './css/app.css'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      string: ""
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event) {
    const { name } = event.target

    if (name === "clear") {
      return this.setState(() => ({
        string: ""
      }))
    }

    if (name === "calculate") {
      try {
        let x = eval(this.state.string)
        return this.setState(prevState => ({
          string: eval(prevState.string)
        }))
      } catch (error) {
        return this.setState(prevState => ({
          string: "Invalid operation!!"
        }))
      }

    }

    this.setState(prevState => ({
      string: prevState.string + name
    }))
  }


  render() {
    return (
      <div className="mainContent">
        <textarea className="ansBox" defaultValue={this.state.string}></textarea>

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
