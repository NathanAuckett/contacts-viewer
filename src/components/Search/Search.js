
import Col from 'react-bootstrap/Col';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

export default function Search(props){
    
    return (
        <Col xs={8} md={6}>
            {/* <input id="input" type="text" onChange={props.handleChange}></input> */}

            <InputGroup size="lg" className="mb-3">
                <Form.Control onChange={props.handleChange}
                    placeholder="Search"
                    aria-label="Search"
                    aria-describedby="basic-addon2"
                />
            </InputGroup>
        </Col>
    )
}