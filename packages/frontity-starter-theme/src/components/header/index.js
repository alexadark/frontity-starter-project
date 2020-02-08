/** @jsx jsx */
import { jsx, Container } from "theme-ui";
import { connect } from "frontity";
import Menu from "./menu";
import MobileMenu from "./mobileMenu";
import Logo from "./logo";
import SocialShare from "../socialShare";
import Headroom from "react-headroom";

const Header = ({ state }) => {
  return (
    <Headroom>
      <header className="header" sx={{ variant: `header` }}>
        <Container className="container">
          <Logo />

          <Menu
            direction="row"
            sx={{ display: ["none", "none", "block"], px: 10 }}
          />
          <MobileMenu sx={{ display: ["block", "block", "none"] }} />
          {state.theme.showSocialLinks.header && <SocialShare />}
        </Container>
      </header>
    </Headroom>
  );
};

export default connect(Header);
