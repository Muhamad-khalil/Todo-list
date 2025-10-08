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
import { useContext, useState } from "react";
import { TodosContext } from "../context/todosContext";

export default function TodoList() {
  const { todos, setTodos } = useContext(TodosContext);
  const [titleInput, setTitleInput] = useState(""); // TextField Input
  const todoJSX = todos.map((t) => {
    return <Todo todo={t} key={t.id} />;
  });

  // add text List
  function handleAddClick() {
    const newTodo = {
      id: uuidv4(),
      title: titleInput,
      details: "",
      isCompleted: false,
    };
    setTodos([...todos, newTodo]);
    setTitleInput("");
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
            // value={alignment}
            exclusive
            // onChange={handleAlignment}
            aria-label="text alignment"
            sx={{ marginTop: "30px" }}
          >
            <Typography>
              <ToggleButton value="right">
                <Typography variant="h6">الكل</Typography>
              </ToggleButton>
              <ToggleButton value="center">
                <Typography variant="h6">المنجزه</Typography>
              </ToggleButton>
              <ToggleButton value="left">
                <Typography variant="h6">الغير منجزه</Typography>
              </ToggleButton>
            </Typography>
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
