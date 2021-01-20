import React, { useState, useEffect } from "react";
import { Button, ButtonGroup, Box, Text } from "@chakra-ui/react";
import Light from "./Light";
import { HiOutlineLightBulb } from "react-icons/hi";
import ColorPicker from "./ColorPicker";

function CristmusLight() {
  const [newLight, setNewLight] = useState(""); // background color of light
  const [glowLight, setGlowLight] = useState(""); // color of light's glow
  const [on, setOn] = useState(false)
  // color of earch bulb/light
  const [newLightColor, setNewLightColor] = useState([]);

  // implementing timer for led light Blinking
  useEffect(() => {
    const interval = setInterval(() => {
      setOn(on => !on)
    }, 2000);
     
    return () => {
      clearInterval(interval);
    }
  }, [])

  useEffect(() => {
    // eslint-disable-next-line
  }, [on, newLightColor]);

  const addLightHandler = () => {
    // setNewLightColor((prevState) => [
    //   ...prevState,
    //   {
    //     colorLight: newLight,
    //     glowColorLight: glowLight,
    //   },
    // ]);
    // or we can do this

    setNewLightColor((prevState) =>
      prevState.concat({
        colorLight: newLight,
        glowColorLight: glowLight,
      })
    );
  };

  const removeLightHandler = () => {
    // remove last bulb from the array
    setNewLightColor((prevState) => prevState.slice(0, -1));
  };

  return (
    <React.Fragment>
      <Box>
        <Box p={4} display="flex" flexDirection="row" backgroundColor="#000">
          {newLightColor.map((bulb, index) => (
            <React.Fragment key={index}>
              <Light
                lightColor={bulb.colorLight}
                lightGlowEffect={bulb.glowColorLight}
                on={ Math.floor(Math.random() * 10) < 5 ? on : !on}
              />
            </React.Fragment>
          ))}
        </Box>
        <Box display="flex" flexDirection="row" justifyContent="space-around">
          <div>
            <Text>Pick Color of light </Text>
            <ColorPicker newLight={newLight} setNewLight={setNewLight} />
          </div>
          <div>
            <Text>Pick Color to Glow</Text>
            <ColorPicker newLight={glowLight} setNewLight={setGlowLight} />
          </div>
        </Box>
        <ButtonGroup variant="outline" spacing={4}>
          <Button
            border="2px"
            borderColor="#171e1e"
            size="lg"
            rightIcon={<HiOutlineLightBulb size="24px" />}
            onClick={addLightHandler}
          >
            ADD
          </Button>
          <Button
            border="2px"
            borderColor="#171e1e"
            size="lg"
            rightIcon={<HiOutlineLightBulb size="24px" />}
            onClick={removeLightHandler}
          >
            REMOVE
          </Button>
        </ButtonGroup>
      </Box>
    </React.Fragment>
  );
}

export default CristmusLight;
