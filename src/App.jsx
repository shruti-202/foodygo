import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./components/About/About";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import MainLayout from "./layout/MainLayout";
import Main from "./components/Main/Main";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
