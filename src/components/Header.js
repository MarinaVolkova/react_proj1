import React from "react";
import { connect } from "react-redux";
import { Link, useNavigate } from 'react-router-dom';
import { Box, Container, Flex, Heading, Button} from '@chakra-ui/react';
import {ViewIcon} from '@chakra-ui/icons';
import { add } from "../store/actions/cats";
import { logOut } from "../store/actions/auth";


const Header = (data ) =>{
    const navigate = useNavigate();
    const login = () => {
        data.logOutUser();
        navigate('/login');
    }
    return(
    <Box as='header' background='#E6DCEA' boxShadow='base' color='#2b6cb0'>
        <Container maxW='container.lg' padding='0.5rem'>
            <Flex justifyContent='space-between' alignItems='center'>
                <Heading fontSize='md' fontFamily='monospace' color='#6b46c1'> <Link to='/'> CatCom </Link></Heading>
                    <Button colorScheme='purple' variant='outline' onClick={()=> data.addElem()}>Добавить</Button>
                
                     {
                         localStorage.token ?   <Link to='/Profile'><ViewIcon w={6} h={6} color="#6b46c1"/></Link> :  null
                     } 
                
                    {
                         localStorage.token ? <Button colorScheme='purple' variant='outline' onClick={()=> login()}> Выйти </Button> :
                         <Button colorScheme='purple' variant='outline'> <Link to='/login'>Войти</Link> </Button>
                    } 
                    
            </Flex>
        </Container>
    </Box>
    )
}
const mapDispatchToProps = (dispatch) => {
    return {
        addElem: () => dispatch(add()),
        logOutUser: () => dispatch(logOut())
    }
}
export default connect(null, mapDispatchToProps)(Header);