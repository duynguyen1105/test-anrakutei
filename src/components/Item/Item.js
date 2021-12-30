import React from 'react'
import './item.scss'

const imgUrl = 'https://content-upload-s3.s3.ap-northeast-1.amazonaws.com'

const Item = ({ item }) => {
  return (
    <div className='single-item'>
      <div className='item-image'>
        <img src={`${imgUrl}${item?.img?.jp?.filenm}`} alt="Item"></img>
      </div>
      <div className='item-info'>
          <div className='item-name'>{item?.lang?.jp}</div>
          <div className='item-price'>{item?.price}</div>
      </div>
    </div>
  )
}

export default Item
