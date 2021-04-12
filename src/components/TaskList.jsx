import React, { useContext } from "react";
import { storesContext } from "../store/stores";

export default function TaskList() {
  const { tasksStore: store } = useContext(storesContext);

  return (
    <ul>
      {store.tasks.map((task: string, index: number) => (
        <li>
          {task} <span onClick={() => store.removeTask(index)}>DONE</span>
        </li>
      ))}
    </ul>
  );
}
