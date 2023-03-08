import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from "./components/Header";
import { Menu } from "./components/Menu";
import { All } from "./routes/All";
import { Create } from "./routes/Create";
import { Home } from "./routes/Home";
import { Practice } from "./routes/Practice";


function App() {
  const [menu, setMenu] = useState(false)

  const onHandleMenu = () => {
    setMenu(!menu)
  }

  return (
    <BrowserRouter>
      <div className="dark:bg-gray-900 transition-colors">

        <Header setMenu={onHandleMenu} menuState={menu} />
        <Menu menuState={menu} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/all" element={<All />} />
          <Route path="/practice" element={<Practice />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;