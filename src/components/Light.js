import React from 'react';
import {Box} from '@chakra-ui/react';

function Light(props) {
    return (
        <Box
            width="100px"
            height="100px"
            backgroundColor="#FFF"
            boxShadow={props.on ? "0 0 50px 35px #0ff" : "none"}
            borderRadius="50%"
        />
    )
}

export default Light
