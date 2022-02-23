import React, {useState, useReducer, useContext, useEffect, useRef } from 'react';
import Card from './Card';
import { ListContext } from '../context/ListContext';
import {Container, Flex } from '@chakra-ui/react'
import Card2 from "./Card2";

const ListData = [
    {
        imageUrl: '../1.jpg',
        imageAlt: 'тут картинка должна быть, но что-то пошло не так',
        title: '1 пастельно-постельный кот',
        id: '22'
    },
    {
        imageUrl: '../1.jpg',
        imageAlt: 'тут картинка должна быть, но что-то пошло не так',
        title: '2 пастельно-постельный кот',
        id: '232'
    },
    {
        imageUrl: '../1.jpg',
        imageAlt: 'тут картинка должна быть, но что-то пошло не так',
        title: '3 пастельно-постельный кот',
        id: '234',
    },
    {
        imageUrl: '../1.jpg',
        imageAlt: 'тут картинка должна быть, но что-то пошло не так',
        title: '4 пастельно-постельный кот',
        id: '2332'
    }
]

const List = () => {
    const inputRef = useRef();
    const marinaRef = useRef();

    const [width, setWidth] = useState(1000);
    const [count, setCount] = useState(0);
    // setWidth(marinaRef.current.clientWidth)

    useEffect(() => {
        if (count > 2) {
            alert('MARINA!')
        }
    }, [count])

    const handleClick = () => {
        setCount(count + 1)
    }

    return(
      <div ref={marinaRef}>
          Marina <br />
          width: { width } <br />
          count: { count }
          <Card2 />
          <button onClick={() => handleClick()}>BUTTON 2</button>
      </div>

        // <Container maxW = 'container.xl'>
        //     <Card2 />
        //     <input ref={inputRef} type="text" name="marina" />
        //
        //     <div ref={marinaRef} style={ { 'width': '200px', 'backgroundColor': 'red' } }>
        //         Marina <br />
        //         width: { width }
        //
        //     </div>
        //     <Flex justifyContent='space-around' alignItems='center' flexWrap='wrap' >
        //         {
        //             ListData.map(({ id, imageUrl, imageAlt, title}) => (<Card
        //                   key={id}
        //                   imageUrl={imageUrl}
        //                   imageAlt={imageAlt}
        //                   title={title}
        //                   marina={{
        //                       title: 'Marina',
        //                       last: 'Volkova'
        //                   }}
        //                 />
        //             ))
        //         }
        //
        //     </Flex>
        //
        // </Container>
    );
}

export default List;