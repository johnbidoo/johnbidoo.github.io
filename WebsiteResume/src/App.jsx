import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./navbar";

import Home from "./pages/Home";
import Goals from "./pages/Goals";

function App() {
  return (
    <BrowserRouter>
      <div className="app">

        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />

          {/* Goals page */}
          <Route path="/goals" element={<Goals />} />
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;