import React from 'react';
import T from 'prop-types';
import { Field } from 'formik';
import styles from './Select.module.scss';

export default function Select({ values, name }) {
  return (
    <Field as="select" name={name} className={styles.select}>
      {values.map(value => (
        <option key={value[0]} value={value[1]}>
          {value[1]}
        </option>
      ))}
    </Field>
  );
}

Select.propTypes = {
  name: T.string.isRequired,
  values: T.arrayOf(T.arrayOf(T.oneOfType([T.string, T.number]))).isRequired,
};
