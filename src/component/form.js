import React, { Component } from 'react'
import { Form,  Button } from 'react-bootstrap'

import './form.css'

class FormComponent extends Component {

    render() {

        return (
            <Form>
                <Form.Group>
                    <Form.Control type="number" placeholder="Enter Number..." />
                </Form.Group>
                <Button className="submitButton" variant="danger" type="submit">GUESS</Button>
            </Form>

        )
    }
}

export default FormComponent;