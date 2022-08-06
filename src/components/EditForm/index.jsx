import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useFormik} from "formik";
import * as yup from 'yup';
import {useNavigate} from 'react-router-dom';

const EditForm = (props) => {

    const navigate = useNavigate();

    const goBack = () => {
        return navigate('/');
    }

    const formik = useFormik({
        initialValues: {
            name: props.currentItem.name,
            phoneNumber: props.currentItem.phoneNumber,
            position: props.currentItem.position,
        },

        validationSchema: yup.object({
            name: yup.string().trim().required('Required to fill'),
            phoneNumber: yup.number().required('Required to fill').positive().integer(),
            position: yup.string().trim().required('Required to fill'),
        }),

        onSubmit: (values, {resetForm}) => {
            props.handleSubmitContact(values);
            resetForm();
        },
    });

    return (
        <Form onSubmit={formik.handleSubmit} className='rounded-3 mb-3 p-3 text-bg-dark'>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Type a name</Form.Label>
                <Form.Control
                    name='name'
                    type="text"
                    placeholder="Name ..."
                    autoFocus
                    {...formik.getFieldProps('name')}/>
                {formik.touched.name && formik.errors.name ? (
                    <div>{formik.errors.name}</div>) : null}
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Type a phone number</Form.Label>
                <Form.Control
                    name='phoneNumber'
                    type="text"
                    placeholder="Phone number ..."
                    {...formik.getFieldProps('phoneNumber')}/>
                {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
                    <div>{formik.errors.phoneNumber}</div>) : null}
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Type a position</Form.Label>
                <Form.Control
                    name='position'
                    as="textarea"
                    rows={3}
                    placeholder='Position ...'
                    {...formik.getFieldProps('position')}/>
                {formik.touched.position && formik.errors.position ? (
                    <div>{formik.errors.position}</div>) : null}
            </Form.Group>

            <div className='d-flex justify-content-between'>
                <Button variant="outline-success"
                        type='submit'>Save
                </Button>

                <Button variant="outline-warning"
                        onClick={goBack}>Cancel
                </Button>

                <Button variant="outline-danger"
                        onClick={props.handleDeleteContact}>Delete
                </Button>
            </div>
        </Form>
    )
}

export default EditForm;