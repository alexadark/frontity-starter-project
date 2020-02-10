/** @jsx jsx */
import React from "react";
import { connect } from "frontity";
import { Button, jsx, Flex, Box } from "theme-ui";
import Link from "../link";

export const ButtonBlock = ({ button, variant, position, state }) => {
  const { title, target, url } = button;
  const buttonUrl = url.replace(state.frontity.url, "/");
  const style =
    position === "center"
      ? { justifyContent: `center` }
      : position === "left"
      ? { justifyContent: `start` }
      : { justifyContent: `end` };
  return (
    <Flex sx={style}>
      <Button variant={variant || "primary"} button={button}>
        {target === "_blank" ? (
          <a href={url} target="_blank">
            {title}
          </a>
        ) : (
          <Link link={buttonUrl}>{title}</Link>
        )}
      </Button>
    </Flex>
  );
};

export default connect(ButtonBlock);
