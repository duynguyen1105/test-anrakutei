import React, { useState } from 'react'
import { useSwipeable } from 'react-swipeable'
import Genre from '../Genre/Genre'
import './category.scss'

const Category = ({ data }) => {
  const listCategory = data.category
  const [currentCategory, setCurrentCategory] = useState(1)
  const handlers = useSwipeable({
    onSwipedLeft: () => {
      setCurrentCategory(currentCategory + 1)
    },
    onSwipedRight: () => {
      setCurrentCategory(currentCategory - 1)
    },
  })

  return (
    <>
      <div className="list-categories">
        {Object.values(listCategory).map((category, index) => (
          <button
            key={index}
            className={
              parseInt(category.categorycd) === currentCategory ? 'active' : ''
            }
            onClick={() => setCurrentCategory(parseInt(category.categorycd))}
          >
            {category.categorynm}
          </button>
        ))}
      </div>
      <div {...handlers}>
        <Genre data={data} currentCategory={currentCategory} />
      </div>
    </>
  )
}

export default Category
