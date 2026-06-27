import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./navbar";
import Home from "./pages/Home";
import Goals from "./pages/Goals";
import ScrollToTop from "./scroll";

function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <div className="app">

        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/Goals" element={<Goals />} />
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;