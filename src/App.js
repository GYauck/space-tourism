import { Route, Routes } from "react-router-dom";
import Crew from "./Pages/Crew/Crew";
import Destination from "./Pages/Destination/Destination";
import Home from "./Pages/Home/Home";
import Technology from "./Pages/Technology/Technology";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/destination" element={<Destination />} />
      <Route path="/crew" element={<Crew />} />
      <Route path="/technology" element={<Technology />} />
    </Routes>
  );
}

export default App;
