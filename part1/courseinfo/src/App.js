const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <>
      <Header course={course} />
      <Content course={course}/>
      <Total course={course}/>
    </>
  )
}

const Header = (props)=>{
  return(
    <div className="header">
      <h1>{props.course.name}</h1>
    </div>
  )
}

const Content = (props)=>{
  return(
    <div className="content">
      <Part part={props.course.parts[0]} />
      <Part part={props.course.parts[1]} />
      <Part part={props.course.parts[2]}/>
    </div>
  )
}

const Part = (props)=>{
  return(
    <>
      <p>
        {props.part.name} {props.part.exercices}
      </p>
    </>
  )
}

const Total = (props)=>{
  const total = props.course.parts[0].exercises + props.course.parts[1].exercises + props.course.parts[2].exercises
  return(
    <div className="total">
      <p>Number of exercises {total}</p>
    </div>

  )
}
export default App;