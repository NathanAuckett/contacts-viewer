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

function InfoListItem(props){
    return (
        <ListGroup.Item>
            <Container>
                <Row>
                    <Col xs={2}>
                        <a href={props.url} target="_blank" rel="noreferrer">
                            <img src = {props.icon} width="32px"></img>
                        </a>
                    </Col>
                    <Col className='text-end align-self-center'>{props.info}</Col>
                </Row>
            </Container>
        </ListGroup.Item>
    )
}

function AddressInfoListItem(props){
    return (
        <ListGroup.Item>
            <Container>
                <Row>
                    <Col xs={4}>{props.label}</Col>
                    <Col className='text-end'>{props.info}</Col>
                </Row>
            </Container>
        </ListGroup.Item>
    )
}

export default function Contact(props){
    const contact = props.contact;

    return (
        <Col sm={8}>
            <Card className='contactCard bg-secondary text-light'>
                <Card.Header className='text-center'><h5>{contact.name}</h5></Card.Header>
                <ListGroup variant="flush">
                    <InfoListItem icon={CallIcon} info={contact.phone} url={`tel: ${contact.phone}`}/>
                    <InfoListItem icon={EmailIcon} info={contact.email} url={`mailto: ${contact.email}`}/>
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
                                    <AddressInfoListItem label="Address:" info={`${contact.address.suite}, ${contact.address.street}`}/>
                                    <AddressInfoListItem label="City:" info={contact.address.city}/>
                                    <AddressInfoListItem label="Zip/Post Code:" info={contact.address.zipcode}/>
                                </ListGroup>
                            </Accordion.Body>
                        </Accordion>
                        
                    </ListGroup.Item>
                </ListGroup>
            </Card>
        </Col>
    )
}