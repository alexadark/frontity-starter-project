/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import { Nav } from "grommet";
import { connect } from "frontity";
import Link from "../link";

const Menu = ({ state, direction, ...props }) => {
  const menuItems = state.theme.menu;

  return (
    <Nav direction={direction} gap={0}>
      {menuItems.map(([name, link]) => {
        const isCurrentPage = state.router.link === link;
        return (
          <Link
            key={name}
            link={link}
            className="menu-item"
            aria-current={isCurrentPage ? "page" : undefined}
            sx={{ fontWeight: 500 }}
            {...props}
          >
            {name}
          </Link>
        );
      })}
    </Nav>
  );
};

export default connect(Menu);
