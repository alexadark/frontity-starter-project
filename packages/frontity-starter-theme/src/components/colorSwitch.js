/** @jsx jsx */
import { jsx, useColorMode } from "theme-ui";
import { Button } from "grommet";
import { FiSun, FiMoon } from "react-icons/fi";

const ColorSwitch = ({ ...props }) => {
  const [colorMode, setColorMode] = useColorMode();
  return (
    <Button
      a11yTitle="Toggle dark mode"
      onClick={() => setColorMode(colorMode === "default" ? "dark" : "default")}
      plain
      {...props}
    >
      {colorMode === "dark" ? (
        <FiSun sx={{ width: `24px`, height: `24px`, strokeWidth: 1 }} />
      ) : (
        <FiMoon
          sx={{
            width: `24px`,
            height: `24px`,
            strokeWidth: 1,
            svg: { stroke: `accent`, fill: `accent` },
            mt: 3
          }}
        />
      )}
    </Button>
  );
};

export default ColorSwitch;
