import { Header } from "./Header";
import { Total } from "./Total";
import { Content } from "./Content";

export const Course = ({ course }) => (
  <>
    <Header course={course} />
    <Content course={course} />
    <Total course={course} />
  </>
);
