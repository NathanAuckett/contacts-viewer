
import Col from 'react-bootstrap/Col';

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

export default function Search(props){
    
    return (
        <Col xs={8} sm={9} md={10} lg={10}>
            <InputGroup size="lg" className="mb-3">
                <Form.Control onChange={props.handleChange}
                    placeholder="Name Search"
                    aria-label="Name Search"
                    aria-describedby="basic-addon2"
                />
            </InputGroup>
        </Col>
    )
}