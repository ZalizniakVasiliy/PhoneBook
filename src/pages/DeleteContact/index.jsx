import {useSelector, useDispatch} from "react-redux";
import {useNavigate, useParams} from 'react-router-dom';
import {deleteContact} from "../../store/slices/contact";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import RoutesToPages from "../../components/RoutesToPages";
import ContactCardToDelete from "../../components/ContactCardToDelete/ContactCardToDelete";

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
                    <ContactCardToDelete
                        contactToRemove={contactToRemove}
                        handleDelete={handleDelete}
                        redirectToEdit={redirectToEdit}
                    />
                </Col>
            </Row>
        </Container>
    );
};

export default DeleteContact;