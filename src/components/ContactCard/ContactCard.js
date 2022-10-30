import './ContactCard.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Accordion from 'react-bootstrap/Accordion';

import CallIcon from "../../icons/call.svg"
import EmailIcon from "../../icons/mail.svg"
import AddressIcon from "../../icons/home.svg"

export default function Contact(props){
    const contact = props.contact;

    return (
        <Col lg={8}>
        <Card className='contactCard bg-secondary text-light'>
            <Card.Header className='text-center'>{contact.name}</Card.Header>
            <ListGroup variant="flush">
                <ListGroup.Item>
                    <Container>
                        <Row>
                            <Col xs={2}><img src = {CallIcon} width="32px"></img></Col>
                            <Col className='text-end'>{contact.phone}</Col>
                        </Row>
                    </Container>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Container>
                        <Row>
                            <Col xs={2}><img src = {EmailIcon} width="32px"></img></Col>
                            <Col className='text-end'>{contact.email}</Col>
                        </Row>
                    </Container>
                </ListGroup.Item>
                <ListGroup.Item >
                    <Accordion flush>
                        <Accordion.Header>
                        <Container fluid>
                            <Row>
                                <Col><img src = {AddressIcon} width="32px"></img></Col>
                                <Col className='text-end align-self-center'>Address:</Col>
                            </Row>
                        </Container>
                        </Accordion.Header>
                        <Accordion.Body>
                            <ListGroup>
                                <ListGroup.Item>
                                    <Container>
                                        <Row>
                                            <Col xs={4}>Address:</Col>
                                            <Col className='text-end'>{contact.address.suite}, {contact.address.street}</Col>
                                        </Row>
                                    </Container>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Container>
                                        <Row>
                                            <Col>City:</Col>
                                            <Col className='text-end'>{contact.address.city}</Col>
                                        </Row>
                                    </Container>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Container>
                                        <Row>
                                            <Col>Zip/Post Code:</Col>
                                            <Col className='text-end'>{contact.address.zipcode}</Col>
                                        </Row>
                                    </Container>
                                </ListGroup.Item>
                            </ListGroup>
                        </Accordion.Body>
                    </Accordion>
                    
                </ListGroup.Item>
            </ListGroup>
        </Card>
        </Col>
        // <Container className = "contactCard">
        //     <Row>
        //         <Col>Name:</Col>
        //         <Col>{contact.name}</Col>
        //     </Row>
        //     <Row>
        //         <Col>Phone:</Col>
        //         <Col>{contact.phone}</Col>
        //     </Row>
        //     <Row>
        //         <Col>Email:</Col>
        //         <Col>{contact.email}</Col>
        //     </Row>
        //     <Row>
        //         <Col>Address:</Col>
        //     </Row>
        // </Container>
    )
}