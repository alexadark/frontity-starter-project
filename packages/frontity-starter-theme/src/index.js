import Theme from "./components";
import image from "@frontity/html2react/processors/image";
import themeUI from "./theme-ui";
import { projectsHandler } from "./handlers";

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
      logo: "my site",
      // logo:
      //   "https://about.canva.com/en_in/wp-content/uploads/sites/3/2016/08/logos-1.png",
      // logo: Logo,
      showSocialLinks: {
        header: true,
        footer: true
      },
      socialLinks: [],
      isMobileMenuOpen: false,
      autoPreFetch: "none",
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
    init: ({ libraries }) => {
      libraries.source.handlers.push(projectsHandler);
    },
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
