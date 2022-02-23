import React from "react";
import {Link, useNavigate} from 'react-router-dom';
import { Box, Container, Flex, Heading, Button} from '@chakra-ui/react';
import {ViewIcon} from '@chakra-ui/icons';
import { useAuth } from "../context/AuthContext";


const Header = () =>{
    const { user, token, logOut} = useAuth();
    const navigate = useNavigate()

    const handleLogOut = () => {
        logOut();
        navigate('/login');
    }

    return(
    <Box as='header' background='#E6DCEA' boxShadow='base' color='#2b6cb0'>
        <Container maxW='container.lg' padding='0.5rem'>
            <Flex justifyContent='space-between' alignItems='center'>
                <Heading fontSize='md' fontFamily='monospace' color='#6b46c1'> <Link to='/'> CatCom </Link></Heading>
                
                     {
                         token ?  <Link to='/Profile'><ViewIcon w={6} h={6} color="#6b46c1"/></Link> :  ''
                     } 
                
                    {
                        token ? <Button colorScheme='purple' variant='outline' onClick={()=> handleLogOut()}>Выйти</Button> :
                         <Box
                           colorScheme='purple'
                           variant='outline'
                           as='button'>
                            <Link to='/login'>Войти</Link>
                         </Box>
                    } 
            </Flex>
        </Container>
    </Box>
    )
}

export default Header;