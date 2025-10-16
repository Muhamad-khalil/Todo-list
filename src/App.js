import "./App.css";
import TodoList from "./components/TodoList";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { TodoProvider } from "./contexts/todosContext";
import { ToastProvider } from "./contexts/ToastContext";
const theme = createTheme({
  typography: {
    fontFamily: ["Alexandria"],
  },

  palette: {
    primary: {
      main: "#dd2c00",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ToastProvider>
        <div
          className="App"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "#191b1f",
            height: "100vh",
            direction: "rtl",
          }}
        >
          <TodoProvider>
            <TodoList />
          </TodoProvider>
        </div>
      </ToastProvider>
    </ThemeProvider>
  );
}

export default App;
