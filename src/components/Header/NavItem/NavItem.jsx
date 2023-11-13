import React from "react";
import { NavLink } from "react-router-dom";

const NavItem = ({ link, title }) => {
  return (
    <NavLink to={link}>{title}</NavLink>
  );
};

export default NavItem;
