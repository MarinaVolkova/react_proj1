import React from "react";
import {Box, Image} from '@chakra-ui/react'

const Card = ( {data} ) => {
    const property = {
        imageUrl: '../1.jpg',
        imageAlt: 'тут картинка должна быть, но что-то пошло не так',
        title: 'пастельно-постельный кот'
      }
    return(
    <Box maxW='xs' borderWidth='1px' borderRadius='lg' overflow='hidden' margin='1rem'>
        <Image src={property.imageUrl} alt={property.imageAlt} />
            <Box p='6'>
                <Box fontWeight='semibold'>
                {property.title}
                { data }
                </Box>
            </Box>
    </Box>
    );
}

export default Card;