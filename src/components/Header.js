import React from "react";
import { connect } from "react-redux";
import { Link, useNavigate } from 'react-router-dom';
import { Box, Container, Flex, Heading, Button} from '@chakra-ui/react';
import {ViewIcon} from '@chakra-ui/icons';
import { useAuth } from "../context/AuthContext";
import { add } from "../store/actions/addDel";


const Header = (data ) =>{
    const { user, logOut} = useAuth();
    const navigate = useNavigate();
    const login = () => {
        logOut();
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
        addElem: () => dispatch(add())
    }
}
export default connect(null, mapDispatchToProps)(Header);