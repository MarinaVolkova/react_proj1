import React from 'react';
import { connect } from 'react-redux';
import {Container, Flex } from '@chakra-ui/react'
import Card from '../../components/Card';


const Home = (props) => {

    return(
        <Container maxW = 'container.xl'> 
            <Flex justifyContent='space-around' alignItems='center' flexWrap='wrap' >
            {
                    props.ListData.map(({ id, imageUrl, imageAlt, title}) => (<Card
                          key={id}
                          imageUrl={imageUrl}
                          imageAlt={imageAlt}
                          title={title}
                        />
                    ))
                }
        
            </Flex>
        </Container>
    );
}
const mapStateToProps = (state, props) => ({
    ListData: state.addDel.ListData
})

export default connect(mapStateToProps, null)(Home);