import React from 'react'

const Title = ({text,classes}) => {
  return (
    <h3 className={!classes ? "title text-center" : classes}>{!text ? "Title" : text}</h3>
  )
}

export default Title