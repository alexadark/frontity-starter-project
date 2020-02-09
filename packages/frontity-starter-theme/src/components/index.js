/** @jsx jsx */
import { jsx, Container, Flex, ThemeProvider } from "theme-ui";
import theme from "../theme-ui";
import { Global, connect, Head } from "frontity";
import globalStyles from "../styles/globalStyles";
import Header from "./header";
import Footer from "./footer";
import Archive from "./archive";
import Loading from "./loading";
import Page404 from "./page404";
import Post from "./post";
import TestingPage from "./testingPage";
import { getUrlData } from "../helpers";
import Title from "./title";
import { Grommet } from "grommet";

const Theme = ({ state }) => {
  // Get information about the current URL.
  const data = getUrlData(state);
  console.log(data);
  const { isFetching, isPostType, isArchive, is404 } = data;

  return (
    <Grommet theme={theme}>
      <ThemeProvider theme={theme}>
        <Title />
        <Head>
          <meta name="description" content={state.frontity.description} />
          <html lang="en" />
          <link
            href="https://fonts.googleapis.com/css?family=Baumans|Khand:400,500,600,700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <Global styles={globalStyles} />
        <Flex
          sx={{
            flexDirection: "column",
            justifyContent: "space-between",
            minHeight: "100vh"
          }}
        >
          <Header />
          <main
            sx={{
              py: ["xl", "xl", "xxl"]
            }}
          >
            {isFetching && <Loading />}
            {is404 && state.router.link !== "/test/" && <Page404 />}
            {isPostType && <Post />}
            {isArchive && <Archive />}
            {state.router.link === "/test/" && <TestingPage />}
          </main>
          <Footer />
        </Flex>
      </ThemeProvider>
    </Grommet>
  );
};

export default connect(Theme);
