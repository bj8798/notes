import { ADD_NOTE, DELETE_NOTE, UPDATE_NOTE } from './actionTypes';
const initialState = {notes:[]};

let currId = 0;
const getNextId = () => {
    currId += 1;
    return currId;
}

export const baseReducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_NOTE:
            return {...state, notes:[...state.notes, {id: getNextId(), title: action.title, content: action.content}]}
        case DELETE_NOTE:
            return {...state, notes: state.notes.filter((note) => note.id !== action.id)}
        case UPDATE_NOTE:
            return {...state, notes: state.notes.map((note) => note.id !== action.id ? note : { id: action.id,  title: action.title, content: action.content})}
        default:
            return state;
    }
}


