import React from "react";
import Link from "../link";

const Taxonomies = ({ tax, name }) => {
  return (
    <div className="taxonomies">
      <span>{name}: </span>
      {tax &&
        tax.map(item => (
          <Link key={item.id} link={item.link}>
            {item.name}
          </Link>
        ))}
    </div>
  );
};

export default Taxonomies;
