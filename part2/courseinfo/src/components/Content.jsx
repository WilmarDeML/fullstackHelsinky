import { Part } from "./Part";

export const Content = ({ course: { parts } }) => (
  <>
    <Part part={parts[0]} />
    <Part part={parts[1]} />
    <Part part={parts[2]} />
  </>
);
