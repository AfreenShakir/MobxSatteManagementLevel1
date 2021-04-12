import React from "react";
import { observer, inject } from "mobx-react";

class TasksCounter extends React.Component {
  render() {
    return (
      <div className="counter">
        <div className="task-counter">
          You have: {this.props.tasksStore.tasksCount} tasks!
        </div>
      </div>
    );
  }
}

export default inject("tasksStore")(observer(TasksCounter));
