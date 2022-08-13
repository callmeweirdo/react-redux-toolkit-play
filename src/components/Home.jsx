import React from "react";
import { Box, Container, Paper, Typography } from "@mui/material";
import { maxWidth } from "@mui/system";

const Home = () => {
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
            }}
            maxWidth="lg"
            mt="5"
          >
            <Box
              component="img"
              variant="h1"
              src={`https://i.ytimg.com/vi/FMfL9tG4zeI/maxresdefault.jpg`}
              sx={{ width: "100%", backgroundPosition: "cover " }}
            />
          </Paper>
        </Box>
      </Container>
    </>
  );
};

export default Home;
