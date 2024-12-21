import * as Yup from "yup";

import { useId } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import s from './ContactForm.module.css';
import PropTypes from 'prop-types';

const ContactScheme = Yup.object().shape({
    number: Yup.string().min(6, "Too Short!").max(13, "Too Long!").required("Required"),
    name: Yup.string().min(2, "Must be a valid name!").required("Required")
});

const initialValues = {
    name: "",
    number: "",
};

const ContactForm = ({onPhoneBook}) => {
    const nameFieldId = useId();
    const numberFieldId = useId();

const handleSubmit = (values, { resetForm }) => {
        onPhoneBook({
            id: Date.now(),
            ...values,
        });
        resetForm();
    };

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={ContactScheme}
        >
            <Form className={s.form}>
                <div className={s.label}>
                    <label htmlFor={nameFieldId}>Name</label>
                    <Field type="text" name="name" className={s.field} id={nameFieldId} />
                    <ErrorMessage name="name" component="span" />
                </div>
                <div className={s.label}>
                    <label htmlFor={numberFieldId}>Number</label>
                    <Field type="tel" name="number" className={s.field} id={numberFieldId} />
                    <ErrorMessage name="number" component="span" />
                </div>
                <button type="submit" className={s.btn}>Add contact</button>
            </Form>
        </Formik>
    );
};

ContactForm.propTypes = {
    onPhoneBook: PropTypes.func.isRequired
}

export default ContactForm;