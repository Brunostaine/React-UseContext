import React from 'react'

import { useContext } from 'react'
import { SomeContext } from './UseContext'


const Home = () => {
    const  { contextValue } = useContext(SomeContext)
  return (
    <div>
        <h2>Use Context</h2>
        <p>Valor do contexto: {contextValue}</p>
    </div>
  )
}

export default Home