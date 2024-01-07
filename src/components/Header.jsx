import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <NavLink
          to="/Portfolio-react"
          end
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Home
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="/Portfolio-react/projects"
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Projects
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="/Portfolio-react/contact"
          end
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Contact
        </NavLink>
      </li>
      {/* <li className="nav-item">
        <NavLink
          to="contact/contactform"
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          ContactForm
        </NavLink>
      </li> */}
    </ul>
  );
}

export default Header;
