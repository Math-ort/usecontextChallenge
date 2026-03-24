import { useTheme } from "../themes/ThemeContext";
const Button = () => {
  

    const { theme, toggleTheme } = useTheme();
  
    return (
      <button className= "button" onClick={toggleTheme}> 
        Cambiar a {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>
    ); 
}

export default Button;