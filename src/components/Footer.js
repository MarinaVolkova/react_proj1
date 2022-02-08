import React from "react";
import { Box, Container} from '@chakra-ui/react';

const Footer = () => {
    return(
        <Box as='footer' background='#C7CBE3' boxShadow='base' color='#fff'>
        <Container maxW='container.lg' padding='0.5rem'>
            <p>Footer</p>
        </Container>
    </Box>
    );
};

export default Footer;