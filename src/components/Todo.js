import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/GridLegacy";
import CheckIcon from "@mui/icons-material/Check";
import IconButton from "@mui/material/IconButton";
import ModeEditOutlinedIcon from "@mui/icons-material/ModeEditOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
const Todo = () => {
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
                المهمه الاولي
              </Typography>
              <Typography
                variant="p"
                component="div"
                sx={{ textAlign: "right" }}
              >
                التفاصيل الخاصه بالمهمه الاولي
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
              <IconButton aria-label="delete" size="small">
                <CheckIcon
                  className="iconButton"
                  fontSize="large"
                  style={{
                    color: "#8bc34a",
                    background: "white",
                    border: "solid #8bc34a 3px",
                    borderRadius: "50%",
                  }}
                />
              </IconButton>
              <IconButton aria-label="delete" size="small">
                <ModeEditOutlinedIcon
                  className="iconButton"
                  fontSize="large"
                  style={{
                    color: "#1769aa",
                    background: "white",
                    border: "solid #1769aa 3px",
                    borderRadius: "50%",
                  }}
                />
              </IconButton>
              <IconButton aria-label="delete" size="small">
                <DeleteOutlinedIcon
                  className="iconButton"
                  fontSize="large"
                  style={{
                    color: "#b23c17",
                    background: "white",
                    border: "solid #b23c17 3px",
                    borderRadius: "50%",
                  }}
                />
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
