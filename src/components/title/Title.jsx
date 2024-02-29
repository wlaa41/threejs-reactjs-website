import { useTheme } from '@/context/ThemeContext';
import './Title.scss'

const Title = ( {name} ) => {
  const { isDarkMode } = useTheme();

  return (
    <div className={`title ${isDarkMode ? 'dark' : 'light'}`}><h2>
      {name? name: 'Just Another Amazing Page'} 
      </h2></div>
  );
};

export default Title;