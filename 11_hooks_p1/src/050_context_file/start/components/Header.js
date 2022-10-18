import { useTheme } from '../context/ThemeContext';

const Header = () => {
  const [theme, setTheme] = useTheme();
  const THEMES = ['light', 'dark', 'red'];
  const changeTheme = (e) => setTheme(e.target.value);
  return (
    <header className={`content-${theme}`}>
      {THEMES.map((_theme) => {
        return (
          <label key={_theme}>
            <input
              key={_theme}
              value={_theme}
              checked={theme === _theme}
              type="radio"
              onChange={changeTheme}
            ></input>
            {_theme}
          </label>
        );
      })}
    </header>
  );
};

export default Header;
