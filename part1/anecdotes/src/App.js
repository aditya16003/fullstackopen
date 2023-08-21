import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const len = anecdotes.length
   
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(Array(len).fill(0))

  const handleVote= ()=>{
    const copy = [...points]
    copy[selected]+=1
    setPoints(copy)
  }

  const max_votes_i = points.reduce((max, current, arr, i)=>(points[current]>max? current: max), 0)


  return (
    <>
      <h1>Anectode of the Day</h1>
      <div>
        {anecdotes[selected]}
        <p>has {points[selected]} points</p>
      </div>
      <Button text="vote" handleClick={handleVote}></Button>
      <Button text="next anecdote" handleClick={()=>(setSelected(Math.floor(Math.random()*len)))}></Button>
      <h1>Anectode with most votes</h1>
      <div>
        {anecdotes[max_votes_i]}
        <p>has {points[max_votes_i]} points</p>
      </div>
    </>
  )
}

const Button = (props)=>(
  <button onClick={props.handleClick}>{props.text}</button>
)

export default App