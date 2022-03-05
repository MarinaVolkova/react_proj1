import React from 'react';
import { connect } from 'react-redux';
import { Container, Flex } from '@chakra-ui/react'
import Card from '../../components/Card';
import { getCatData } from '../../store/selectors/cats';


const Home = (props) => {

    return(
        <Container maxW = 'container.xl'> 
            <Flex justifyContent='space-around' alignItems='center' flexWrap='wrap' >
            {
                    props.data.map(({ id, imageUrl, imageAlt, title}) => (<Card
                          key={id}
                          id={id}
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
    data: getCatData(state)
})

export default connect(mapStateToProps, null)(Home);