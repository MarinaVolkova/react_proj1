import { ADD, DEL } from "../../types/types"


const data = [
    {
        imageUrl: '../1.jpg',
        imageAlt: 'тут картинка должна быть, но что-то пошло не так',
        title: 'пастельно-постельный кот',
        id: 22
    },
    {
        imageUrl: '../1.jpg',
        imageAlt: 'тут картинка должна быть, но что-то пошло не так',
        title: 'пастельно-постельный кот',
        id: 232
    },
    {
        imageUrl: '../1.jpg',
        imageAlt: 'тут картинка должна быть, но что-то пошло не так',
        title: 'пастельно-постельный кот',
        id: 234,
    }
]

const rand = () =>{
    return Math.floor(Math.random() * 1000)
}

const initialState = { 
    data: data || []
}

const catsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD:
            const card = {
            imageUrl: '../1.jpg',
            imageAlt: 'тут картинка должна быть, но что-то пошло не так',
            title: `пастельно-постельный кот`,
            id: rand()
        }
            return {
                ...state,
                data: [...state.data, card]
            }
        case DEL:
            const updList = state.data.filter((elem) => +elem.id !== +action.payload);  
            return {
                ...state,
                data: [...updList] 
            }
    
        default:
           return state;
    }
}

export default catsReducer;