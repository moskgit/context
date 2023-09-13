import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Item from "./components/Item";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/post" element={<Item />} /> */}
          <Route path="/item" element={<Item />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
