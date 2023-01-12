import { useFormik } from 'formik';
// import * as yup from 'yup';
import TextField from '@mui/material/TextField';
import { useMutation } from '@apollo/client';
import { Typography, /*AppBar,*/ Button, /*Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container*/ } from '@mui/material';

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

    const formik = useFormik({
        initialValues,
        validationSchema: /*validationSchema,*/
        onSubmit
    });

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <Typography>Label text here</Typography>
                <TextField 
                    label="FirstName"
                    variant="outlined"
                    name={'firstName'}
                    value={formik.values.firstName}
                    onChange={formik.handleChange}
                    error = {
                        formik.touched.firstName && 
                        Boolean(formik.errors.firstName)
                    }
                    helperText = {
                        formik.touched.firstName && formik.errors.firstName
                    }
                />
                <Typography>Label text here</Typography>
                <TextField 
                    label="FirstName"
                    variant="outlined"
                    name={'firstName'}
                    value={formik.values.firstName}
                    onChange={formik.handleChange}
                    error = {
                        formik.touched.firstName && 
                        Boolean(formik.errors.firstName)
                    }
                    helperText = {
                        formik.touched.firstName && formik.errors.firstName
                    }
                />
                <Button size={'large'} variant={'contained'} type={'submit'}>Create Customer</Button>
            </form>
        </div>
    );
}

export default CreateCustomerForm;