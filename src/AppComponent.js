import React from "react"

function AppComponent(props) {
    return (
        <div className="mainContent">
            <textarea className="ansBox" defaultValue={props.state.string}></textarea>

            <br />
            <button className="integers" onClick={props.handleClick} name="1">1</button>
            <button className="integers" onClick={props.handleClick} name="2">2</button>
            <button className="integers" onClick={props.handleClick} name="3">3</button>

            <button className="operation" onClick={props.handleClick} name="+">+</button>

            <br />
            <button className="integers" onClick={props.handleClick} name="4">4</button>
            <button className="integers" onClick={props.handleClick} name="5">5</button>
            <button className="integers" onClick={props.handleClick} name="6">6</button>

            <button className="operation" onClick={props.handleClick} name="-"> - </button>
            <br />
            <button className="integers" onClick={props.handleClick} name="7">7</button>
            <button className="integers" onClick={props.handleClick} name="8">8</button>
            <button className="integers" onClick={props.handleClick} name="9">9</button>

            <button className="operation" onClick={props.handleClick} name="*">x</button>
            <br />
            <button className="integers" onClick={props.handleClick} name="0">0</button>
            <button className="operation" onClick={props.handleClick} name="/">/</button>

            <button className="operation" onClick={props.handleClick} name="calculate">=</button>

            <button className="operation" onClick={props.handleClick} name="clear">C</button>
        </div >
    )
}

export default AppComponent