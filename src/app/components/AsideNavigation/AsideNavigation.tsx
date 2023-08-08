"use client"
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineClose } from "react-icons/ai";
import "./asidenavigation.scss";

const AsideNavigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <aside className="lateral-menu">

      <Image
        src={'/assets/burguer-menu.png'}
        width={46}
        height={46}
        className="icon-menu" 
        alt=""
        onClick={toggleMenu} 
      />

      <section 
        className={`barra-menu ${isMenuOpen ? 'barra-menu-opened' : 'barra-menu-closed'}`}
      >

        <section className="icon-closed-container">
          <AiOutlineClose
            style={{fontSize: '52px', color: "#F98988"}}
            className="icon-closed"
            onClick={toggleMenu} 
          />
        </section>

        <section className="navigation-menu">
          <Link href="#" className="nav-item">Institucional</Link>
          <Link href="#" className="nav-item">Cultura</Link>
          <Link href="#" className="nav-item">Educação</Link>
          <Link href="#" className="nav-item">Social</Link>
        </section>

      </section>

    </aside>
  );
};

export default AsideNavigation;
