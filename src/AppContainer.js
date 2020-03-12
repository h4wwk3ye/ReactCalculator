import React from "react"
import AppComponent from "./AppComponent"

class AppContainer extends React.Component {
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
                eval(this.state.string)
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
            <AppComponent
                handleClick={this.handleClick}
                state={this.state}
            />
        )
    }
}

export default AppContainer