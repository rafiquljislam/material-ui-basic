import { Button, ButtonGroup } from "@material-ui/core";
import React from "react";
import SaveIcon from "@material-ui/icons/Save";

const App = () => {
  return (
    <div>
      <ButtonGroup>
        <Button
          onClick={() => alert("Hello World")}
          variant="contained"
          color="secondary"
          size="medium"
          // disabled
          style={{
            color: "white",
          }}
          startIcon={<SaveIcon />}
          endIcon={<SaveIcon />}
        >
          Hellow World
        </Button>
        <Button
          onClick={() => alert("Hello World")}
          variant="contained"
          color="secondary"
          size="medium"
          // disabled
          style={{
            color: "white",
          }}
          startIcon={<SaveIcon />}
          endIcon={<SaveIcon />}
        >
          Hellow World
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default App;
