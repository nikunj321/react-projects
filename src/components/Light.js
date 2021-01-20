import React from "react";
import { Box } from "@chakra-ui/react";

function Light({ on, lightColor, lightGlowEffect  }) {
  return (
    <Box
      width="50px"
      height="50px"
      backgroundColor={on ? lightColor : "#000"}
      boxShadow={on ? `0 0 20px 15px ${lightGlowEffect}` : "none"}
      borderRadius="50%"
      marginRight="10px"
      marginLeft="10px"
    />
  );
}

export default Light;
