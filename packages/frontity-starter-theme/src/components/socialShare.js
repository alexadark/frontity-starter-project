import React from "react";
import { Box } from "theme-ui";
import { connect } from "frontity";
import {
  IoLogoTwitter,
  IoLogoPinterest,
  IoLogoFacebook,
  IoLogoInstagram
} from "react-icons/io";

const icons = {
  twitter: IoLogoTwitter,
  pinterest: IoLogoPinterest,
  facebook: IoLogoFacebook,
  instagram: IoLogoInstagram
};

const SocialShare = ({ state }) => {
  const { socialLinks } = state.theme;
  console.log("social", socialLinks);
  return (
    <div>
      {socialLinks &&
        socialLinks.map(([name, link]) => {
          const socialIcon = icons[name];
          return (
            <div>
              <a href={link} target="_blank" rel="noopener noreferrer">
                <Box as={socialIcon} />
              </a>
            </div>
          );
        })}
    </div>
  );
};

export default connect(SocialShare);
