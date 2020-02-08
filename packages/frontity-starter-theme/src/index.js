import Theme from "./components";
import image from "@frontity/html2react/processors/image";
import Logo from "./images/logo.svg";
import themeUI from "./theme-ui";

const testTheme = {
  name: "frontity-test-theme",
  roots: {
    theme: Theme
  },
  state: {
    theme: {
      menu: [],
      /**
       * The logo can be a text or an image url
       */
      logo: Logo,
      // logo:
      //   "https://about.canva.com/en_in/wp-content/uploads/sites/3/2016/08/logos-1.png",
      // logo: Logo,
      showSocialLinks: {
        header: true,
        footer: true
      },
      socialLinks: [
        ["pinterest", "https://www.pinterest.com/frontity/"],
        ["facebook", "https://www.instagram.com/frontity/"],
        ["twitter", "https://www.twitter.com/frontity/"]
      ],
      isMobileMenuOpen: false,
      autoPreFetch: "all",
      featured: {
        showOnArchive: true,
        showOnPost: true
      },
      postInfo: {
        showOnArchive: true,
        showOnPost: true
      },
      postMeta: {
        showOnArchive: true,
        showOnPost: true
      },
      themeUI
    }
  },
  actions: {
    theme: {
      openMobileMenu: ({ state }) => {
        state.theme.isMobileMenuOpen = true;
      },
      closeMobileMenu: ({ state }) => {
        state.theme.isMobileMenuOpen = false;
      }
    }
  },
  libraries: {
    html2react: {
      processors: [image]
    }
  }
};

export default testTheme;
