import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { UserContext } from '../../../Contexts/UserContext';
import Feed from '../../../Assets/feed.svg?react';
import Stats from '../../../Assets/estatisticas.svg?react';
import PhotoPost from '../../../Assets/adicionar.svg?react';
import Logout from '../../../Assets/sair.svg?react';
import styles from './UserHeaderNav.module.css';

const UserHeaderNav = () => {
  const [mobile, setMobile] = React.useState(null);

  const { userLogout } = React.useContext(UserContext);
  const navigate = useNavigate();

  function handleLogout() {
    userLogout();

    navigate('/login');
  }

  return (
    <nav className={styles.nav}>
      <NavLink to="/conta" end>
        <Feed />
        {mobile && 'Minhas fotos'}
      </NavLink>
      <NavLink to="/conta/estatisticas">
        <Stats />
        {mobile && 'Estatísticas'}
      </NavLink>
      <NavLink to="/conta/postar">
        <PhotoPost />
        {mobile && 'Adicionar foto'}
      </NavLink>

      <button onClick={handleLogout}>
        <Logout />
        {mobile && 'Sair'}
      </button>
    </nav>
  );
};

export default UserHeaderNav;
