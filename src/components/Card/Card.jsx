import { useTheme } from '@/context/ThemeContext';
import './Card.scss'

const Card = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className={`card ${isDarkMode ? 'dark' : 'light'}`}>
      This card is on {isDarkMode ? 'dark mode' : 'light mode'}.
    </div>
  );
};

export default Card;