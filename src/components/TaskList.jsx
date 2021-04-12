import React from "react";
import { observer, inject } from "mobx-react";

function TaskList(props) {
  return (
    <ul>
      {props.tasksStore.tasks.map((task: string, index: number) => (
        <li>
          {task}{" "}
          <span onClick={() => props.tasksStore.removeTask(index)}>DONE</span>
        </li>
      ))}
    </ul>
  );
}

export default inject("tasksStore")(observer(TaskList));
