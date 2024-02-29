import Link from 'next/link';



const Header = () => {
  // const { theme, toggleTheme } = useTheme();

  return (
    <header>
      <nav>
        <Link href="/">Home</Link> | <Link href="/about">About</Link>
      </nav>
      {/* <button onClick={toggleTheme}>
        {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
      </button> */}
    </header>
  );
};

export default Header;
