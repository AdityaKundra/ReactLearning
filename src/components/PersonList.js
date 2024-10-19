import React from 'react'

function PersonList(props) {
    let el = props.person
  return (
    <div>
        <h2>Hello, I'm {el.name}, {el.techStack} Developer with {el.exp} Exp.</h2>
    </div>
  )
}

export default PersonList