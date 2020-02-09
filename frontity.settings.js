import Logo from "./assets/images/logo.svg";
const settings = {
  name: "frontity-wp",
  state: {
    frontity: {
      url: "https://demo-wp.alexaspalato.website/",
      title: "Webstantly",
      description: "WordPress installation for Frontity development"
    }
  },
  packages: [
    {
      name: "frontity-starter-theme",
      state: {
        theme: {
          menu: [
            ["Home", "/"],
            ["About", "/about/"],
            ["Typography", "/typography/"],
            ["Journal", "/journal/"],
            ["Projects", "/projects/"]
          ],
          // logo: "Starter",
          showSocialLinks: {
            header: false,
            footer: false
          },
          socialLinks: [
            ["pinterest", "https://www.pinterest.com/frontity/"],
            ["facebook", "https://www.instagram.com/frontity/"],
            ["twitter", "https://www.twitter.com/frontity/"],
            ["instagram", "https://www.instagram.com/frontity/"]
          ],
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
            showOnPost: false
          }
        }
      }
    },
    {
      name: "@frontity/wp-source",
      state: {
        source: {
          api: "https://demo-wp.alexaspalato.website/wp-json",
          homepage: "home",
          postsPage: "journal",
          params: {
            per_page: 3
          },
          postTypes: [
            {
              type: "projects",
              endpoint: "projects",
              archive: "projects"
            }
          ]
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
