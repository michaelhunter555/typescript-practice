import React, { useContext } from "react";

import { TodosContext } from "../store/todos-context";
import TodoList from "./TodoList";

//react type defintion with generic type
//shape our data should have
//shape our component should have
const Todo: React.FC = (props) => {
  const todoCtx = useContext(TodosContext);
  return (
    <ul>
      {todoCtx.items.map((todo, i) => (
        <>
          <TodoList
            key={i}
            onRemove={() => todoCtx.removeTodo(todo.id)}
            id={todo.id}
            text={todo.text}
          />
        </>
      ))}
    </ul>
  );
};

export default Todo;
