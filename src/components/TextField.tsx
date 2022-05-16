import React from 'react';
import {  Formik, useField } from 'formik';

const TextField = ({ label, ...props }:any) => {
  const [field, meta] = useField(props);
  return (
    <div className="mb-2">
      <label htmlFor={field.name}>{label}</label>
      <input
        className={`form-control shadow-none ${meta.touched && meta.error && 'is-invalid'}`}
        {...field} {...props}
        autoComplete="off"
        // {...formik.getFieldProps(field.name)}
        
      />

      

      {/* <ErrorMessage component="div" name={field.name} className="error" /> */}
    </div>
  )
}

export default TextField;