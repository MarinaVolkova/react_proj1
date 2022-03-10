import React from 'react';
import {Container, Flex } from '@chakra-ui/react'
import { useSelector } from 'react-redux';
import { getUsersEmail } from '../../store/selectors/profiles';


const Profile = () => {
    const selectorsElem = useSelector(state => ({
        email: state.users.email ,
      }));
    return(
        <Container maxW = 'container.xl'> 
            <Flex justifyContent='space-around' alignItems='center' flexWrap='wrap' >
            <p>{selectorsElem.email}</p>
            </Flex>
        </Container>
    );
}

export default Profile;