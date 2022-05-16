import React from 'react';
import { Formik, Form, useFormik, FormikProvider, Field, ErrorMessage } from 'formik';
import TextField  from './TextField';
import * as Yup from 'yup';

const SignUp = () => {
  const validate = Yup.object({
    firstName: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .required('Required'),
    lastName: Yup.string()
      .max(20, 'Must be 20 characters or less')
      .required('Required'),
    email: Yup.string()
      .email('Email is invalid')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 charaters')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Password must match')
      .required('Confirm password is required'),
  })
  const onSubmit = (values:any)=>{
    console.log(values);
  }
  const formik = useFormik({
    initialValues: {
      firtName:''
    },
    onSubmit : onSubmit,
    validationSchema:validate
  });
  return (
    <>
    <FormikProvider value={formik}>
        <Form>
          <label htmlFor="firstName">FirstName</label>  
          <Field type="text" className="form-control shadow-none " name="firstName" placeholder="Username" /> 
          <ErrorMessage component="div" name='firstName' className="error" />

          <label htmlFor="lastName">LastName</label>  
          <Field type="text" className="form-control shadow-none " name="lastName" placeholder="Username" /> 
          <ErrorMessage component="div" name='lastName' className="error" />

          <label htmlFor="email">Email</label>  
          <Field type="email" className="form-control shadow-none " name="email" placeholder="Username" /> 
          <ErrorMessage component="div" name='email' className="error" />

          <label htmlFor="password">Password</label>  
          <Field type="password" className="form-control shadow-none " name="password" placeholder="Username" /> 
          <ErrorMessage component="div" name='password' className="error" />

          <label htmlFor="confirmPassword">Confirm Password</label>  
          <Field type="password" className="form-control shadow-none " name="confirmPassword" placeholder="Username" /> 
          <ErrorMessage component="div" name='confirmPassword' className="error" />

            <button className="btn btn-outline-success mt-3" type="submit">Register</button> 
            <button className="btn btn-outline-danger mt-3 mx-3" type="reset">Reset</button>
            </Form>
    </FormikProvider>
    </>
    // <Formik
    //   initialValues={{
    //     firstName: '',
    //     lastName: '',
    //     email: '',
    //     password: '',
    //     confirmPassword: ''
    //   }}
    //   validationSchema={validate}
    //   onSubmit={values => {
    //     console.log(values)
    //   }}
    // >
    //   {formik => (
    //     <div>
    //       <h1 className="my-4 font-weight-bold .display-4">Sign Up</h1>
    //       <Form>
    //         <TextField label="First Name" name="firstName" type="text" />
    //         <TextField label="last Name" name="lastName" type="text" />
    //         <TextField label="Email" name="email" type="email" />
    //         <TextField label="password" name="password" type="password" />
    //         <TextField label="Confirm Password" name="confirmPassword" type="password" />
    //         <button className="btn btn-outline-success mt-3" type="submit">Register</button> 
    //         <button className="btn btn-outline-danger mt-3 mx-3" type="reset">Reset</button>
    //       </Form>
    //     </div>
    //   )}
    // </Formik>
  )
}
export default SignUp;