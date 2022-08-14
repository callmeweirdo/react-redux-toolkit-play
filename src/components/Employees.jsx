import React, { useState } from "react";
import { selectedEmployee } from "../redux/features/employeesSlice";
import { useSelector, useDispatch } from "react-redux";
import {
  Container,
  Box,
  Typography,
  Grid,
  Stack,
  ListItem,
  ListItemButton,
  ListItemText,
  List,
  ListItemIcon,
  Checkbox,
  Paper,
  Divider,
} from "@mui/material";
import { Favorite, FavoriteBorder } from "@mui/icons-material";

import { employeeService } from "../services/employeeService";

const Employees = () => {
  const employeesData = useSelector((state) => {
    return state["employees"];
  });

  const dispatch = useDispatch();

  let { employees } = employeesData;

  const handleChange = (id) => {
    dispatch(selectedEmployee(id));
  };

  return (
    <>
      <Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            textAlign: "center",
          }}
          elevation={3}
        >
          <Typography sx={{ mt: 2 }} variant="h3">
            Employees
          </Typography>
          <Typography variant="body2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
            temporibus minima veritatis neque explicabo voluptate, magni, facere
            laudantium amet quibusdam officia dicta ad voluptas reprehenderit
            totam hic inventore, architecto placeat!
          </Typography>
        </Box>

        <Box mt={2}>
          <pre>{JSON.stringify(employees)}</pre>
          <Grid container spacing={2} sx={{ alignItems: "center" }}>
            <Grid item md={4}>
              <Box sx={{ width: "100%" }}>
                <Stack spacing={2}>
                  <List>
                    {employees.map((employee) => (
                      <ListItem key={employee.id}>
                        <ListItemButton>
                          <ListItemIcon>
                            <Checkbox
                              checked={employee.isSelected}
                              edge="start"
                              onChange={() => handleChange(employee.id)}
                              icon={<FavoriteBorder />}
                              checkedIcon={<Favorite />}
                              sx={{
                                "&.Mui-checked": { color: "red" },
                              }}
                            />
                          </ListItemIcon>
                          <ListItemText>{employee.name}</ListItemText>
                        </ListItemButton>
                      </ListItem>
                    ))}
                  </List>
                </Stack>
              </Box>
            </Grid>
            <Grid item md={8}>
              <Stack
                spacing={0.5}
                divider={<Divider orientation="horizontal" />}
              >
                {employees.length > 0 &&
                  employees.map(
                    (employee) =>
                      employee.isSelected && (
                        <Paper elevation={2} sx={{ p: 2 }} key={employee.id}>
                          <Typography>{employee.name}</Typography>
                        </Paper>
                      )
                  )}
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default Employees;
