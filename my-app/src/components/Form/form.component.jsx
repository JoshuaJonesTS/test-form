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
}