import React from 'react'
import PersonList from './PersonList'


function NameList() {
    // const names = [
    //     'Adi',
    //     'Aditya',
    //     'Lala',
    //     'Pooche',
    //     'Choocha'
    // ]

    // const nameList = names.map(name=><h2>{name}</h2>)

    const persons = [
        {
            id: 0,
            name: 'Aditya',
            techStack: 'LAMP',
            exp: '3+'
        },
        {
            id: 1,
            name: 'Satyam',
            techStack: 'Front-End',
            exp: '3+'
        },
        {
            id: 2,
            name: 'Sahil',
            techStack: 'MERN',
            exp: '2+'
        }
    ]

    const personList = persons.map(el =><PersonList key={el.id} person={el} /> )

  return (
    <div>
        {/* {
            names.map(name=><h2>{name}</h2>)
        }
        {nameList} */}
        {personList}
    </div>
  )
}

export default NameList