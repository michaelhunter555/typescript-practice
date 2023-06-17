import React, { useContext, useRef } from "react";

import { TodosContext } from "../store/todos-context";

const addTodo = {
  form: {
    width: "40rem",
    margin: "2rem auto",

    input: {
      display: "block",
      width: "100%",
      font: "inherit",
      fontSize: "1.5rem",
      padding: "0.5rem",
      borderRadius: "4px",
      backgroundColor: "#f7f5ef",
      border: "none",
      borderBottom: "2px solid #494844",
      borderBottomRightRadius: 0,
      borderBottomLeftRadius: 0,
      marginBottom: "0.5rem",
    },

    button: {
      font: "inherit",
      backgroundColor: "skyblue",
      border: "1px solid skyblue",
      color: "#201d0f",
      padding: "0.5rem 1.5rem",
      borderRadius: "4px",
      cursor: "pointer",

      "&:hover": {
        backgroundColor: "#ebc002",
        boderColor: "#ebc002",
      },
    },
  },
  formLabel: {
    display: "block",
    fontWeight: "bold",
    marginBottom: "0.5rem",
  },
};

const AddTodo: React.FC = (props) => {
  const todoCtx = useContext(TodosContext);
  const todoInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = todoInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      return;
    }
    todoCtx.addTodo(enteredText);
  };

  return (
    <form style={addTodo.form} onSubmit={submitHandler}>
      <label style={addTodo.formLabel}>Add Todo</label>
      <input
        style={addTodo.form.input}
        type="text"
        id="text"
        ref={todoInputRef}
      />
      <button style={addTodo.form.button}>submit</button>
    </form>
  );
};

export default AddTodo;
