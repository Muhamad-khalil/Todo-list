import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
export const TodosContext = createContext([]);

export const TodoProvider = ({ children }) => {
  const initialTodos = [
    {
      id: uuidv4(),
      title: "قراءة كتاب",
      details: "تيسمبتيس يتسبميتس بيمستب",
      isCompleted: false,
    },
  ];
  const [todos, setTodos] = useState(initialTodos);
  return (
    <TodosContext.Provider value={{ todos, setTodos }}>
      {children}
    </TodosContext.Provider>
  );
};
