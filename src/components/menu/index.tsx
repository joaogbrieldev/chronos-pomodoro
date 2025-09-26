import {
  HistoryIcon,
  HouseIcon,
  MoonIcon,
  SettingsIcon,
  SunIcon,
} from 'lucide-react';
import { useEffect, useState } from 'react';
import styles from './styles.module.css';

type AvailableThemes = 'dark' | 'light';

export function Menu() {
  const [theme, setTheme] = useState<AvailableThemes>(() => {
    const storedTheme = localStorage.getItem('theme');
    return (storedTheme as AvailableThemes) || 'dark';
  });
  function toggleDarkMode(ev: React.MouseEvent<HTMLAnchorElement>) {
    ev.preventDefault();
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);
  return (
    <nav className={styles.menu}>
      <a
        className={styles.menuLink}
        href='/'
        aria-label='Ir para a home'
        title='Ir para a home'
      >
        <HouseIcon />
      </a>
      <a
        className={styles.menuLink}
        href='/'
        aria-label='Ir para o histórico'
        title='Ir para o histórico'
      >
        <HistoryIcon />
      </a>
      <a
        className={styles.menuLink}
        href='/'
        aria-label='Ir para as configurações'
        title='Ir para as configurações'
      >
        <SettingsIcon />
      </a>
      <a
        className={styles.menuLink}
        href='#'
        onClick={toggleDarkMode}
        aria-label='Alternar entre o modo claro e escuro'
        title='Alternar entre o modo claro e escuro'
      >
        {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
      </a>
    </nav>
  );
}
