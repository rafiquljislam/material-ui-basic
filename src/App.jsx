import {
  AppBar,
  Button,
  Container,
  Toolbar,
  Typography,
} from "@material-ui/core";
import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
const App = () => {
  return (
    <Container style={{ marginTop: "50px" }}>
      <AppBar>
        <Toolbar>
          <IconButton color="secondary">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">CWR</Typography>
          <Button color="secondary" variant="contained">
            Login
          </Button>
        </Toolbar>
      </AppBar>
      <Typography variant="h1">Hello World</Typography>
    </Container>
  );
};

export default App;
