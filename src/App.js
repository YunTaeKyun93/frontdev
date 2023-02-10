import { Routes, Route } from "react-router-dom";
import "./App.css";
import MainPage from "./pages/main-page/index";
import UPassPage from './pages/u-pass-page/index';
import ZeroPassPage from './pages/zero-pass-page/index';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/u-pass" element={<UPassPage />} />
        <Route path="/zero-pass" element={<ZeroPassPage />} />
      </Routes>
    </div>
  );
}

export default App;
