import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import ListGroup from "react-bootstrap/ListGroup";

const PhoneContactList = () => {
    const [searchContact, setSearchContact] = useState('');
    const navigate = useNavigate();
    let allContacts = useSelector(({contactsData}) => contactsData);

    let sortedContacts = [...allContacts]
        .sort((prevContact, nextContact) => prevContact.name > nextContact.name ? 1 : -1);

    const createContact = () => {
        navigate('newContact');
    };

    const handleSearchContact = ({target}) => {
        setSearchContact(target.value);
    };

    const handleResetSearchContact = () => {
        setSearchContact('');
    };

    const viewContactInfo = (contactId) => () => {
        navigate('contactInfo/' + contactId);
    };

    const getSearchingContacts = sortedContacts.filter(singleContact => {
        if (singleContact.name.toLowerCase().includes(searchContact.toLowerCase())
            ||
            singleContact.phoneNumber.includes(searchContact)) {
            return singleContact.name;
        }
    });

    const renderContacts = () => {
        return (
            <ListGroup className='mt-2 mb-2 fs-6 bg-success'>
                {getSearchingContacts.map(elem => (
                    <ListGroup.Item variant='success'
                                    key={elem.id}
                                    onClick={viewContactInfo(elem.id)}>
                        {elem.name}
                    </ListGroup.Item>
                ))}
            </ListGroup>
        )
    };

    return (
        <>
            <Container>
                <Row className='d-flex justify-content-center'>
                    <Col xs={6} className='mt-5 bg-black rounded-3'>
                        <h1 className='text-center mb-3  text-success'>Phone Book</h1>
                        <InputGroup>
                            <Button variant="danger"
                                    id="button-addon1"
                                    onClick={handleResetSearchContact}
                                    disabled={!searchContact}>Cancel
                            </Button>
                            <Form.Control
                                placeholder='Search contact'
                                disabled={allContacts.length === 0}
                                value={searchContact}
                                onChange={handleSearchContact}
                            />
                            <Button variant="outline-success"
                                    id="button-addon1"
                                    onClick={createContact}>New contact
                            </Button>
                        </InputGroup>
                        {allContacts.length > 0 ? renderContacts()
                            : <p className='mt-2 text-end text-danger fs-4'>Contacts aren't found</p>}
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default PhoneContactList;