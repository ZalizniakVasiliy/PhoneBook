import {useNavigate, useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import RoutesToPages from "../../components/RoutesToPages";
import InfoContactCard from "../../components/InfoContactCard";

const ContactInfo = () => {
    const navigate = useNavigate();

    const goBack = () => {
        navigate(RoutesToPages.homePage);
    };

    const changeCurrentContact = () => {
        navigate(RoutesToPages.change);
    };

    const {id} = useParams();
    const currentContact = useSelector(({contactsData}) =>
        contactsData.find(elem => elem.id === id)
    );

    return (
        <Container>
            <Row className='d-flex justify-content-center mt-5'>
                <Col xs={6}>
                    <InfoContactCard
                        changeCurrentContact={changeCurrentContact}
                        currentContact={currentContact}
                        goBack={goBack}
                    />
                </Col>
            </Row>
        </Container>
    );
};

export default ContactInfo;