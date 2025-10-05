import "./css/App.css";
import TodoList from "./components/TodoList";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: ["Alexandria"],
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App" style={{}}>
        <TodoList />
      </div>
    </ThemeProvider>
  );
}

export default App;
