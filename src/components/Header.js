import React from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from 'react-router-dom';
import { Box, Container, Flex, Heading, Button} from '@chakra-ui/react';
import { ADD } from "../store/reducers/elemSlices/catsSlice/catsSlice";
import { logOut } from "../store/reducers/elemSlices/profileSlice/profileSlice";
import { getUsersEmail, getUsersToken } from "../store/selectors/profiles";


const Header = () =>{
    const dispatch = useDispatch();
    const addElem = () => dispatch(ADD());
    const logOutUser = () => dispatch(logOut());
    const navigate = useNavigate();
    const login = () => {
        logOutUser();
        navigate('/login');
    }

    const selectorsElem = useSelector(state => ({
        token: getUsersToken(state)
      }));

    return(
    <Box as='header' background='#E6DCEA' boxShadow='base' color='#2b6cb0'>
        <Container maxW='container.lg' padding='0.5rem'>
            <Flex justifyContent='space-between' alignItems='center'>
                <Heading fontSize='md' fontFamily='monospace' color='#6b46c1'> <Link to='/'> CatCom </Link></Heading>
                    <Button colorScheme='purple' variant='outline' onClick={()=> addElem()}>Добавить</Button>
                
                     {
                         selectorsElem.token ?    <Button colorScheme='purple' variant='outline' onClick={()=> navigate('/Profile')}> Профиль</Button> :  null
                     } 
                
                    {
                         selectorsElem.token ? <Button colorScheme='purple' variant='outline' onClick={()=> login()}> Выйти </Button> :
                         <Button colorScheme='purple' variant='outline' onClick={()=> navigate('/login')}> Войти </Button>
                    } 
                    
            </Flex>
        </Container>
    </Box>
    )
}

export default Header;