import React, { useState } from "react";

import TodoClass from "../models/todo";

type TodoContext = {
  items: TodoClass[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
};

export const TodosContext = React.createContext<TodoContext>({
  items: [],
  addTodo: () => {},
  removeTodo: (id: string) => {},
});

const TodosContextProvider: React.FC<{ children: React.ReactNode }> = (
  props
) => {
  const [todos, setTodos] = useState<TodoClass[]>([]);

  const addTodoHandler = (text: string) => {
    const newTodo = new TodoClass(text);
    setTodos((todos) => {
      return todos.concat(newTodo);
    });
    console.log(text);
  };

  const removeTodoHandler = (id: string) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };

  const contextValue: TodoContext = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler,
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
