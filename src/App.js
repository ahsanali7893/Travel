import { BrowserRouter, Routes, Route } from "react-router-dom";
import Service from "./components/routes/Service";
import About from "./components/routes/About";
import Contact from "./components/routes/Contact";

import Home from "./components/routes/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />

          <Route exact path="/about" element={<About />} />

          <Route exact path="/service" element={<Service />} />

          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
