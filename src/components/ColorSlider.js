import React from "react";
import {
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Box
} from "@chakra-ui/react";
import { IoMdColorPalette } from "react-icons/io";

function ColorSlider(props) {
  return (
    <React.Fragment>
      <Slider defaultValue={30} min={0} max={255} {...props}>
        <SliderTrack bg={props.lineColor}>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb boxSize={7}>
          <Box as={IoMdColorPalette} />
        </SliderThumb>
      </Slider>
    </React.Fragment>
  );
}

export default ColorSlider;
