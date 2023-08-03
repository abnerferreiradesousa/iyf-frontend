"use client"
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineClose } from "react-icons/ai";
import styles from "./asidenavigation.module.css";

const AsideNavigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
      />

      <section 
        className={`
          ${styles.barMenu} 
          ${isMenuOpen ? styles.menuOpened : styles.menuClosed
          }`}
      >

        <section className={styles.closedContainer}>
          <AiOutlineClose
            style={{fontSize: '28px', color: "#F98988"}}
            className={styles.iconClosed}
            onClick={toggleMenu} 
          />
        </section>

        <section className={styles.navigationMenu}>
          <Link href="#" className={styles.navItem}>Institucional</Link>
          <Link href="#" className={styles.navItem}>Cultura</Link>
          <Link href="#" className={styles.navItem}>Educação</Link>
          <Link href="#" className={styles.navItem}>Social</Link>
        </section>

      </section>

    </aside>
  );
};

export default AsideNavigation;