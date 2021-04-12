import { createContext, useContext } from "react";
import { TasksStore } from "./tasks";

export const tasksStore = new TasksStore();

export const storesContext = createContext({ tasksStore });

export const useStores = () => useContext(storesContext);
