import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Portal from "./pages/Portal";
import ProfilePage from "./pages/ProfilePage";

const App = () => {
  return (
    <div className="App">
      <main>
        <Header />
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/login"} element={<Portal />} />
          <Route path={"/:username"} element={<ProfilePage />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
