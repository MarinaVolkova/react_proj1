import React, { useContext } from 'react';
import { ListContext } from '../../context/ListContext';
import {Container, Flex } from '@chakra-ui/react'
import Card from '../../components/Card';


const Home = () => {
    const {state, dispathc} = useContext(ListContext);
    
    return(
        <Container maxW = 'container.xl'> 
            <Flex justifyContent='space-around' alignItems='center' flexWrap='wrap' >
                <Card ></Card>
                <Card ></Card>
                <Card ></Card>
                <Card ></Card>
                <Card ></Card>
                <Card ></Card>
            </Flex>
        </Container>
    );
}

export default Home;