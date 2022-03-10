export const getUsersToken = (state) => {
    return state.users.token
}
export const getUsersEmail = (state) => {
    return state.users.email || null
}
export const getStatusError = (state) => {
    return state.users.errors
}

export const getStatusResponse = (state) => {
    return state.users.status
}