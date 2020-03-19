import React from 'react';
import {Form, Formik, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';

const SearchBar = () => {
  return (
    <Formik
      initialValues={{ serviceDropdown: '' }}
      validationSchema={Yup.object({
        serviceDropdown: Yup.string()
          .required('Required')
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      <Form>
        <label htmlFor="service">Service Needed</label>
        <Field name="serviceDropdown" as="select" >
          <option value="">Select a Value</option>
          <option value="prenatal-yoga">PreNatal Yoga</option>
        </Field>
        <ErrorMessage name="serviceDropdown" />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default SearchBar
