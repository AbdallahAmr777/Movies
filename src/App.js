import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// components
import Header from "./component/Header";
import Add from "./component/Add";
import Watched from "./component/Watched";
import WatchList from "./component/WatchList";
import ContextProvider from "./component/context/GlobalContext";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <ContextProvider>
          <Header />
          <Routes>
            <Route path="/" element={<WatchList />} />
            <Route path="/watched" element={<Watched />} />
            <Route path="/add" element={<Add />} />
          </Routes>
        </ContextProvider>
      </Router>
    </div>
  );
}

export default App;
