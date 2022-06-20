import { useState } from "react";
import "./App.css";
import { useForm } from "react-hook-form";
import Header from "./components/Header";
function App() {
  return (
    <div className="w-screen h-auto flex flex-col">
      <Header />
    </div>
  );
}

export default App;
