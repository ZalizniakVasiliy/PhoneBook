import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useFormik} from "formik";
import * as yup from 'yup';
import {useNavigate} from 'react-router-dom';
import RoutesToPages from "../RoutesToPages";

const ContactForm = props => {

    const navigate = useNavigate();

    const goBack = () => {
        return navigate(RoutesToPages.homePage);
    };

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            phoneNumber: '',
            position: '',
        },

        validationSchema: yup.object({
            firstName: yup.string().trim().required('Required to fill'),
            lastName: yup.string().trim().required('Required to fill'),
            phoneNumber: yup.number().required('Required to fill').positive().integer(),
            position: yup.string().trim().required('Required to fill'),
        }),

        onSubmit: (values, {resetForm}) => {
            props.handleSubmitContact(values);
            resetForm();
        },
    });

    return (
        <Form onSubmit={formik.handleSubmit}
              className='rounded-3 text-bg-dark p-3'>
            <Form.Group className="mb-3"
                        controlId="exampleForm.ControlInput1">
                <Form.Label>Type a first name</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="First name ..."
                    autoFocus
                    {...formik.getFieldProps('firstName')}/>
                {formik.touched.firstName && formik.errors.firstName ? (
                    <div>{formik.errors.firstName}</div>) : null}
            </Form.Group>
            <Form.Group className="mb-3"
                        controlId="exampleForm.ControlInput2">
                <Form.Label>Type a last name</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Last name ..."
                    {...formik.getFieldProps('lastName')}/>
                {formik.touched.lastName && formik.errors.lastName ? (
                    <div>{formik.errors.lastName}</div>) : null}
            </Form.Group>
            <Form.Group className="mb-3"
                        controlId="exampleForm.ControlInput3">
                <Form.Label>Type a phone number</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Phone number ..."
                    {...formik.getFieldProps('phoneNumber')}/>
                {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
                    <div>{formik.errors.phoneNumber}</div>) : null}
            </Form.Group>
            <Form.Group className="mb-3"
                        controlId="exampleForm.ControlTextarea1">
                <Form.Label>Type a position</Form.Label>
                <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder='Position ...'
                    {...formik.getFieldProps('position')}/>
                {formik.touched.position && formik.errors.position ? (
                    <div>{formik.errors.position}</div>) : null}
            </Form.Group>
            <div className='d-flex justify-content-between'>
                <Button variant="outline-warning"
                        onClick={goBack}>Cancel
                </Button>
                <Button variant="outline-success"
                        type='submit'>Create
                </Button>
            </div>
        </Form>
    );
};

export default ContactForm;