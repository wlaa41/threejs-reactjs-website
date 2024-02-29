'use client';

import Link from 'next/link';
import ThemeToggleBtn from '@/components/header/ThemeToggleBtn';
import { useTheme } from '@/context/ThemeContext';
import './Footer.scss'

const Footer = () => {
  const { isDarkMode } = useTheme();

  return (
    <footer className={`footer-container ${isDarkMode ? 'dark' : 'light'}`}>
      <nav>
        <Link className='homenav-bar' href="/">Home</Link> |  
        <Link className='simulationnav-bar' href="/simulation">Simulation</Link> | 
         <Link className='aboutnav-bar' href="/about">About</Link>
      </nav>
      <ThemeToggleBtn />
    </footer>
  );
};

export default Footer;
