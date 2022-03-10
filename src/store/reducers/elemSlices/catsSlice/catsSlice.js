import { createSlice } from "@reduxjs/toolkit";

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
const  initialState = { 
    data: data || []
}

export const catsSlice = createSlice({
    name: 'cats',
    initialState,
    reducers: {
        ADD: (state) => {
            state.data.push({
                imageUrl: '../1.jpg',
                imageAlt: 'тут картинка должна быть, но что-то пошло не так',
                title: `пастельно-постельный кот`,
                id: Math.floor(Math.random() * 1000)
            })
        },
        DEL: (state, action) => {
            state.data = state.data.filter((elem) => +elem.id !== +action.payload)
        },

    }
})

export const { ADD, DEL } = catsSlice.actions
export default catsSlice.reducer