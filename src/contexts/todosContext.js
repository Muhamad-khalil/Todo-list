import { createContext, useReducer, useContext } from "react";
import todosReducer from "../Reducer/todosReducer";

export const TodosContext = createContext([]);

export const TodoProvider = ({ children }) => {
  const [todos, todosDispatch] = useReducer(todosReducer, []);
  return (
    <TodosContext.Provider value={{ todos: todos, dispatch: todosDispatch }}>
      {children}
    </TodosContext.Provider>
  );
};

export const useTodos = () => {
  return useContext(TodosContext);
};
