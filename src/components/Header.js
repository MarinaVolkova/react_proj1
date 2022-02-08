import React from "react";
import { Box, Container, Flex, Heading, Button} from '@chakra-ui/react';

const Header = () =>{

    return(
    <Box as='header' background='#C7CBE3' boxShadow='base' color='#2b6cb0'>
        <Container maxW='container.lg' padding='0.5rem'>
            <Flex justifyContent='space-between' alignItems='center'>
                <Heading fontSize='lg'>Header</Heading>
                <Button colorScheme='blue' variant='outline'>Button</Button>
            </Flex>
        </Container>
    </Box>
    )
}

export default Header;