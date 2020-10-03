import React, { useRef } from 'react';
import { createPortal } from 'react-dom';
import useOutsideClick from '../../hooks/useOutsideClick';
import useHideBodyOverflow from '../../hooks/useHideBodyOverflow';
import Button from '../common/Button/Button';

import styles from './Portal.module.scss';

export default function Portal({ onClose, children }) {
  useHideBodyOverflow();

  const childRef = useRef();
  useOutsideClick(childRef, () => {
    onClose();
  });

  return createPortal(
    <div className={styles.container}>
      <Button onClick={onClose} className={styles.closePortalButton} />
      <div className={styles.overlay}>
        <div ref={childRef} className={styles.childrenContainer}>
          {children}
        </div>
      </div>
    </div>,
    document.getElementById('side-portal'),
  );
}
