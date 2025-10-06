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

//other
import { v4 as uuidv4 } from "uuid";

const Todos = [
  {
    id: uuidv4(),
    title: "قرأه كتاب",
    details: "سيبه سخيهاسهيبهساتيب تنسيخهعب",
    isCompleted: false,
  },
  {
    id: uuidv4(),
    title: "بسم الله",
    details: "سيح الله قول سبحان الله ",
    isCompleted: false,
  },
  {
    id: uuidv4(),
    title: "اهلا بكم",
    details: "عزيزي المشاهد اهلا بك في الاكاديمه العربي",
    isCompleted: false,
  },
];
export default function TodoList() {
  const TodoJSX = Todos.map((t) => {
    return <Todo title={t.title} details={t.details} key={t.id}/>;
  });

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
          {TodoJSX}
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
