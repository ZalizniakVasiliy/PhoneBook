import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const ContactCardToDelete = props => {
    return (
        <Card className='text-bg-dark'>
            <Card.Header
                className="text-center text-danger fs-4">Do you confirm deletion?
            </Card.Header>
            <Card.Body className="text-start">
                <Card.Title>{props.contactToRemove.firstName} {props.contactToRemove.lastName}</Card.Title>
                <Card.Text>
                    {props.contactToRemove.phoneNumber}
                </Card.Text>
                <Card.Text>
                    {props.contactToRemove.position}
                </Card.Text>
            </Card.Body>
            <Card.Footer className="d-flex justify-content-between">
                <Button variant="outline-warning"
                        onClick={props.redirectToEdit}>Cancel
                </Button>
                <Button variant="outline-danger"
                        onClick={props.handleDelete}>Confirm
                </Button>
            </Card.Footer>
        </Card>
    );
};

export default ContactCardToDelete;