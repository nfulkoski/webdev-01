import React, { useState } from "react"

function App() {

  const [headingText, setHeadingText] = useState("Hello")
  const [bckColor, setBackgroundColor] = useState("white")
  const [inputName, setInputName] = useState(null)

  function handleClick() {
    if(inputName) {
        setHeadingText("Hello " + inputName)
    }
  }

  function handleMouseOver() {

    setBackgroundColor("black")

  }

  function handleMouseOut() {

    setBackgroundColor("white")

  }

  function handleChange(event) {

    setInputName(event.target.value)

  }

  return(

    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?"
              onChange = { handleChange }  />
      <button onClick = { handleClick }
              onMouseOver = { handleMouseOver }
              onMouseOut = { handleMouseOut }
              style= {{ backgroundColor: bckColor }}>
        Submit
      </button>
    </div>

  )

}

export default App
