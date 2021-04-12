import React, { useState, FormEvent } from "react";
import { observer, inject } from "mobx-react";

function TaskForm(props) {
  const [task, setTask] = useState("");

  function handleChange(event: FormEvent<HTMLInputElement>) {
    setTask(event.currentTarget.value);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    props.tasksStore.addTask(task);
    setTask("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={task}
        placeholder="Name of the task"
        onChange={handleChange}
      />
      <button type="submit">ADD TASK</button>
    </form>
  );
}

export default inject("tasksStore")(observer(TaskForm));
