const Header = ({ course: { name } }) => (
  <>
    <h1>{name}</h1>
  </>
)

const Total = ({ course: { parts } }) => (
  <>
    <h3>Total of {parts.reduce((acc, part) => acc + part.exercises, 0)} exercises</h3>
  </>
)

const Part = ({ part: { name, exercises } }) => (
  <>
    <p>
      {name} {exercises}
    </p>
  </>
)

const Content = ({ course: { parts } }) => {
  return parts.map(part => <Part part={part} key={part.id} />)
}

export const Course = ({ course }) => (
  <>
    <Header course={course} />
    <Content course={course} />
    <Total course={course} />
  </>
);
