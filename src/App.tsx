import { useState } from 'react';

import Header from "./Components/Header";

import {BrowserRouter, Routes, Route} from "react-router-dom";
import "./App.css";

import AboutUs from "./Pages/AboutUs";
import Game from "./Pages/Game";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import Tutorial from "./Pages/Tutorial";

function App() {
  const [names, setNames] = useState<string[]>([]);

  function setNewName(pname: string){
    setNames([pname, ...names]);
  }

  function deleteName(pname: string){
      setNames(names.filter(name => name !== pname));
  }

  return (
    <div className="vh-100">
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Header />} >
          <Route index 
            element={
            <Home 
              names={names}
              deleteName={deleteName}
              setNewName={setNewName}
            />}
          />
          <Route path="game" element={<Game players={names}/>} />
          <Route path="about" element={<AboutUs />} />
          <Route path="tutorial" element={<Tutorial />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
