import { useFormik } from 'formik';
import * as yup from 'yup';
import TextField from '@mui/material/TextField';
import { useMutation } from '@apollo/client';

const CreateCustomerForm = () => {
    const [createCustomer, {data, loading, error}] = useMutation();

    const initialValues = {
        firstName: '',
        lastName: ''
    }

    const onSubmit = (values) => {
        const submitData = {firstName: values.firstName, lastName: values.lastName};

        createCustomer({ variables: submitData })
            .catch(err => {})
            .then(response => {})
    }
}