import { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import PriceList from "./components/PriceList/PriceList";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <h1 className="text-7xl text-purple-600">hello from tailwind</h1>
      <PriceList></PriceList>
    </>
  );
}

export default App;
