/** @jsx jsx */
import { jsx, Heading } from "theme-ui";

export const HeadingBlock = ({ heading, type, centered }) => {
  const style = centered ? { textAlign: "center" } : null;
  console.log("centered", style);
  return (
    <Heading as={type} sx={{ ...style }}>
      {heading}
    </Heading>
  );
};
