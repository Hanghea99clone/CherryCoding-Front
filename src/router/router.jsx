import { BrowserRouter, Route, Routes } from "react-router-dom";
import Curriculum from "../pages/Curriculum";
import Home from "../pages/Home";
import Detail from "../pages/Detail";
import Mypage from "../pages/Mypage";
import Notfound from "../pages/Notfound";
import Signup from "../pages/Signup";
import Registration from "../pages/Registration";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Notfound />} />
        <Route path="/" element={<Home />} />
        <Route path="/curriculum" element={<Curriculum />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/mypage/:id" element={<Mypage />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
