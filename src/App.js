import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Header/Header";
import Home from "./Home/Home";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
