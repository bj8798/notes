import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { addNote, deleteNote, updateNote } from '../redux/actions';
import Note from './Note';


const NoteController = () => {

    const notes = useSelector(state => state.notes);
    const dispatch = useDispatch();
    
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [id, setId] = useState('');

    const handleAdd = () => {
        console.log("id:", id);
        if(id)
        {
            console.log("edit id:", id);
            dispatch(updateNote(id, title, content))
        }
        else
        {
            console.log("add id:", id);
            dispatch(addNote(title, content));  
        }
        setTitle('');
        setContent('');
        setId('');
    }

    const handleDelete = (id) => {
        dispatch(deleteNote(id));
    }

    const handleEdit = (id) => {
        notes.forEach((note)=>{
            if(note.id === id)
            {
                setTitle(note.title);
                setContent(note.content);
                setId(id);
            }
        });
    }

    console.log(notes);
    return(
        <div>
            <Form>
                <Form.Group>
                    <Form.Control type="text" value={title} onChange={(event)=>setTitle(event.target.value)}/>
                </Form.Group>
                <Form.Group>
                    <Form.Control as="textarea" rows={3} value={content} onChange={(event)=>setContent(event.target.value)}/>
                </Form.Group>
                <Button onClick={handleAdd}>
                    Add
                </Button>
            </Form>
            {
                notes.map((note) => (
                <Note 
                    id={note.id} 
                    title={note.title} 
                    content={note.content} 
                    deleteHandler ={handleDelete}
                    editHandler={handleEdit}
                    />
                ))
            }
        </div>
    )
}

export default NoteController;