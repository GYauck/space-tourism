import { Route, Routes } from "react-router-dom";
import Destination from "./Pages/Destination/Destination";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/destination" element={<Destination />} />
    </Routes>
  );
}

export default App;
