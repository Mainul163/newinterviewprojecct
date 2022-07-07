import "./App.css";

import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { CreateContainer, MainContainer } from "./components";
function App() {
  return (
    <AnimatePresence>
      <div className="w-screen h-auto flex flex-col bg bg-slate-100">
        <Header />
        <main className="w-full mt-24 p-8">
          <Routes>
            <Route path="/" element={<MainContainer />} />
            <Route path="/createItem" element={<CreateContainer />} />
          </Routes>
        </main>
      </div>
    </AnimatePresence>
  );
}

export default App;
