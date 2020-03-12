import React, { useState } from "react"
import AppComponent from "./AppComponent"

function AppContainer() {
    const [string, setString] = useState("")

    function handleClick(event) {
        const { name } = event.target

        if (name === "clear") {
            return setString("")
        }

        if (name === "calculate") {
            try {
                eval(string)
                return setString(eval(string))
            } catch (error) {
                return setString("Invalid operation!!")
            }

        }

        setString(string + name)
    }

    return (
        <
            AppComponent
            handleClick={handleClick}
            string={string}
        />
    )
}

export default AppContainer