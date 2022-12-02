import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import "./Search.css";
import { Button } from "@mui/material";

function Search() {
  const [input, setInput] = useState("");

  const search = (e) => {
    e.preventDefault();
    console.log("you hit search button");
  };

  return (
    <form className="search">
      <div className="search__input">
        <SearchIcon onClick={search} className="search__inputIcon" />
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <MicIcon className="MicIcon" />
      </div>
      <div className="search__buttons">
        <Button onClick={search} variant="outlined">
          Google Search
        </Button>
        <Button variant="outlined">I'm Feeling Lucky</Button>
      </div>
    </form>
  );
}

export default Search;
