export const Total = ({ course: { parts } }) => (
  <>
    <h3>Total of {parts.reduce((acc, part) => acc + part.exercises, 0)} exercises</h3>
  </>
);
