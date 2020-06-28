/*
 * @Author NF
 * @Task Todolist app. Implemented in React.
 * @Learning React event handling, complex state management, component tree.
 * @Version 1.0.0 functional.
*/

import React, { useState } from "react";
import List from "./List"
import Input from "./Input"
import Heading from "./Heading"

function App() {

  const [items, setItems] = useState([])

  function addItem(item) {
    if(item !== "") {
      setItems((prevItems) => [...prevItems, item])
    }
  }

  function deleteItem(id) {
    setItems(prevItems => prevItems.filter(
      (item, index) => index !== id
    ))

  }

  return (
    <div className="container">
      <Heading />
      <Input addItem = { addItem }/>
      <List list={ items } del = { deleteItem }/>
    </div>
  );
}

export default App;
