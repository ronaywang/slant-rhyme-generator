import logo from "./logo.svg";
import "./App.css";
import * as React from "react";
import { TextField, Typography } from "@mui/material";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Typography
          variant="h3"
          style={{
            color: "#1565c0",
            margin: "20px",
            fontFamily: "Nanum Pen Script",
          }}
        >
          Write better raps
        </Typography>
        <TextField id="filled-basic" label="Word to rhyme" variant="filled" />
      </header>
    </div>
  );
}
