import React from 'react';
import T from 'prop-types';
import styles from './ErrorLabel.module.scss';

export default function ErrorLabel({ text }) {
  return <span className={styles.text}>{text}</span>;
}

ErrorLabel.propTypes = {
  text: T.string.isRequired,
};
