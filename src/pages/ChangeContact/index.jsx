import {useSelector, useDispatch} from "react-redux";
import {useNavigate, useParams} from 'react-router-dom';
import {editContact} from '../../store/slices/contact';
import EditForm from "../../components/EditForm";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import RoutesToPages from "../../components/RoutesToPages";

const ChangeContact = () => {
    const dispatch = useDispatch();
    const {id} = useParams();
    const navigate = useNavigate();

    const contactToEdit = useSelector(({contactsData}) =>
        contactsData.find(elem => elem.id === id));

    const submitForm = fieldValues => {
        dispatch(editContact({...fieldValues, id}));
        navigate(RoutesToPages.homePage);
    };

    const deleteContact = () => {
        navigate(RoutesToPages.deleteItem);
    };

    return (
        <Container>
            <Row className='d-flex justify-content-center mt-5'>
                <Col xs={6} className='bg-black rounded-3 p-2'>
                    <h1 className='d-flex justify-content-center mb-2 text-success'>Change Contact</h1>
                    <EditForm
                        currentItem={contactToEdit}
                        handleSubmitContact={submitForm}
                        handleDeleteContact={deleteContact}/>
                </Col>
            </Row>
        </Container>
    )
}

export default ChangeContact;