const App = () => {
  const course = 'Half stack application development'
  const part1 = 'Fundamentals of React'
  const exercices1 = 10
  const part2 = 'using props to pass data'
  const exercices2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  const parts = [part1, part2, part3];
  const exercices = [exercices1, exercices2, exercises3]
  const total = exercices1 + exercices2 + exercises3 
  return (
    <>
      <Header course={course} />
      <Content parts={parts} exercices={exercices} />
      <Total total={total} />
    </>
  )
}

const Header = (props)=>{
  return(
    <div className="header">
      <h1>{props.course}</h1>
    </div>
  )
}

const Content = (props)=>{
  return(
    <div className="content">
      <p>
        {props.parts[0]} {props.exercices[0]}
      </p>
      <p>
        {props.parts[1]} {props.exercices[1]}
      </p>
      <p>
        {props.parts[2]} {props.exercices[2]}
      </p>
    </div>
  )
}

const Total = (props)=>{
  return(
    <div className="total">
      <p>Number of exercises {props.total}</p>
    </div>

  )
}
export default App;