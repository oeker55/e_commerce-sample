import React from 'react'
import {Routes, Route} from "react-router-dom"
import CssBaseline from "@mui/material/CssBaseline";
import GlobalStyles from "@mui/material/GlobalStyles";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import HomePage from './components/pages/HomePage'
import LaptopsPage from './components/pages/LaptopsPage'
import AddLaptopPage from './components/pages/AddLaptopPage'
import OthersPage from "./components/pages/OthersPage";


import AppBarComp from "./components/AppBarComp";
import FooterComp from "./components/FooterComp";
import HeaderComp from "./components/HeaderComp";
 


const App = () => {
  return (
    <div >
       <GlobalStyles
        styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }}
      />
      <CssBaseline />

      <AppBarComp />
      
      
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/laptops' element={<LaptopsPage/>}/>
        <Route path='/laptops/addNewLaptop' element={<AddLaptopPage/>}/>
        <Route path='/laptops/others' element={<OthersPage/>}/>
      </Routes>

      
      <FooterComp />
      
    </div>
  )
}

export default App