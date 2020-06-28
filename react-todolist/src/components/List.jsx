import React from "react"

function List(props) {
  return(
    <div>
      <ul>
        {props.list.map(
          (todoItem, index) =>
            ListItem(todoItem, index, props.del)
        )}
      </ul>
    </div>
  )
}

function ListItem(item, index, del) {
  return (
    <li key ={ index }
        onClick = { () => del(index) }>
        { item }
    </li>
  )
}

export default List
