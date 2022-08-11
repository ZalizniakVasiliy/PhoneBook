import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const InfoContactCard = props => {
    return (
        <Card className="text-start bg-black">
            <Card.Header
                className='d-flex justify-content-between align-items-end text-success fs-4'>
                Contact Info
                <Button
                    variant="outline-success"
                    onClick={props.changeCurrentContact}>Change
                </Button>
            </Card.Header>
            <hr className='m-0 text-bg-primary'/>
            <Card.Body className='text-start text-light'>
                <Card.Title>{props.currentContact.name}</Card.Title>
                <hr/>
                <Card.Title>{props.currentContact.phoneNumber}</Card.Title>
                <hr/>
                <Card.Title>{props.currentContact.position}</Card.Title>
            </Card.Body>
            <hr className='m-0 text-bg-primary'/>
            <Card.Footer className="text-end">
                <Button variant="outline-warning"
                        onClick={props.goBack}>Cancel
                </Button>
            </Card.Footer>
        </Card>
    );
};

export default InfoContactCard;