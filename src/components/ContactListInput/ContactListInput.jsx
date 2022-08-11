import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

const ContactListInput = props => {
    return (
        <InputGroup>
            <Button variant="danger"
                    id="button-addon1"
                    onClick={props.resetSearchContact}
                    disabled={!props.searchContact}>Cancel
            </Button>
            <Form.Control
                placeholder='Search contact'
                disabled={props.sortedContacts.length === 0}
                value={props.searchContact}
                onChange={props.findContact}
            />
            <Button variant="outline-success"
                    id="button-addon1"
                    onClick={props.createContact}>New contact
            </Button>
        </InputGroup>
    );
};

export default ContactListInput;