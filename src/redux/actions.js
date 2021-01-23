import { ADD_NOTE, UPDATE_NOTE, DELETE_NOTE } from './actionTypes';

export const addNote = (title, content) => ({type: ADD_NOTE, title, content});

export const updateNote = (id, title, content) => ({type: UPDATE_NOTE, id, title, content});

export const deleteNote = (id) => ({type: DELETE_NOTE, id});
