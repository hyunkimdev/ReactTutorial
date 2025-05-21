import { useState } from 'react'
import './App.css'

const Card = ({title}) => {
  return (
    <div className="card">
      <h2>{title}</h2>
    </div>
  )
}

const App = () => {
  return (
    <div className="card-container">
      <h2>Functional Arrow Component</h2>

      <Card title="Start Wars" />
      <Card title="Avatar" />
      <Card title="The Lion King" />
    </div>
    
  )
}

export default App
