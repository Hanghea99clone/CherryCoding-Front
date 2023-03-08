import { BrowserRouter, Route, Routes } from "react-router-dom";
import Curriculum from "../pages/Curriculum";
import Home from "../pages/Home";
import Detail from "../pages/Detail";
import Mypage from "../pages/Mypage";
import Notfound from "../pages/Notfound";
import Signup from "../pages/Signup";
import Registration from "../pages/Registration";
import Fixcurriculum from "../pages/Fixcurriculum";
import Checkout from "../components/Checkout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fixcurriculum/:id" element={<Fixcurriculum />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/curriculum" element={<Curriculum />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
