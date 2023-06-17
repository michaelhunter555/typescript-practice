import React from "react";

import AddTodo from "./components/AddTodo";
import Todo from "./components/Todo";
import TodosContextProvider from "./store/todos-context";

function App() {
  return (
    <TodosContextProvider>
      <AddTodo />
      <Todo />
    </TodosContextProvider>
  );
}

export default App;
