/** @jsx jsx */
import { jsx, Box } from "theme-ui";
import { connect } from "frontity";
import { Menu as MenuIcon, Close } from "grommet-icons";
import { Layer, Button } from "grommet";
import Menu from "./menu";
import mobileMenuStyles from "../../styles/mobileMenuStyles";

const MobileMenu = ({ state, actions, ...props }) => {
  const isOpen = state.theme.isMobileMenuOpen;

  const { openMobileMenu, closeMobileMenu } = actions.theme;

  return (
    <Box {...props}>
      <Button
        icon={<MenuIcon />}
        a11yTitle="Open navigation menu"
        onClick={openMobileMenu}
        className={isOpen ? "btn-menu-opened" : "btn-menu-closing"}
        sx={{
          variant: `buttons.hamburger`
        }}
      />
      {isOpen && (
        <Layer
          position="right"
          full="vertical"
          modal
          responsive={false}
          onClickOutside={closeMobileMenu}
          onEsc={closeMobileMenu}
          sx={{ ...mobileMenuStyles }}
        >
          <Button
            icon={<Close />}
            a11yTitle="Close navigation menu"
            sx={{
              pointer: `cursor`,
              svg: {
                stroke: `headerColor`,
                width: `15px`,
                height: `15px`
              }
            }}
            className="close"
            onClick={closeMobileMenu}
          />

          <Menu direction="column" gap={0} />
        </Layer>
      )}
    </Box>
  );
};

export default connect(MobileMenu);
