import React from "react";
import { connect } from "frontity";

import ArchiveItem from "./archiveItem";
import Pagination from "./pagination";
import { getUrlData } from "../../helpers";

const Archive = ({ state }) => {
  const data = getUrlData(state);
  console.log(data);

  return (
    <>
      {data.isTaxonomy && (
        <div className="archiveTitle">
          {data.taxonomy}: {state.source[data.taxonomy][data.id].name}
        </div>
      )}
      {data.isAuthor && (
        <div className="archiveTitle">
          Author: {state.source.author[data.id].name}
        </div>
      )}
      {data.items.map(({ id, type }) => {
        const item = state.source[type][id];
        console.log("item", item);
        return <ArchiveItem key={item.id} item={item} type={data.type} />;
      })}
      <Pagination />
    </>
  );
};

export default connect(Archive);
