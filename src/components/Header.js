import React from "react";
import { Link } from 'react-router-dom';
import { Box, Container, Flex, Heading, Button} from '@chakra-ui/react';
import {ViewIcon} from '@chakra-ui/icons';
import { useAuth } from "../context/AuthContext";


const Header = () =>{
    const { user, logOut} = useAuth();
    return(
    <Box as='header' background='#E6DCEA' boxShadow='base' color='#2b6cb0'>
        <Container maxW='container.lg' padding='0.5rem'>
            <Flex justifyContent='space-between' alignItems='center'>
                <Heading fontSize='md' fontFamily='monospace' color='#6b46c1'> <Link to='/'> CatCom </Link></Heading>
                
                     {
                         localStorage.token ?   <Link to='/Profile'><ViewIcon w={6} h={6} color="#6b46c1"/></Link> :  '' //господи, такая тупость, а если я уже на странице профиля, зачем мне этот пункт в шапке?  я тупая
                     } 
                
                    {
                         localStorage.token ? <Button colorScheme='purple' variant='outline' onClick={()=> logOut()}> <Link to='/login'>Выйти </Link></Button> :
                         <Button colorScheme='purple' variant='outline'> <Link to='/login'>Войти</Link> </Button>
                    } 
            </Flex>
        </Container>
    </Box>
    )
}

export default Header;