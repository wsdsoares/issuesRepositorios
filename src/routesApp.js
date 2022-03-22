import React from "react";

import {Routes, Route} from 'react-router-dom';
import Main from "./Pages/Main";
import Repositorio from "./Pages/Repositorio";

export default function RoutesApp(){
  return(
      <Routes>
        <Route path="/" element={ <Main />}/>
        <Route path="/repositorio/:repositorio" element={ <Repositorio />} />
      </Routes>
);
}