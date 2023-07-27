"use client"
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import "./header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <aside className="lateral-menu">
      
      <div>
        <FaBars
          style={{fontSize: '24px', color: "white"}}
          className="icon-menu" 
          onClick={toggleMenu} 
        />
      </div>

      <div className={`barra-menu ${isMenuOpen ? 'barra-menu-opened' : 'barra-menu-closed'}`}>
        
        <AiOutlineClose
          style={{fontSize: '24px', color: "#F98988"}}
          className="icon-closed"
          onClick={toggleMenu} 
        />

        <ul className="navigation-list">
          <li className="item"><a href="#">Institucional</a></li>
          <li><a href="#">Cultura</a></li>
          <li><a href="#">Educação</a></li>
          <li><a href="#">Social</a></li>
        </ul>

      </div>

    </aside>
  );
};

export default Header;
