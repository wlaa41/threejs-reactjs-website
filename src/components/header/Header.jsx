'use client';

import Link from 'next/link';
import ThemeToggleBtn from '@/components/header/ThemeToggleBtn';
import './Header.scss'

const Header = () => {
  // const { theme, toggleTheme } = useTheme();

  return (
    <header className='header-container'>
      <nav>
        <Link className='homenav-bar' href="/">Home</Link> |  
        <Link className='simulationnav-bar' href="/simulation">Simulation</Link> | 
         <Link className='voronoinav-bar' href="/voronoi">Voronoi</Link>| 
         <Link className='voronoinav-bar' href="threejs-fiber">Threejs/Fiber</Link>| 
         <Link className='aboutnav-bar' href="/about">About</Link>
      </nav>
      <ThemeToggleBtn />
    </header>
  );
};

export default Header;
