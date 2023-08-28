import React from 'react'
import { Container ,Box  } from "@chakra-ui/react";

const Homepage = () => {
  return (
    <Container maxW="xl" centerContent>
    
        <Box
        d='flex'
        justifyContent="center"
        p={3}
        bg={"white"}
        w="100%"
        m
        >
            <Text fontSize='4xl' fontFamily="work sans" color="black">Talk-A-Tive</Text>
        </Box>

        <Box>

        </Box>

    </Container>
  )
}

export default Homepage;