export const addnewroom = (Rooms) => {
    return {
        type: "ADD_ROOM",
        payload: product
    }
};
export const Deleteroom = (id) => {
    return {
        type: "DELETE_ROOM",
        payload: id
    }
}
export const getAllroom = () => {
    return {
        type: "GET_ALL_ROOM",
    }
}
export const getroom = (id) => {
    return {
        type: "GET_ROOM",
        payload: id
    }
}
export const updateproduct = (data) => {
    return {
        type: "UPDATE_ROOM",
        payload: data
    }
}