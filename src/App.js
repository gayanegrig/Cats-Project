import "./App.scss";
import { MainContent } from "./components/maincontent/mainContent";
import { Sidebar } from "./components/sidebar/sidebar";
import { Route } from "react-router";
import { Routes } from "react-router-dom";
import { ShowCats } from "./components/showCats/showCats";

function App() {
  return (
    <div className="container-main">
      <Sidebar />
      <Routes>
        <Route strict exact path="/:id" element={<ShowCats />} />
        <Route strict exact path="/" element={<MainContent />} />
      </Routes>
    </div>
  );
}

export default App;
