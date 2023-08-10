'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AiOutlineClose } from 'react-icons/ai';
import styles from './asidenavigation.module.css';

const AsideNavigation = ({ color }: { color: string }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHover1, setIsHover1] = useState(false);
  const [isHover2, setIsHover2] = useState(false);
  const [isHover3, setIsHover3] = useState(false);
  const [isHover4, setIsHover4] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <aside className={styles.lateralMenu}>
      <Image
        src={'/assets/burguer-menu.png'}
        width={26}
        height={26}
        className={styles.iconMenu}
        alt="Logo do International Youth Fellowship"
        onClick={toggleMenu}
        style={{ width: '35%', height: '39%' }}
      />

      <section
        className={`
          ${styles.barMenu} 
          ${isMenuOpen ? styles.menuOpened : styles.menuClosed}`}
      >
        <section className={styles.closedContainer}>
          <AiOutlineClose
            style={{ fontSize: '28px', color: color }}
            className={styles.iconClosed}
            onClick={toggleMenu}
          />
        </section>

        <section className={styles.navigationMenu}>
          <Link
            style={{
              color: isHover1 ? '#fff' : color,
              backgroundColor: isHover1 ? color : '',
            }}
            onMouseEnter={() => setIsHover1(!isHover1)}
            onMouseLeave={() => setIsHover1(!isHover1)}
            href="#"
            className={styles.navItem}
          >
            Institucional
          </Link>
          <Link
            style={{
              color: isHover2 ? '#fff' : color,
              backgroundColor: isHover2 ? color : '',
            }}
            onMouseEnter={() => setIsHover2(!isHover2)}
            onMouseLeave={() => setIsHover2(!isHover2)}
            href="#"
            className={styles.navItem}
          >
            Cultura
          </Link>
          <Link
            style={{
              color: isHover3 ? '#fff' : color,
              backgroundColor: isHover3 ? color : '',
            }}
            onMouseEnter={() => setIsHover3(!isHover3)}
            onMouseLeave={() => setIsHover3(!isHover3)}
            href="#"
            className={styles.navItem}
          >
            Educação
          </Link>
          <Link
            style={{
              color: isHover4 ? '#fff' : color,
              backgroundColor: isHover4 ? color : '',
            }}
            onMouseEnter={() => setIsHover4(!isHover4)}
            onMouseLeave={() => setIsHover4(!isHover4)}
            href="#"
            className={styles.navItem}
          >
            Social
          </Link>
        </section>
      </section>
    </aside>
  );
};

export default AsideNavigation;
