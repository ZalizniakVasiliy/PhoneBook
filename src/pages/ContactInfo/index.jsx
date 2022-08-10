import {useNavigate, useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from "react-bootstrap/Button";
import Card from 'react-bootstrap/Card';

const ContactInfo = () => {
    const navigate = useNavigate();

    const goBack = () => {
        return navigate('/');
    };

    const changeCurrentContact = () => {
        navigate('changeContact');
    };

    const {id} = useParams();
    const currentContact = useSelector(({contactsData}) =>
        contactsData.find(elem => elem.id === id)
    );

    return (
        <Container>
            <Row className='d-flex justify-content-center mt-5'>
                <Col xs={6}>
                    <Card className="text-start bg-black">
                        <Card.Header
                            className='d-flex justify-content-between align-items-end text-success fs-4'>
                            Contact Info
                            <Button
                                variant="outline-success"
                                onClick={changeCurrentContact}>Change
                            </Button>
                        </Card.Header>
                        <hr className='m-0 text-bg-primary'/>
                        <Card.Body className='text-start text-light'>
                            <Card.Title>{currentContact.name}</Card.Title>
                            <hr/>
                            <Card.Title>{currentContact.phoneNumber}</Card.Title>
                            <hr/>
                            <Card.Title>{currentContact.position}</Card.Title>
                        </Card.Body>
                        <hr className='m-0 text-bg-primary'/>
                        <Card.Footer className="text-end">
                            <Button variant="outline-warning"
                                    onClick={goBack}>Cancel
                            </Button>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default ContactInfo;