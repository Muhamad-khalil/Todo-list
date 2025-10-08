import "./css/App.css";
import TodoList from "./components/TodoList";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { TodosContext } from "./context/todosContext";
const theme = createTheme({
  typography: {
    fontFamily: ["Alexandria"],
  },
});
const initialTodos = [
  {
    id: uuidv4(),
    title: "اهلا وسهلا بك",
    details: "اهلا وسهلا بك في مشروعي الخاص",
    isCompleted: false,
  },
  {
    id: uuidv4(),
    title: "اهلا وسهلا بك",
    details: "اهلا وسهلا بك في مشروعي الخاص",
    isCompleted: false,
  },
  {
    id: uuidv4(),
    title: "اهلا وسهلا بك",
    details: "اهلا وسهلا بك في  الخاص",
    isCompleted: false,
  },
];
function App() {
  const [todos, setTodos] = useState(initialTodos); // todoLists

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <TodosContext.Provider value={{ todos, setTodos }}>
          <TodoList />
        </TodosContext.Provider>
      </div>
    </ThemeProvider>
  );
}

export default App;
