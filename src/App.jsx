import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./components/About/About";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import MainLayout from "./layout/MainLayout";
import Main from "./components/Main/Main";
import RestaurantMenu from "./components/RestaurantMenu/RestaurantMenu";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/restaurant/:resId" element={<RestaurantMenu />} />
          <Route path="/*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
