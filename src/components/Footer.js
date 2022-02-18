import React from "react";
import { Flex, Center} from '@chakra-ui/react';

const Footer = () => {
    return(
    <Flex as='footer' background='#E6DCEA' boxShadow='base' color='#6b46c1' justifyContent='center'>
        <Center maxW='container.lg' padding='0.5rem'>
            <p>2022</p>
        </Center>
    </Flex>
    );
};

export default Footer;