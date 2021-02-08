import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import {
  makeStyles,
  ThemeProvider,
  createMuiTheme,
} from "@material-ui/core/styles";
import { Button, Typography } from "@material-ui/core";
import { orange } from "@material-ui/core/colors";

const useStyle = makeStyles({
  root: {
    background: "linear-gradient(45deg, #333, #000)",
    border: 0,
    borderRadius: 15,
    color: "white",
    padding: "0,30px",
  },
});

const theme = createMuiTheme({
  palette: {
    Typography: {
      h2: {
        fontSize: 38,
      },
    },
    primary: {
      main: orange[500],
    },
    secondary: {
      main: orange[400],
    },
  },
});

const App = () => {
  const classes = useStyle();
  const [text, setText] = useState("initialState");
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Button className={classes.root}>Text style</Button>
        <TextField
          variant="outlined"
          color="primary"
          type="time"
          onChange={(e) => setText(e.target.value)}
        />
        <h1>{text}</h1>
        <Button variant="contained" color="primary">
          Hello World
        </Button>
        <Typography variant="h4" component="div">
          Hello World I am CodeWithRafiq
        </Typography>
      </div>
    </ThemeProvider>
  );
};

export default App;
