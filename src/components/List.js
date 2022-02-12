import React, {useState, useReducer, useContext } from 'react';
import Card from './Card';
import { ListContext } from '../context/ListContext';
import {Container, Flex } from '@chakra-ui/react'

const List = () => {
    //const [value, setValue] = useState(0); - для хранения "плоских" состояний
    //const [state, dispathc] = useReducer(reducer, firstState) //для хранения большого кол-во состояний. можем формировать последу. состояние на основе пред. 
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

export default List;