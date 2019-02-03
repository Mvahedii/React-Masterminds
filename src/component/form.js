import React, { Component } from 'react'
import { Form,  Button } from 'react-bootstrap'

class FormComponent extends Component {

    render() {

        return (
            <Form className="formSection">
                <Form.Group>
                    <Form.Control type="number" placeholder="Enter Number..." />
                </Form.Group>
                <Button variant="primary" type="submit">GUESS</Button>
            </Form>

        )
    }
}

export default FormComponent;