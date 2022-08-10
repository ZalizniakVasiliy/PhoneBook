import {useSelector, useDispatch} from "react-redux";
import {useNavigate, useParams} from 'react-router-dom';
import {deleteContact} from "../../store/slices/contact";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from 'react-bootstrap/Card';
import RoutesToPages from "../../components/RoutesToPages";

const DeleteContact = () => {
    const dispatch = useDispatch();
    const {id} = useParams();
    const navigate = useNavigate();

    const contactToRemove = useSelector(({contactsData}) =>
        contactsData.find(elem => elem.id === id));

    const handleDelete = () => {
        dispatch(deleteContact(contactToRemove));
        navigate(RoutesToPages.homePage);
    };

    const redirectToEdit = () => {
        navigate(-1);
    };

    return (
        <Container>
            <Row className='d-flex justify-content-center mt-5'>
                <Col xs={6}>
                    <Card className='text-bg-dark'>
                        <Card.Header
                            className="text-center text-danger fs-4">Do you confirm deletion?
                        </Card.Header>
                        <Card.Body className="text-start">
                            <Card.Title>{contactToRemove.name}</Card.Title>
                            <Card.Text>
                                {contactToRemove.phoneNumber}
                            </Card.Text>
                            <Card.Text>
                                {contactToRemove.position}
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className="text-muted d-flex justify-content-between">
                            <Button variant="outline-warning"
                                    onClick={redirectToEdit}>Cancel
                            </Button>
                            <Button variant="outline-danger"
                                    onClick={handleDelete}>Confirm
                            </Button>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default DeleteContact;