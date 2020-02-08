import React from "react";
import Link from "../link";

const PostEntryInfo = ({ author, date }) => {
  return (
    <div className="postInfo">
      {author && (
        <div className="author">
          <Link link={author.link}>by {author.name}</Link>
        </div>
      )}
      <div className="date">on {date.toDateString()}</div>
    </div>
  );
};

export default PostEntryInfo;
