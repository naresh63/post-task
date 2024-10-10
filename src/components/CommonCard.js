import React from 'react'

const CommonCard = ({  children}) => {
  return (
    <div className='cardContainer'> 
     <div> { children} </div>

    </div>
  )
}

export default CommonCard