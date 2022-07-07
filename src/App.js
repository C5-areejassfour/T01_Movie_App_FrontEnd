import "./App.css";
import { Route, Routes } from "react-router-dom";
import Nav from "./Nav";
import Movies from "./Moves";
import More from "./More";
import Fav from "./Fav";
import React, { useEffect, useState } from "react";

function App() {
  const [fav, setFav] = useState([]);
  return (
    <div className="App">
      <Nav fav={fav} />

   
      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="/more/:id" element={<More  fav={fav} setFav={setFav} />} />
        <Route path="/fav" element={<Fav  fav={fav} setFav={setFav}/>} />

      </Routes>
    </div>
  );
}
export default App;
