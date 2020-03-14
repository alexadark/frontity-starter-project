/** @jsx jsx */
import { jsx, Container, Flex } from "theme-ui";
import { connect } from "frontity";
import Menu from "./menu";
import MobileMenu from "./mobileMenu";
import Logo from "./logo";
import SocialShare from "../socialShare";
import Headroom from "react-headroom";
import ColorSwitch from "../colorSwitch";

const Header = ({ state }) => {
  return (
    <Headroom>
      <header className="header" sx={{ variant: `header` }}>
        <Container className="container">
          <Logo />
          <Flex>
            <Menu
              direction="row"
              sx={{
                display: ["none", "none", "block"],
                ".menu-item": { px: 10 }
              }}
            />
            <MobileMenu sx={{ display: ["block", "block", "none"] }} />
            {state.theme.showSocialLinks.header && (
              <SocialShare sx={{ px: 20 }} />
            )}
            <ColorSwitch sx={{ ml: 10, height: 24, mt: [13, 13, 0] }} />
          </Flex>
        </Container>
      </header>
    </Headroom>
  );
};

export default connect(Header);
