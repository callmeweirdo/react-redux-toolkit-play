import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { getUsers } from "../redux/features/UsersSlice";
import {
  Container,
  Box,
  Paper,
  Typography,
  TableContainer,
  TableBody,
  TableRow,
  TableCell,
  TableHead,
  Table,
  CircularProgress,
} from "@mui/material";

const UserList = () => {
  const allUsers = useSelector((state) => state["users"]);

  const dispatch = useDispatch();

  // const [state, setState] = useState({
  //   loading: false,
  //   users: [],
  //   errorMsg: "",
  // });

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const { users, loading, errorMsg } = allUsers;

  return (
    <>
      <Container>
        <Box
          sx={{
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            p: 2,
          }}
        >
          <Paper sx={{ p: 2 }}>
            <Typography variant="h3">User List</Typography>
            <Typography variant="body2">
              {" "}
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic
              optio amet doloremque quis similique quisquam! Optio
              exercitationem cupiditate delectus totam.{" "}
            </Typography>
          </Paper>
        </Box>
        <Box>
          <Paper>
            <Typography sx={{ textAlign: "center" }}>All Users</Typography>
            <Box>
              {loading && (
                <Box sx={{ textAlign: "center", p: 5 }}>
                  <CircularProgress />
                </Box>
              )}

              <TableContainer>
                <Table>
                  {users.length > 0 && (
                    <TableHead>
                      <TableRow>
                        <TableCell align="center">ID</TableCell>
                        <TableCell align="center">Name</TableCell>
                        <TableCell align="center">Email</TableCell>
                        <TableCell align="center">Username</TableCell>
                      </TableRow>
                    </TableHead>
                  )}
                  <TableBody>
                    {users.length > 0 &&
                      users.map((user) => (
                        <TableRow>
                          <TableCell align="center">{user.id}</TableCell>
                          <TableCell align="center">{user.name}</TableCell>
                          <TableCell align="center">{user.email}</TableCell>
                          <TableCell align="center">{user.username}</TableCell>
                        </TableRow>
                      ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
          </Paper>
        </Box>
      </Container>
    </>
  );
};

export default UserList;
