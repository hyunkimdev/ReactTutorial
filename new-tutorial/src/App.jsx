import { useState, useEffect } from 'react'
import './App.css'

const Card = ({title}) => {
  const [count, setCount] = useState(0);
  const [hasLiked, setHasLiked] = useState(false);

  useEffect(() => {
    console.log(`${title} has been liked ${hasLiked} times`);
  }, [hasLiked]);

  return (
    <div className="card" onClick={() => setCount(count + 1)}>
      <h2>{title}<br/>{count || null}</h2>
      <button onClick={(e) => {
        e.stopPropagation();
        setHasLiked(!hasLiked);
      }}>
        {hasLiked ? '❤️' : '🤍'} 
      </button>
    </div>
  )
}

const App = () => {
  return (
    <div className="card-container">
      <Card title="Star Wars" />
      <Card title="Avatar" />
      <Card title="The Lion King" />
    </div>
  )
}

export default App
