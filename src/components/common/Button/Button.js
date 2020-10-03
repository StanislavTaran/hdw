import React from 'react';
import T from 'prop-types';
import styles from './Button.module.scss';

export default function Button({ onClick, type, children, ...props }) {
  return (
    <button type={type} className={styles.button} onClick={onClick} {...props}>
      {children}
    </button>
  );
}

Button.propTypes = {
  onClick: T.func,
  children: T.node,
};
