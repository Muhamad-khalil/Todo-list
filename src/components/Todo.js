// ==============================
// 🧱 MUI Components
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/GridLegacy";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
// ==============================

// ==============================
// 🧭 MUI Icons
import CheckIcon from "@mui/icons-material/Check";
import ModeEditOutlinedIcon from "@mui/icons-material/ModeEditOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
// ==============================

// ==============================
// 📦 React Hooks
import { useState, useContext } from "react";
// ==============================

// ==============================
// 🧠 Context
import { TodosContext } from "../context/todosContext";
// ==============================

// ==============================
// 📝 Todo Component
// ==============================
const Todo = ({ todo }) => {
  // show or hide the delete confirmation window.
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);

  // show or hide the Update window.
  const [showUpdateDialog, setShowUpdateDialog] = useState(false);

  // const [showUpdateDialog, setShowUpdateDialog] = useState(false);
  const [updateTodo, setUpdateTodo] = useState({
    title: todo.title,
    details: todo.details,
  });

  // Context
  const { todos, setTodos } = useContext(TodosContext);

  // ==============================
  // 📌 Show & Hide Delete dialog
  // ==============================
  const handleDeleteOpen = () => setShowDeleteDialog(true);
  const handleDeleteClose = () => setShowDeleteDialog(false);
  // ==============================
  // 📌 Show & Hide Delete dialog
  // ==============================
  const handleUpdateOpen = () => setShowUpdateDialog(true);
  const handleUpdeteClose = () => setShowUpdateDialog(false);
  // ==============================
  // ✅ Toggle check
  // ==============================
  function handleCheckClick() {
    const updatedTodos = todos.map((t) => {
      if (t.id === todo.id) {
        t.isCompleted = !t.isCompleted;
      }
      return t;
    });
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos)); // strong todos with browser
  }

  // ==============================
  // 🗑️ Delete todo
  // ==============================
  function handleDeleteClick() {
    const updatedTodos = todos.filter((t) => t.id !== todo.id);
    setTodos(updatedTodos);
    setShowDeleteDialog(false);
    localStorage.setItem("todos", JSON.stringify(updatedTodos)); // strong todos with browser
  }
  // ==============================
  // 🗑️ Update todo
  // ==============================
  function handleSaveEdit() {
    const updatedTodos = todos.map((t) => {
      if (t.id == todo.id) {
        return { ...t, title: updateTodo.title, details: updateTodo.details };
      }
      return t;
    });
    setTodos(updatedTodos);
    setShowUpdateDialog(false);
    localStorage.setItem("todos", JSON.stringify(updatedTodos)); // strong todos with browser
  }

  return (
    <>
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
            {/*📃📃📃📃 Address and details 📃📃📃📃*/}
            <Grid xs={8}>
              <Typography
                variant="h5"
                component="div"
                sx={{
                  textAlign: "right",
                  textDecoration: todo.isCompleted ? "line-through" : "none",
                }}
              >
                {todo.title}
              </Typography>
              <Typography
                variant="body2"
                component="div"
                sx={{ textAlign: "right" }}
              >
                {todo.details}
              </Typography>
            </Grid>
            {/*📃📃📃📃 Address and details 📃📃📃📃*/}

            <Grid
              xs={4}
              display="flex"
              justifyContent="space-around"
              alignItems="center"
            >
              {/* ✅✅✅ Check button ✅✅✅*/}
              <IconButton
                aria-label="check"
                className="iconButton"
                style={{
                  color: todo.isCompleted ? "white" : "#8bc34a",
                  background: todo.isCompleted ? "#8bc34a" : "white",
                  border: "solid #8bc34a 3px",
                }}
                onClick={handleCheckClick}
              >
                <CheckIcon />
              </IconButton>
              {/* ✅✅✅ Check button ✅✅✅*/}

              {/*✏️✏️✏️  update button  ✏️✏️✏️*/}
              <IconButton
                aria-label="edit"
                className="iconButton"
                style={{
                  color: "#1769aa",
                  background: "white",
                  border: "solid #1769aa 3px",
                }}
                onClick={(e) => {
                  e.currentTarget.blur();
                  handleUpdateOpen();
                }}
              >
                <ModeEditOutlinedIcon />
              </IconButton>
              {/*✏️✏️✏️  update button  ✏️✏️✏️*/}

              {/*🗑️🗑️🗑️  delete button  🗑️🗑️🗑️*/}
              <IconButton
                aria-label="delete"
                className="iconButton"
                style={{
                  color: "#b23c17",
                  background: "white",
                  border: "solid #b23c17 3px",
                }}
                onClick={(e) => {
                  e.currentTarget.blur();
                  handleDeleteOpen();
                }}
              >
                <DeleteOutlinedIcon />
              </IconButton>
              {/*🗑️🗑️🗑️  delete  button  🗑️🗑️🗑️*/}

              {/* ✏️✏️✏️ Update Dialog ✏️✏️✏️*/}
              <Dialog
                style={{ direction: "rtl" }}
                onClose={handleUpdeteClose}
                open={showUpdateDialog}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <DialogTitle id="alert-dialog-title">
                  هل انت متاكد من تعديل النموذج؟
                </DialogTitle>
                <DialogContent>
                  <TextField
                    margin="dense"
                    label="عنوان المهمه"
                    fullWidth
                    variant="standard"
                    value={updateTodo.title}
                    onChange={(e) => {
                      setUpdateTodo({ ...updateTodo, title: e.target.value });
                    }}
                  />
                  <TextField
                    margin="dense"
                    label="التفاصيل"
                    fullWidth
                    variant="standard"
                    value={updateTodo.details}
                    onChange={(e) => {
                      setUpdateTodo({
                        ...updateTodo,
                        details: e.target.value,
                      });
                    }}
                  />
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleUpdeteClose}>اغلاق</Button>
                  <Button onClick={handleSaveEdit} autoFocus>
                    نعم, قم بالتعديل
                  </Button>
                </DialogActions>
              </Dialog>
              {/* ✏️✏️✏️ Update Dialog ✏️✏️✏️*/}

              {/* 🗑️🗑️🗑️ Delete Dialog 🗑️🗑️🗑️*/}
              <Dialog
                style={{ direction: "rtl" }}
                onClose={handleDeleteClose}
                open={showDeleteDialog}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <DialogTitle id="alert-dialog-title">
                  هل انت متاكد من رغبتك في حذف هذا النموذج؟
                </DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-description">
                    اذا تم حذف النموذج لا يمكن ارجاعه
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleDeleteClose}>اغلاق</Button>
                  <Button onClick={handleDeleteClick} autoFocus>
                    نعم, قم بالحذف
                  </Button>
                </DialogActions>
              </Dialog>
              {/* 🗑️🗑️🗑️ Delete Dialog 🗑️🗑️🗑️*/}
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
};

export default Todo;
