import React from "react";
import PostEntryMedia from "../post/postEntryMedia";

export const ImageBlock = ({ image }) => {
  console.log("image", image.id);
  return (
    <>
      <h3>Image</h3>
      <PostEntryMedia id={image.id} />
      {/* <img src={image.url} alt="" /> */}
    </>
  );
};
