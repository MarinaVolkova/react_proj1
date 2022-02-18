import React, { useContext } from 'react';
import { ListContext } from '../../context/ListContext';
import {Container, Flex } from '@chakra-ui/react'


const Profile = () => {
    const {state, dispathc} = useContext(ListContext);
    
    return(
        <Container maxW = 'container.xl'> 
            <Flex justifyContent='space-around' alignItems='center' flexWrap='wrap' >
            <p>{localStorage.user}</p>
            </Flex>
        </Container>
    );
}

export default Profile;