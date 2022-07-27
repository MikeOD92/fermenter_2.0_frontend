import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Portal from "./pages/Portal";
import ProfilePage from "./pages/ProfilePage";
import Recipe from "./pages/RecipePage";
import RecipePage from "./pages/RecipePage";
import Friends from "./pages/Friends";

const App = () => {
  return (
    <div className="App">
      <main>
        <Header />
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/login"} element={<Portal />} />
          <Route path={"/recipe/:id"} element={<RecipePage />} />
          <Route path={"/:username"} element={<ProfilePage />} />
          <Route path={"/friends"} element={<Friends />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
