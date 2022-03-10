import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Flex } from '@chakra-ui/react'
import Card from '../../components/Card';
import { getCatData } from '../../store/selectors/cats';


const Home = () => {

    const data = useSelector(state => getCatData(state))

    return(
        <Container maxW = 'container.xl'> 
            <Flex justifyContent='space-around' alignItems='center' flexWrap='wrap' >
            {
                    data.map(({ id, imageUrl, imageAlt, title}) => (<Card
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

export default Home;