import { useContext, createContext } from "react";

// step -1 : createContext , with some default values

export const todoContext = createContext({
  todos: [
    {
      id: 1,
      todo: "This is task",
      completed: false,
    },
  ],
  addTodo: () => {},
  editTodo: () => {},
  deleteTodo: () => {},
  toggleComplete: () => {},
});

// step -2 : make Provider

export const TodoProvider = todoContext.Provider;

// step -3 : make the function

export const useTodo = () => {
  return useContext(todoContext);
};
