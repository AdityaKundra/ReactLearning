import React from 'react'

function EventListner() {

    function clickHandler(){
        console.log(`It's Working`);
    }

  return (
    <div>
        <button onClick={clickHandler}>Click</button>
    </div>
  )
}

export default EventListner