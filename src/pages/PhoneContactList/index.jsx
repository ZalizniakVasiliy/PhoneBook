import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from "react-bootstrap/ListGroup";
import RoutesToPages from "../../components/RoutesToPages";
import ContactListInput from "../../components/ContactListInput";

const PhoneContactList = () => {
    const [searchContact, setSearchContact] = useState('');
    const navigate = useNavigate();
    const allContacts = useSelector(({contactsData}) => contactsData);

    const sortedContacts = [...allContacts]
        .sort((prevContact, nextContact) =>
            prevContact.firstName > nextContact.firstName ? 1 : -1);

    const createContact = () => {
        navigate(RoutesToPages.addItem);
    };

    const handleSearchContact = ({target}) => {
        setSearchContact(target.value);
    };

    const handleResetSearchContact = () => {
        setSearchContact('');
    };

    const viewContactInfo = contactId => () => {
        navigate(RoutesToPages.view + contactId);
    };

    const contactsToView = sortedContacts.filter(singleContact => {
        if (singleContact.firstName.concat(singleContact.lastName)
                .toLowerCase().includes(searchContact.toLowerCase())
            ||
            singleContact.firstName.concat(' ').concat(singleContact.lastName)
                .toLowerCase().includes(searchContact.toLowerCase())
            ||
            singleContact.phoneNumber.includes(searchContact)) {
            return `${singleContact.firstName} ${singleContact.lastName}`;
        }
    });

    const renderContacts = () => {
        return (
            <ListGroup className='mt-2 fs-6 bg-success'>
                {contactsToView.map(elem => (
                    <ListGroup.Item variant='success'
                                    key={elem.id}
                                    onClick={viewContactInfo(elem.id)}>
                        {elem.firstName} {elem.lastName}
                    </ListGroup.Item>
                ))}
            </ListGroup>
        );
    };

    return (
        <Container>
            <Row className='d-flex justify-content-center'>
                <Col xs={6} className='mt-5 p-2 bg-black rounded-3'>
                    <h1 className='text-center mb-2 text-success'>Phone Book</h1>
                    <ContactListInput
                        createContact={createContact}
                        sortedContacts={sortedContacts}
                        resetSearchContact={handleResetSearchContact}
                        searchContact={searchContact}
                        findContact={handleSearchContact}
                    />
                    {sortedContacts.length > 0 ? renderContacts()
                        : <p className='mt-2 text-center text-danger fs-4'>Contacts aren't found</p>}
                </Col>
            </Row>
        </Container>
    );
};

export default PhoneContactList;