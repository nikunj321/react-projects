import React from 'react'
import { Box } from '@chakra-ui/react';
import Light from './Light';

function CristmusLight() {
    return (
        <React.Fragment>
            <Box backgroundColor="black"
                p={8}
            >
                <Light on={false} />
                </Box>            
        </React.Fragment>
    )
}

export default CristmusLight
