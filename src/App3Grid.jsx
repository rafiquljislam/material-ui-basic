import { Container, Grid, Paper, Typography } from "@material-ui/core";
import React from "react";

const App = () => {
  return (
    <Container
      maxWidth="lg"
      style={{ backgroundColor: "black", color: "white" }}
    >
      <Grid spacing={10} justify="center" container md={12}>
        <Grid item md={4} xs={12}>
          <Paper
            style={{
              width: "100%",
              height: "100px",
              backgroundColor: "red",
            }}
          />
        </Grid>
      </Grid>
      <Typography variant="h2">Hello World</Typography>
    </Container>
  );
};

export default App;
