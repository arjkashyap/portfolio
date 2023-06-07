import * as React from "react";
import { Link } from "gatsby";
import {
  navLinks,
  navLinkItem,
  navLinkText,
} from "../styles/navbar.module.css";

const Navbar = () => (
  <nav>
    <ul className={navLinks}>
      <li className={navLinkItem}>
        <Link to="/" className={navLinkText}>
          Home
        </Link>
      </li>
      <li className={navLinkItem}>
        <Link to="/contact" className={navLinkText}>
          Contact
        </Link>
      </li>
      <li className={navLinkItem}>
        <Link to="/blog" className={navLinkText}>
          Blog
        </Link>
      </li>
      <li className={navLinkItem}>
        <Link to="/blog" className={navLinkText}>
          Projects
        </Link>
      </li>
      <li className={navLinkItem}>
        <Link to="/blog" className={navLinkText}>
          Videos
        </Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
