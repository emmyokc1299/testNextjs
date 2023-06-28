import React, { memo } from 'react'

const CheckComp = () => {

    console.log("CheckComp");

  return (
    <div>CheckComp</div>
  )
}

export default memo(CheckComp)