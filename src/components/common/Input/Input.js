import React from 'react';
import T from 'prop-types';
import styles from './Input.module.scss';

export default function Input({ value, name, type, onChange, onBlur, placeholder = '', ...props }) {
  return (
    <input
      className={styles.input}
      name={name}
      value={value}
      type={type}
      onChange={onChange}
      onBlur={onBlur}
      placeholder={placeholder}
      {...props}
    />
  );
}

Input.propTypes = {
  placeholder: T.string,
  name: T.string.isRequired,
  type: T.string.isRequired,
  value: T.string.isRequired,
  onChange: T.func.isRequired,
  onBlur: T.func.isRequired,
  props: T.object,
};
