import React from 'react'
import Item from '../Item/Item'
import './items.scss'

const Items = ({ data, items }) => {
  return (
    <div className="list-items">
      {items
        ? items.map((item, index) => (
            <Item key={index} item={data?.menu_detail[item]} />
          ))
        : null}
    </div>
  )
}

export default Items
