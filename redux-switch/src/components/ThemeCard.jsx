import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../features/themeSlice";

const ThemeCard = () => {
  const darkMode = useSelector((state) => state.theme.darkMode);
  const dispatch = useDispatch();

  return (
    <div className="card">
      <h2>Theme Controller</h2>
      <button onClick={() => dispatch(toggleTheme())}>
        Toggle Theme
      </button>
    </div>
  );
};

export default ThemeCard;
