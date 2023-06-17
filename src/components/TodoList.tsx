import React from "react";

const todoStyle = {
  listStyle: "none",
  margin: "2rem auto",
  padding: 0,
  width: "40rem",
};

const TodoList: React.FC<{
  id: string;
  text: string;
  onRemove: (id: string) => void;
}> = (props): JSX.Element => {
  return (
    <li onClick={() => props.onRemove(props.id)} style={{ ...todoStyle }}>
      {props.id.replace(/[\W_]/gi, "")}
      {" - "}
      {props.text}
    </li>
  );
};

export default TodoList;
