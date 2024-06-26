import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import Dogs from '../../assets/dogs.svg?react';
import { useSelector } from 'react-redux';

const Header = () => {
  const { data } = useSelector((state) => state.user);

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link to="/" className={styles.logo} aria-label="Dogs - Home">
          <Dogs />
        </Link>

        {data ? (
          <>
            <Link to="/conta" className={styles.login}>
              {data.nome}
            </Link>
          </>
        ) : (
          <Link to="/login" className={styles.login}>
            Login / Criar
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
