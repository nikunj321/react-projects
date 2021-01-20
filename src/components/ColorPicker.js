import React, { useState, useEffect } from "react";
import { Box, Text } from "@chakra-ui/react";
import ColorSlider from "./ColorSlider";

function ColorPicker({ setNewLight, newLight }) {
  const [red, setRed] = useState(30);
  const [green, setGreen] = useState(30);
  const [blue, setBlue] = useState(30);

  useEffect(() => {
    hexColor(red, green, blue);
    // eslint-disable-next-line
  }, [red, green, blue]);

  const convToHex = (value) => {
    const hex = value.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  };

  const hexColor = (red, green, blue) => {
    const boxColor = "#" + convToHex(red) + convToHex(green) + convToHex(blue);
    setNewLight(boxColor);
  };

  return (
    <React.Fragment>
      <Box display="flex" flexDirection="column" alignItems="center" p={4}>
        <Box
          width="200px"
          height="200px"
          backgroundColor={newLight}
          border="2px solid black"
        />
      </Box>
      <Text fontSize="20px">{newLight}</Text>
      <Box>
        <ColorSlider lineColor="#F00" onChange={(value) => setRed(value)} />
        <ColorSlider lineColor="#0F0" onChange={(value) => setGreen(value)} />
        <ColorSlider lineColor="#00F" onChange={(value) => setBlue(value)} />
      </Box>
    </React.Fragment>
  );
}

export default ColorPicker;
