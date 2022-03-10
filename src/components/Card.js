import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import {Box, Image, Button} from '@chakra-ui/react'
import { DEL } from "../store/reducers/elemSlices/catsSlice/catsSlice";


const Card = (props) => {
    const dispatch = useDispatch();
    const delElem = (id) => dispatch(DEL(id));
    return(
    <Box maxW='xs' borderWidth='1px' borderRadius='lg' overflow='hidden' margin='1rem'>
        <Image src={props.imageUrl} alt={props.imageAlt} />
            <Box p='6'>
                <Box fontWeight='semibold'>
                {props.title}
                </Box>
                <Button colorScheme='teal' variant='solid' onClick={() => delElem(props.id)}>Удалить</Button>
            </Box>
    </Box>
    );
}

export default Card;