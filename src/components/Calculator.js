import React, { useState } from "react";
import { Box, Input, Button, Stack, HStack, VStack } from "@chakra-ui/react";

function Calculator() {
    const [firstNumber, setFirstNumber] = useState(0);
    const [secondNumber, setSecondNumber] = useState(0);
  return (
    <React.Fragment>
      <Box>
        <Box>
          <Input 
            maxLength={8}
            type="number"
            value={firstNumber}
            onChange={(event) => setFirstNumber(event.target.value)}
          />
        </Box>
        <Box>
            <Stack>
                <VStack>
                    <HStack p={2}>
                       <Button size="xl" value></Button>
                    </HStack>
                   
                </VStack>
            </Stack>
        </Box>
      </Box>
    </React.Fragment>
  );
}

export default Calculator;
