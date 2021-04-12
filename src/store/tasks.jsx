import { decorate, observable, action, computed } from "mobx";

export class TasksStore {
  tasks: Array<string> = [];

  addTask(task: string) {
    this.tasks.push(task);
  }

  removeTask(index: number) {
    this.tasks.splice(index, 1);
  }

  get tasksCount() {
    return this.tasks.length;
  }
}

decorate(TasksStore, {
  addTask: action,
  removeTask: action,
  tasks: observable,
  tasksCount: computed
});
