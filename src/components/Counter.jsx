import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box, Button, Container, Paper, Typography } from "@mui/material";
import {
  increament,
  decreament,
  increamentBy,
} from "../redux/features/counterSlice";

const Counter = () => {
  const dispatch = useDispatch();

  const counter = useSelector((state) => state["counter"]);
  const { count } = counter;

  const onIncreament = () => {
    dispatch(increament());
  };

  const onDecreament = () => {
    dispatch(decreament());
  };

  const onIcreamentBy = () => {
    dispatch(increamentBy(101));
  };

  return (
    <>
      <Container>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Paper
            elevation={3}
            sx={{
              display: "flex",
              width: "60%",
              height: 300,
              mt: 5,
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
            }}
            mt="5"
          >
            <Typography sx={{ mb: 3 }} variant="h2">
              {count}
            </Typography>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "space-around",
              }}
            >
              <Button onClick={onIncreament} color="success" variant="text">
                Increment
              </Button>
              <Button onClick={onIcreamentBy} variant="contained">
                Contained
              </Button>
              <Button onClick={onDecreament} color="error" variant="outlined">
                decrement
              </Button>
            </Box>
          </Paper>
        </Box>
      </Container>
    </>
  );
};

export default Counter;
