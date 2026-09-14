import React, { useEffect, useState } from 'react';
import { IoMdMenu, IoMdArrowDropdown } from "react-icons/io";
import { Link, NavLink, useLocation } from 'react-router-dom';
import { PiSignInFill } from "react-icons/pi";
import { FaUserPlus } from "react-icons/fa6";

const NavLinks = [
  { title: "Home", link: "/" },
  { title: "About", link: "/about" },
  { title: "Accessories", link: "/accessories" },
  { title: "Blog", link: "/blog" },
  { title: "Contact", link: "/contact" },
];

function BtmHeader() {
  const location = useLocation();
  const [categories, setCategories] = useState([]);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);

  useEffect(() => {
    setIsCategoryOpen(false);
  }, [location]);

  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div className="btm_header">
      <div className="container">
        <nav className="nav">
          
          {/* Categories Dropdown */}
          <div className="category_nav">
            <div
              className="category_btn"
              onClick={() => setIsCategoryOpen(!isCategoryOpen)}
            >
              <IoMdMenu />
              <p>Categories</p>
              <IoMdArrowDropdown />
            </div>

            <div className={`category_nav_list ${isCategoryOpen ? "active" : ""}`}>
              {categories.map((category) => (
                <Link key={category.slug || category} to={`/category/${category.slug || category}`}>
                  {category.name || category}
                </Link>
              ))}
            </div>
          </div>

          {/* Nav Links */}
          <ul className="nav_links">
            {NavLinks.map((item) => (
              <li key={item.link}>
                <NavLink 
                  to={item.link} 
                  end={item.link === "/"}
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  {item.title}
                </NavLink>
              </li>
            ))}
          </ul>

        </nav>

        {/* Auth Buttons */}
        <div className="sign_regs_icon">
          <Link to="/login">
            <PiSignInFill />
          </Link>

          <Link to="/register">
            <FaUserPlus />
          </Link>
        </div>

      </div>
    </div>
  );
}

export default BtmHeader;