import { createContext } from "react";

export const TasksContext = createContext({
    tasks: [],
    loading: true,
    error: ""
});