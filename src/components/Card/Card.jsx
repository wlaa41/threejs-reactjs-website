import { useTheme } from '@/context/ThemeContext';
import './Card.scss'

const Card = ( {name} ) => {
  const { isDarkMode } = useTheme();

  return (
    <div className={`card ${isDarkMode ? 'dark' : 'light'}`}>
      {name} This card is on {isDarkMode ? 'dark mode' : 'light mode'}.
    </div>
  );
};

export default Card;