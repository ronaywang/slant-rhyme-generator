import logo from "./logo.svg";
import "./App.css";
import * as React from "react";
import { TextField, Typography, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

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
          Rhymes Always Poppin'
        </Typography>
        <div className="search">
          <TextField id="filled-basic" label="Word to rhyme" variant="filled" />
          <Button
            variant="contained"
            endIcon={<SearchIcon></SearchIcon>}
            style={{ margin: "10px" }}
          >
            rhyme
          </Button>
        </div>
      </header>
    </div>
  );
}
