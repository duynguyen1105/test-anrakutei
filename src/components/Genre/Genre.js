import React from 'react'
import Items from '../Items/Items'
import './genre.scss'

const Genre = ({ data, currentCategory }) => {
  return (
    <>
      {data.menu_sub[currentCategory] ? (
        Object.keys(data.menu_sub[currentCategory]).map((genre, index) => (
          <div key={index}>
            <h1 className='genre-name'>{data.genre[genre].name}</h1>
            <Items
              items={data.menu_sub[currentCategory][genre].menu}
              data={data}
            />
          </div>
        ))
      ) : (
        <h1>No product</h1>
      )}
    </>
  )
}

export default Genre
