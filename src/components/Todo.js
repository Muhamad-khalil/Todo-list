import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/GridLegacy";
import CheckIcon from "@mui/icons-material/Check";
import IconButton from "@mui/material/IconButton";
import ModeEditOutlinedIcon from "@mui/icons-material/ModeEditOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
const Todo = ({ Todo, handleCheck, handelDelete }) => {
  function handleCheckClick() {
    handleCheck(Todo.id);
  }
  function handleDeleteClick() {
    handelDelete(Todo.id);
  }

  return (
    <>
      {/* Card */}
      <Card
        sx={{
          minWidth: 275,
          backgroundColor: "#283593",
          color: "white",
          marginTop: 5,
        }}
        className="todoCard"
      >
        <CardContent>
          <Grid container>
            {/* Grid 1 */}
            <Grid xs={8}>
              <Typography
                variant="h5"
                component="div"
                sx={{ textAlign: "right" }}
              >
                {Todo.title}
              </Typography>
              <Typography
                variant="p"
                component="div"
                sx={{ textAlign: "right" }}
              >
                {Todo.details}
              </Typography>
            </Grid>
            {/*=== Grid 1 ===*/}
            {/* Grid 2 */}
            <Grid
              xs={4}
              display="flex"
              justifyContent="space-around"
              alignItems="center"
            >
              {/* checkButton */}
              <IconButton
                aria-label="delete"
                className="iconButton"
                style={{
                  color: Todo.isCompleted ? "white" : "#8bc34a",
                  background: Todo.isCompleted ? "#8bc34a" : "white",
                  border: "solid #8bc34a 3px",
                }}
                onClick={() => {
                  handleCheckClick();
                }}
              >
                <CheckIcon />
              </IconButton>
              {/*== checkButton ==*/}
              <IconButton
                aria-label="delete"
                className="iconButton"
                style={{
                  color: "#1769aa",
                  background: "white",
                  border: "solid #1769aa 3px",
                }}
              >
                <ModeEditOutlinedIcon />
              </IconButton>
              <IconButton
                aria-label="delete"
                className="iconButton"
                style={{
                  color: "#b23c17",
                  background: "white",
                  border: "solid #b23c17 3px",
                }}
                onClick={handleDeleteClick}
              >
                <DeleteOutlinedIcon />
              </IconButton>
            </Grid>
            {/*=== Grid 2 ===*/}
          </Grid>
        </CardContent>
      </Card>
      {/* Card */}
    </>
  );
};

export default Todo;
