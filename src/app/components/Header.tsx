"use client"
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import "./Header.css";
import Image from "next/image";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <aside>
      {/* <Image
        width={100}
        height={100}
        src="/facebook.png"
        alt="logo"
      /> */}

      <div >
        <FaBars style={{fontSize: '24px'}} className="icon-menu" onClick={toggleMenu} />
      </div>

      <div className={`barra-menu ${isMenuOpen ? 'barra-menu-opened' : 'barra-menu-closed'}`}>
        <button type="button" onClick={toggleMenu}>X</button>
        <ul>
          <li><a href="#">Institucional</a></li>
          <li><a href="#">Cultura</a></li>
          <li><a href="#">Educação</a></li>
          <li><a href="#">Social</a></li>
        </ul>
      </div>

    </aside>
  );
};

export default Header;
