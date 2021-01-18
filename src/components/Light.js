import React from "react";
import { Box } from "@chakra-ui/react";

function Light({ on }) {
  return (
    <Box
      width="50px"
      height="50px"
      backgroundColor={on ? "#FFF" : "#000"}
      boxShadow={on ? "0 0 20px 15px #0ff" : "none"}
      borderRadius="50%"
      marginRight="10px"
      marginLeft="10px"
    />
  );
}

export default Light;
