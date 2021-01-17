import React, { useState, useEffect } from "react";
import {
  Heading,
  Box,
  Button,
  Input,
  useToast,
  Text,
  VStack,
} from "@chakra-ui/react";

function Bin2Dec() {
  const toast = useToast();
  const [binary, setBinary] = useState("");
  const [inputError, setInputError] = useState(false);
  const [decimal, setDecimal] = useState(0);

  useEffect(() => {
    // console.log(decimal);
    if (!inputError && decimal !== 0) {
      toast({
        title: `your decimal ${decimal}`,
        position: "top",
        description: `for your binary input- ${binary}`,
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    }
    // eslint-disable-next-line
  }, [decimal]);

  const clickHandler = () => {
    const binaryArray = [...binary].reverse().map((bin, index) => {
      if (Number(bin) === 1 || Number(bin) === 0) {
        return Number(bin) * Math.pow(2, index);
      } else {
        setInputError(true);
        toast({
          position: "top",
          title: "Invalid Binary Input",
          description: `your input was ${bin} instead 0 or 1.`,
          status: "error",
          duration: 3500,
          isClosable: true,
        });
        return null;
      }
    });

    if (!inputError) {
      //   console.log(binaryArray);
      setDecimal(binaryArray.reduce((a, b) => Number(a) + Number(b), 0));
    }
  };

  const onChangeHandler = (event) => {
    setBinary(event.target.value);
  };

  return (
    <React.Fragment>
      <Heading>Binary to Decimal conversion</Heading>
      {/* <Box alignContent="center">
        <HStack>
          <PinInput id="binary">
            <PinInputField />
            <PinInputField />
            <PinInputField />
            <PinInputField />
            <PinInputField />
            <PinInputField />
            <PinInputField />
            <PinInputField />
          </PinInput>
        </HStack>
        <Button primary="true" onClick={convertToDecimal}>
          Convert to Decimal
        </Button>
      </Box> */}
      <Box p={4}>
        <Input
          type="number"
          maxLength={8}
          value={binary}
          placeholder="enter Binary number"
          onChange={onChangeHandler}
        />
        <Box p={2}>
          <VStack>
            <Text>{(!inputError && decimal) ? decimal : null}</Text>
            <Button colorScheme="blue" onClick={clickHandler}>Convert to Decimal</Button>
            <Button
              onClick={() => {
                setDecimal(0);
                setInputError(false);
                setBinary("");
              }}
            >
              Reset
            </Button>
          </VStack>
        </Box>
      </Box>
    </React.Fragment>
  );
}

export default Bin2Dec;
