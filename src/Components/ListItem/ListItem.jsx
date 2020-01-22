import React from 'react'
import './ListItem.css';

const ListItem = props => {
  
  let array = Object.values(props.item)
  return (
    <tr>
      {array.map((value, i) => {
        return <td key={i}>{value}</td>
      })}
    </tr>
  )
}

export default ListItem;