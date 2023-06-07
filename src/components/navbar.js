import * as React from "react";
import { Link } from "gatsby";
import {
  navLinks,
  navLinkItem,
  navLinkText,
} from "../styles/layout.module.css";

const Navbar = () => {
  return (
    <nav
      style={{
        backgroundColor: "transparent",
        display: "flex",
        alignItems: "center",
        padding: "10px",
      }}
    >
      <div style={{ marginRight: "auto", fontSize: "18px" }}>Arjun Kashyap</div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Link
          to="/"
          style={{
            fontFamily: "Helvetica",
            marginRight: "20px",
            textDecoration: "none",
            color: "#000",
          }}
        >
          Home
        </Link>
        <Link
          to="/contact"
          style={{ marginRight: "20px", textDecoration: "none", color: "#000" }}
        >
          Contact
        </Link>
        <Link to="/blog" style={{ textDecoration: "none", color: "#000" }}>
          Blog
        </Link>
      </div>
    </nav>
  );
};

// const Navbar = () => (
//   <nav>
//     <ul className={navLinks}>
//       <li className={navLinkItem}>
//         <Link to="/" className={navLinkText}>
//           Home
//         </Link>
//       </li>
//       <li className={navLinkItem}>
//         <Link to="/contact" className={navLinkText}>
//           Contact
//         </Link>
//       </li>
//       <li className={navLinkItem}>
//         <Link to="/blog" className={navLinkText}>
//           Blog
//         </Link>
//       </li>
//     </ul>
//   </nav>
// );

export default Navbar;
