import React from "react";

export const ContentBlock = ({ content }) => {
  return <div dangerouslySetInnerHTML={{ __html: content }} />;
};
