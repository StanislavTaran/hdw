import React from 'react';
import T from 'prop-types';
import { Formik, Form } from 'formik';
import Input from '../common/Input/Input';
import Button from '../common/Button/Button';
import Select from '../common/Select/Select';
import Label from '../common/Label/Label';
import ErrorLabel from '../common/ErrorLabel/ErrorLabel';
import styles from './UserForm.module.scss';
import { createUserSchema } from '../../helpers/schemas/createUserSchema';
import { genderValues, loyaltyPrograms } from '../../constants/initialStates';

import InputMask from 'react-input-mask';

const initialState = {
  firstName: '',
  surname: '',
  gender: '',
  loyaltyProgram: loyaltyPrograms['unavailable'],
  cardNumber: '',
};

const genderValuesForInput = [['', ''], ...Object.entries(genderValues)];
const loyaltyProgramsForInput = Object.entries(loyaltyPrograms);

export default function UserForm({ fact = '', onCreateUser }) {
  return (
    <Formik
      initialValues={initialState}
      validationSchema={createUserSchema}
      onSubmit={(values, { setStatus, setSubmitting, resetForm }) => {
        onCreateUser(values).then(res => {
          setSubmitting(false);
          setStatus('sent');
          resetForm();
        });
      }}
    >
      {({ errors, touched, values, isSubmitting, handleSubmit, handleChange, handleBlur, handleReset }) => (
        <Form className={styles.form}>
          <Label htmlFor="firstname" text="Name* :">
            <Input
              type="text"
              name="firstName"
              placeholder="Enter your first name."
              value={values.firstName}
              error={errors.firstName}
              touched={touched.firstName}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Label>
          {errors.firstName && touched.firstName ? <ErrorLabel text={errors.firstName} /> : null}
          <Label htmlFor="price" text="Surname * :">
            <Input
              type="text"
              name="surname"
              placeholder="Enter your surname."
              value={values.surname}
              error={errors.surname}
              touched={touched.surname}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Label>
          {errors.surname && touched.surname ? <ErrorLabel text={errors.surname} /> : null}
          <Label htmlFor="gender" text="Gender* :">
            <Select values={genderValuesForInput} name="gender" />
          </Label>
          {errors.gender && touched.gender ? <ErrorLabel text={errors.gender} /> : null}
          <Label htmlFor="loyaltyProgram" text="Loyalty Program* :">
            <Select values={loyaltyProgramsForInput} name="loyaltyProgram" />
          </Label>
          {errors.loyaltyProgram && touched.loyaltyProgram ? <ErrorLabel text={errors.loyaltyProgram} /> : null}
          {values && values.loyaltyProgram === loyaltyPrograms.card && (
            <>
              <Label htmlFor="cardNumber" text="Card number : ">
                <InputMask
                  mask="9999 9999 9999 9999"
                  maskChar={null}
                  value={values.cardNumber}
                  error={errors.cardNumber}
                  touched={touched.cardNumber}
                  onChange={handleChange}
                  onBlur={handleBlur}
                >
                  {inputProps => (
                    <Input type="text" name="cardNumber" placeholder="Enter card number." {...inputProps} />
                  )}
                </InputMask>
              </Label>
              {errors.cardNumber && touched.cardNumber ? <ErrorLabel text={errors.cardNumber} /> : null}
            </>
          )}
          <Button type="submit" disabled={isSubmitting} onClick={handleSubmit}>
            Save
          </Button>
          <span className={styles.factText}>{`Interesting fact : ${fact}`}</span>
        </Form>
      )}
    </Formik>
  );
}

UserForm.propTypes = {
  fact: T.string,
  onCreateUser: T.func.isRequired,
};
