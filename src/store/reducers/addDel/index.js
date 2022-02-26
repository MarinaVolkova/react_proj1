import { ADD, DEL } from "../../types/types"


const ListData = [
    {
        imageUrl: '../1.jpg',
        imageAlt: 'тут картинка должна быть, но что-то пошло не так',
        title: 'пастельно-постельный кот',
        id: '22'
    },
    {
        imageUrl: '../1.jpg',
        imageAlt: 'тут картинка должна быть, но что-то пошло не так',
        title: 'пастельно-постельный кот',
        id: '232'
    },
    {
        imageUrl: '../1.jpg',
        imageAlt: 'тут картинка должна быть, но что-то пошло не так',
        title: 'пастельно-постельный кот',
        id: '234',
    }
]

const rand = () =>{
    return Math.floor(Math.random() * 1000)
}

const initialState = { 
    ListData: ListData
}

const addDelReducer = (state = initialState, actions) => {
    switch (actions.type) {
        case ADD:
            const card = {
            imageUrl: '../1.jpg',
            imageAlt: 'тут картинка должна быть, но что-то пошло не так',
            title: 'пастельно-постельный кот',
            id: rand()
        }
            return {
                ...state,
                ListData: [...state.ListData, card]
            }
        case DEL:

            return {
                ...state,
                ListData: [...state.ListData].slice(0, actions.payload)
            }
    
        default:
           return state;
    }
}

export default addDelReducer;