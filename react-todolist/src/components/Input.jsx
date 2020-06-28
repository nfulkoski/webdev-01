import React, { useState } from "react"

function Input(props) {

  const [textInput, setTextInput] = useState("")

  function handleChange(event) {
    const value = event.target.value
    setTextInput(value)
  }

  return(
    <div className="form">
      <input type="text"
             onChange = { handleChange }
             value = { textInput }/>
      <button onClick = {() => {
            props.addItem(textInput)
            setTextInput("")}}>
        <span>Add</span>
      </button>
    </div>
  )
}

export default Input
