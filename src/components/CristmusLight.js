import React, { useState, useEffect } from "react";
import { Button, ButtonGroup, Box, IconButton } from "@chakra-ui/react";
import Light from "./Light";
import { GrAdd } from "react-icons/gr";
import ColorPicker from './ColorPicker';

function CristmusLight() {
  const [newLight, setNewLight] = useState("");
  const [totalLight, setTotalLight] = useState(0);
  return (
    <React.Fragment>
      <Box>
        <Box p={4} display="flex" flexDirection="row">

        </Box>
        <ColorPicker newLight={newLight} setNewLight={setNewLight} />
        {newLight}
      </Box>
    </React.Fragment>
  );
}

export default CristmusLight;
