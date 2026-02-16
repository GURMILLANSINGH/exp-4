import { useSelector } from "react-redux";
import ThemeCard from "./components/ThemeCard";

function App() {
  const darkMode = useSelector((state) => state.theme.darkMode);

  return (
    <div className={darkMode ? "dark" : "light"}>
      <header className="navbar">
        <h2>React Redux Lab</h2>
        <span className="username">User: Wandy</span>
        <span>Theme: {darkMode ? "Dark" : "Light"}</span>
      </header>

      <div className="content">
        <ThemeCard />
      </div>
    </div>
  );
}

export default App;
