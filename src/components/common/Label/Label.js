import React from 'react';
import T from 'prop-types';
import styles from './Label.module.scss';

export default function Label({ htmlFor, text, children }) {
  return (
    <label htmlFor={htmlFor}>
      <span className={styles.labelText}>{text}</span>
      {children}
    </label>
  );
}

Label.propTypes = {
  htmlFor: T.string.isRequired,
  text: T.string.isRequired,
  children: T.node,
};
