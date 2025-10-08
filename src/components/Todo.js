import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/GridLegacy";
import CheckIcon from "@mui/icons-material/Check";
import IconButton from "@mui/material/IconButton";
import ModeEditOutlinedIcon from "@mui/icons-material/ModeEditOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

// hooks
import { useContext } from "react";
import { TodosContext } from "../context/todosContext";
const Todo = ({ todo }) => {
  const [showDeleteDialog, setshowDeleteDialog] = useState(false);
  const { todos, setTodos } = useContext(TodosContext);
  // Event Handlers
  function handleCheckClick() {
    const updatedTodo = todos.map((t) => {
      if (t.id == todo.id) {
        t.isCompleted = !t.isCompleted;
      }
      return t;
    });
    setTodos(updatedTodo);
  }
  function handleDeleteClick() {
    const updatedTodo = todos.filter((t) => {
      return t.id !== todo.id;
    });
    setTodos(updatedTodo);
  }

  // show Dialog function
  const handleClickOpen = () => {
    setshowDeleteDialog(true);
  };

  const handleClose = () => {
    setshowDeleteDialog(false);
  };
  // ==== show Dialog function ====
  // Event Handlers
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
                {todo.title}
              </Typography>
              <Typography
                variant="p"
                component="div"
                sx={{ textAlign: "right" }}
              >
                {todo.details}
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

              {/* Delele Dialog */}
              <>
                {/* delete icon */}
                <IconButton
                  aria-label="delete"
                  className="iconButton"
                  style={{
                    color: "#b23c17",
                    background: "white",
                    border: "solid #b23c17 3px",
                  }}
                  onClick={handleClickOpen}
                >
                  <DeleteOutlinedIcon />
                </IconButton>
                {/*== delete icon ==*/}
                <Dialog
                  style={{ direction: "rtl" }}
                  onClose={handleClose}
                  open={showDeleteDialog}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description"
                >
                  <DialogTitle id="alert-dialog-title">
                    "هل انت متاكد من رغبتك في حذف هذا النموزج"
                  </DialogTitle>
                  <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                      اذا تم حذف النموذج لا يمكن ارجاعه
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleClose}>اغلاق</Button>
                    <Button onClick={handleDeleteClick} autoFocus>
                      نعم, قم بالحذف
                    </Button>
                  </DialogActions>
                </Dialog>
              </>
              {/*=== Delele Dialog ===*/}
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
