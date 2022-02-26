import React from "react";
import { connect } from 'react-redux';
import {Box, Image, Button} from '@chakra-ui/react'
import { del } from "../store/actions/addDel";

const Card = ( data ) => {
    console.log(data)
    return(
    <Box maxW='xs' borderWidth='1px' borderRadius='lg' overflow='hidden' margin='1rem'>
        <Image src={data.imageUrl} alt={data.imageAlt} />
            <Box p='6'>
                <Box fontWeight='semibold'>
                {data.title}
                </Box>
                <Button colorScheme='teal' variant='solid' onClick={() => data.delElem()}>Удалить</Button>
            </Box>
    </Box>
    );
}

const mapStateToProps = (state, props) => ({
    ListData: state.addDel.ListData
})


const mapDispatchToProps = (dispatch) => {
    
    return {
        delElem: (param) => dispatch(del(param))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Card);