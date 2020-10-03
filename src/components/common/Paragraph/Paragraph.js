import React from 'react';
import T from 'prop-types';
import styles from './Paragraph.module.scss';

export default function Paragraph({ title = '', children = '' }) {
  return (
    <p className={styles.paragraph}>
      <span className={styles.title}>{title}</span>
      <span className={styles.text}>{children}</span>
    </p>
  );
}

Paragraph.propTypes = {
  title: T.string,
  children: T.node,
};
