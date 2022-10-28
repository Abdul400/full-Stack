import React from 'react';
import Navbar from './Navbar';
import styles from '../styles/Layout.module.css';

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Navbar></Navbar>
      {children}
    </div>
  );
};

export default Layout;
