import React, { Component } from "react";
import TaskList from "./TaskList";
import TasksCounter from "./Counter";
import { observer, inject } from "mobx-react";

class Main extends Component {
  render() {
    const hasTasks =
      this.props.tasksStore.tasksCount && this.props.tasksStore.tasksCount > 0;
    const mainClass = `${hasTasks ? "" : "full"}`;

    return (
      <main className={mainClass}>
        <TaskList />
        <TasksCounter />
      </main>
    );
  }
}

export default inject("tasksStore")(observer(Main));
