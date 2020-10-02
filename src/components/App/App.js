import React from 'react';
import Header from '../Header/Header';
import PagesRouter from '../../routes/PagesRouter';
import styles from './App.module.scss';

function App() {
  return (
    <>
      <Header />
      <div className={styles.app}>
        <PagesRouter />
      </div>
    </>
  );
}

export default App;
