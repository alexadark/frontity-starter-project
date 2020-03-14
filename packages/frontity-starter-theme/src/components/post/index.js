/** @jsx jsx */
import { jsx, Container, Box, AspectRatio } from "theme-ui";
import { useEffect } from "react";
import { connect } from "frontity";

import { getUrlData } from "../../helpers";

import PostEntryInfo from "./postEntryInfo";
import Taxonomies from "./taxonomies";
import { formatPostData } from "../../helpers";
import PostEntryMedia from "./postEntryMedia";
import { HeadingBlock, ContentBlock, ImageBlock } from "../acfBlocks";
import ProjectsBlock from "../acfBlocks/projectsBlock";
import ButtonBlock from "../acfBlocks/buttonBlock";
import featuredStyles from "../../styles/featuredStyles";
import Archive from "../archive";

const Post = ({ state, libraries, actions }) => {
  const data = getUrlData(state);
  console.log(data);
  const post = state.source[data.type][data.id];

  const { postMeta, postInfo, featured } = state.theme;
  const Html2React = libraries.html2react.Component;

  const {
    author,
    publishDate,
    title,
    categories,
    tags,
    featured_media,
    content,
    acf
  } = formatPostData(state, post);
  const date = new Date(publishDate);
  /**
   * Once the post has loaded in the DOM, prefetch both the
   * home posts and the list component so if the user visits
   * the home page, everything is ready and it loads instantly.
   */

  useEffect(() => {
    actions.source.fetch("/");
    Archive.preload();
  }, []);

  return data.isReady ? (
    <Container className="container" sx={{ maxWidth: "l" }}>
      <article sx={{ variant: "card.default" }}>
        {featured.showOnPost && (
          <PostEntryMedia
            id={featured_media.id}
            ratio={16 / 9}
            sx={{
              ...featuredStyles
            }}
          />
        )}
        <Box>
          <h1
            dangerouslySetInnerHTML={{ __html: title }}
            sx={{ textTransform: "uppercase", fontSize: "xl" }}
          />
          {data.isPost && postInfo.showOnPost && (
            <PostEntryInfo author={author} date={date} />
          )}

          <Html2React html={content} />
        </Box>
        {acf.flexible_layouts &&
          acf.flexible_layouts.map((block, i) => {
            switch (block.acf_fc_layout) {
              case "heading_block":
                return <HeadingBlock {...block} key={i} />;
              case "button_block":
                return <ButtonBlock {...block} key={i} />;
              case "content_block":
                return <ContentBlock {...block} key={i} />;
              case "image_block":
                return <ImageBlock {...block} key={i} />;
              case "projects_block":
                return <ProjectsBlock {...block} key={i} />;
              default:
                return null;
            }
          })}
        {data.isPost && postMeta.showOnPost && (
          <div className="postEntryMeta">
            <Taxonomies tax={categories} name="Categories" />
            <Taxonomies tax={tags} name="Tags" />
          </div>
        )}
      </article>
    </Container>
  ) : null;
};

export default connect(Post);
