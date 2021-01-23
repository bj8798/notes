import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Note = ({id, 
                title, 
                content,
                deleteHandler,
                editHandler,
            }) => {
    return (
        <Card bg="Light" key={id} text="Dark">
            <Card.Header>
                {title}
            </Card.Header>
            <Card.Body>
                {content}
            </Card.Body>
            <Card.Footer>
                <Button onClick={() => editHandler(id)}>
                    Edit
                </Button>
                <Button onClick={() => deleteHandler(id)}>
                    Delete
                </Button>
            </Card.Footer>
        </Card>
    )
}

export default Note;
