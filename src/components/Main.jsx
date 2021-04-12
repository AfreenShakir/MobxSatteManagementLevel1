import React, { useContext } from "react";
import { useObserver } from "mobx-react";
import { storesContext } from "../store/stores";
import TaskList from "./TaskList";
import TasksCounter from "./Counter";

export default function Main() {
  const { tasksStore: store } = useContext(storesContext);

  return useObserver(() => {
    const hasTasks = store.tasksCount && store.tasksCount > 0;
    const mainClass = `${hasTasks ? "" : "full"}`;

    return (
      <main className={mainClass}>
        <TaskList />
        <TasksCounter />
      </main>
    );
  });
}
