import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  const states = [good, neutral, bad]

  return (
    <>
      <h1>give feedback</h1>
      <Button text="good" handleClick={()=>{setGood(good+1)}}></Button>
      <Button text="neutral"handleClick={()=>{setNeutral(neutral+1)}}></Button>
      <Button text="bad"handleClick={()=>{setBad(bad+1)}}></Button>

      <h2>statistics</h2>

      <Statistics states={states}></Statistics>

    </>
  )
}

const Button = (props)=>{
  return(
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}

const Statistics = (props)=>{
  const all = props.states[0] + props.states[1] + props.states[2]
  const good = props.states[0]
  const neutral = props.states[1]
  const bad = props.states[2]
  const average = (props.states[0]*1 + props.states[2]*-1)/all
  const positive = props.states[0]/all

  if(props.states[0]===0 & props.states[1]===0 & props.states[2]===0) return <div>No feedback Given</div>
  return(
    <table>
      <tbody>
        <tr>
          <td>good</td>
          <td>{good}</td>
        </tr>
        <tr>
          <td>neutral</td>
          <td>{neutral}</td>
        </tr>
        <tr>
          <td>bad</td>
          <td>{bad}</td>
        </tr>
        <tr>
          <td>all</td>
          <td>{all}</td>
        </tr>
        <tr>
          <td>average</td>
          <td>{average}</td>
        </tr>
        <tr>
          <td>positive</td>
          <td>{positive}</td>
        </tr>
      </tbody>
    </table>

  )
}

const StatisticLine = (props)=>(
  <div>{props.text} {props.value}</div>
)


export default App