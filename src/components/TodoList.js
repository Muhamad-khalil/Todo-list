import * as React from "react";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Grid from "@mui/material/GridLegacy";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

// Components
import Todo from "./Todo";
// other
import { v4 as uuidv4 } from "uuid";
import { useContext, useState, useEffect } from "react";
import { TodosContext } from "../context/todosContext";

export default function TodoList() {
  const { todos, setTodos } = useContext(TodosContext);
  const [titleInput, setTitleInput] = useState(""); // TextField Input
  const [detailsInput, setDetailsInput] = useState(""); // TextField Input
  const [displayTodoType, setDisplayTodoType] = useState("All"); // TextField Input

  // filter todo isCompleted or || not isCompleted
  const CompletedTodo = todos.filter((t) => t.isCompleted === true);
  const notCompletedTodo = todos.filter((t) => t.isCompleted === false);

  let todosToBeRender = todos;
  if (displayTodoType == "completed") {
    todosToBeRender = CompletedTodo;
  } else if (displayTodoType == "non-completed") {
    todosToBeRender = notCompletedTodo;
  } else {
    todosToBeRender = todos;
  }

  // filter todo isCompleted or || not isCompleted

  const todoJSX = todosToBeRender.map((t) => {
    return <Todo todo={t} key={t.id} />;
  });

  // localStorage
  useEffect(() => {
    // console.log("calling use effect");
    // const updatedTodos = JSON.parse(localStorage.getItem("todos") || "[]");
    // setTodos(updatedTodos);
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      const updatedTodos = JSON.parse(storedTodos);
      setTodos(updatedTodos);
    }
  }, []);
  // localStorage

  // changeDisplayType
  function changeDisplayType(e) {
    setDisplayTodoType(e.target.value);
  }

  // add text List
  function handleAddClick() {
    const newTodo = {
      id: uuidv4(),
      title: titleInput,
      details: detailsInput,
      isCompleted: false,
    };
    const updatedTodos = [...todos, newTodo];
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos)); // strong todos with browser
    setTitleInput("");
    setDetailsInput("");
  }

  return (
    <Container maxWidth="sm">
      <Card sx={{ minWidth: 275, textAlign: "center" }}>
        <CardContent>
          {/* header */}
          <Typography variant="h2" component="div">
            مهامي
          </Typography>
          <Divider />
          {/* header */}
          {/* ToggleButton  */}
          <ToggleButtonGroup
            value={displayTodoType}
            exclusive
            onChange={changeDisplayType}
            aria-label="text alignment"
            sx={{ marginTop: "30px" }}
          >
            <ToggleButton value="All">
              <Typography variant="h6">الكل</Typography>
            </ToggleButton>
            <ToggleButton value="non-completed">
              <Typography variant="h6">المنجزه</Typography>
            </ToggleButton>
            <ToggleButton value="completed">
              <Typography variant="h6">الغير منجزه</Typography>
            </ToggleButton>
          </ToggleButtonGroup>
          {/*=== ToggleButton  ===*/}
          {/* All Todos  */}
          {todoJSX}
          {/*=== All Todos  ===*/}

          {/* Input + Add Text */}
          <Grid container sx={{ marginTop: 5 }}>
            <Grid
              xs={8}
              display="flex"
              justifyContent="space-around"
              alignItems="center"
            >
              <TextField
                style={{ width: "100%", marginLeft: "10px" }}
                id="outlined-basic"
                label="عنوان المهمه"
                variant="outlined"
                value={titleInput}
                onChange={(e) => {
                  setTitleInput(e.target.value);
                }}
              />
              <TextField
                style={{ width: "100%", marginLeft: "10px" }}
                id="outlined-basic"
                label="التفاصيل"
                variant="outlined"
                value={detailsInput}
                onChange={(e) => {
                  setDetailsInput(e.target.value);
                }}
              />
            </Grid>
            <Grid
              xs={4}
              display="flex"
              justifyContent="space-around"
              alignItems="center"
            >
              <Button
                className="addButton"
                style={{ width: "100%", height: "100%" }}
                variant="contained"
                onClick={() => {
                  handleAddClick();
                }}
                disabled={titleInput.length <= 0}
              >
                اضافه
              </Button>
            </Grid>
          </Grid>
          {/*=== Input + Add Text ===*/}
        </CardContent>
      </Card>
    </Container>
  );
}
