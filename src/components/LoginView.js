import { useState } from 'react';
import { Redirect } from 'react-router-dom';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const LoginView = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isSubmitted, setSubmit] = useState(false);

    const handleSubmit = () => {
        setSubmit(true);
    }

    if(isSubmitted)
    {
        return(
            <Redirect to='/notes'/>
        );
    }

    return(
        <div style={{width: '70%'}}>
            <Form>
                <Form.Group>
                    <Form.Label>
                        Username
                    </Form.Label>
                    <Form.Control type="text" onChange={(event)=>setUsername(event.target.value)}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>
                        Password
                    </Form.Label>
                    <Form.Control type="text"  onChange={(event)=>setPassword(event.target.value)}/>
                </Form.Group>
                <Button onClick={handleSubmit}>
                    Submit
                </Button>
            </Form>
        </div>
    );
}

export default LoginView;