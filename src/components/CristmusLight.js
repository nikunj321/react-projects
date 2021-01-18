import React, { useEffect, useState } from "react";
import {
  Box,
  Slider,
  SliderFilledTrack,
  SliderTrack,
  SliderThumb,
  Button,
  ButtonGroup,
  Stack,
} from "@chakra-ui/react";
import {
  IoIosAddCircleOutline,
  IoIosRemoveCircleOutline,
} from "react-icons/io";

import Light from "./Light";

function CristmusLight() {
  const [on, setOn] = useState(true);
  const [allLight, setAllLight] = useState(0);
  // don't use JSX in state
  /** because of that it's not render on useEffect hook */
  // const [ledLight, setLedLight] = useState([<Light on={on} />, <Light on={on} />]);
  const ledLight = [<Light on={on} />, <Light on={on} />];
  // ledLight.push(<Light on={true} />);
  useEffect(() => {
    const interval = setInterval(() => {
      setOn((on) => !on); // update using prev state 
    }, 1000);
    setAllLight(ledLight.length);

    return () => {
      clearInterval(interval);
    }
  }, []);

  // re-render on `on` state changes so that led light can blink
  useEffect(() => {

  },[on, allLight]);

  // useEffect(() => {
  //   console.log(`length-${ledLight.length}`);
  // }, [ledLight]);
  
  // add new led light
  const addNewLed = () => {
    console.log('clicked');
    ledLight.push(<Light on={on} />);
    console.log(ledLight.length );
    setAllLight(prevCount => prevCount + 1);
    console.log(allLight);
  }


  return (
    <React.Fragment>
      <Box
        backgroundColor="black"
        p={8}
        display="flex"
        alignContent="space-between" 
      >
        {ledLight.map((component, index) => (
          <React.Fragment key={index}>{component}</React.Fragment>
        ))}
      </Box>
      <Box>
        <Slider>
              <SliderTrack bg="blue">
                  <SliderFilledTrack bg="red" />
              </SliderTrack>
              <SliderTrack>
                  <SliderThumb boxSize={6}>
                      <Box color="red" />
                  </SliderThumb>
              </SliderTrack>
          </Slider>
        <Stack direction="row" spacing={4}>
          <ButtonGroup size="lg">
            <Button
              leftIcon={<IoIosAddCircleOutline fontSize="30px"  />}
              colorScheme="teal"
              variant="solid"
              onClick={addNewLed}
            >
              LED
            </Button>
            <Button
              leftIcon={<IoIosRemoveCircleOutline size="30px" />}
              colorScheme="teal"
              variant="outline"
            >
              LED
            </Button>
          </ButtonGroup>
        </Stack>
      </Box>
    </React.Fragment>
  );
}

export default CristmusLight;
