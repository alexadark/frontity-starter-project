import React from "react";
import PostEntryMedia from "../post/postEntryMedia";

export const ImageBlock = ({ image }) => {
  console.log("image", image.id);
  return (
    <PostEntryMedia
      id={image.id}
      sx={{
        img: {
          maxWidth: "90%",
          borderRadius: 10,
          boxShadow: "default",
          m: 20,
          border: "5px solid black"
        }
      }}
    />
  );
};
