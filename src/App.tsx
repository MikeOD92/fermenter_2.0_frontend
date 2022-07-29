import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Portal from "./pages/Portal";
import ProfilePage from "./pages/ProfilePage";
import RecipePage from "./pages/RecipePage";
import Friends from "./pages/Friends";
import NewRecipe from "./pages/NewRecipe";

const App = () => {
  return (
    <div className="App">
      <main>
        <Header />
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/login"} element={<Portal />} />
          <Route path={"/recipe/:id"} element={<RecipePage />} />
          <Route path={"/friends"} element={<Friends />} />
          <Route path={"/new-recipe"} element={<NewRecipe />} />
          <Route path={"/:username"} element={<ProfilePage />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
