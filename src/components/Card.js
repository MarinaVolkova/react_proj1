import React from "react";
import { connect } from 'react-redux';
import {Box, Image, Button} from '@chakra-ui/react'
import { del } from "../store/actions/cats";
import {getCatData} from '../store/selectors/cats'

const Card = ( props ) => {
    return(
    <Box maxW='xs' borderWidth='1px' borderRadius='lg' overflow='hidden' margin='1rem'>
        <Image src={props.imageUrl} alt={props.imageAlt} />
            <Box p='6'>
                <Box fontWeight='semibold'>
                {props.title}
                </Box>
                <Button colorScheme='teal' variant='solid' onClick={() => props.delElem(props.id)}>Удалить</Button>
            </Box>
    </Box>
    );
}

const mapStateToProps = (state) => ({
    data: getCatData(state)
})


const mapDispatchToProps = (dispatch) => {
    
    return {
        delElem: (id) => dispatch(del(id))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Card);