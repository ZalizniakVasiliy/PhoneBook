import {useDispatch} from "react-redux";
import {useNavigate} from 'react-router-dom';
import {addContact} from "../../store/slices/contact";
import ContactForm from "../../components/ContactForm";
import _ from "lodash";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const CreateContact = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const submitForm = (fieldValues) => {
        const id = _.uniqueId();
        dispatch(addContact({...fieldValues, id}));
        navigate('/');
    }

    return (
        <Container>
            <Row className='d-flex justify-content-center mt-5'>
                <Col xs={6}>
                    <ContactForm
                        handleSubmitContact={submitForm}/>
                </Col>
            </Row>
        </Container>
    )
}

export default CreateContact;