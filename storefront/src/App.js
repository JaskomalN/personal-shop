import Header from "./comps/Header"
import React from "react";
import {Route, Routes} from 'react-router-dom'
import Home from "./comps/Home";
import Add_Item from "./comps/Add_Item";
import Items from "./comps/Item/Items";
import About from "./comps/About";
import Item_Info from "./comps/Item/Item_Info";

function App() {
  return( <React.Fragment>
    <header>
      <Header />
    </header>
    <main>
      <Routes>
        <Route path= "/" element={<Home/>} exact/>
        <Route path= "/add" element={<Add_Item/>} exact/>
        <Route path= "/shop" element={<Items/>} exact/>
        <Route path= "/about" element={<About/>} exact/>
        <Route path= "/shop/:id" element={<Item_Info/>} exact/>
      </Routes>
    </main>
  </React.Fragment>
  );
}

export default App;
