import React from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { UserContext } from '../../../contexts/UserContext';
import Feed from '../../../assets/feed.svg?react';
import Stats from '../../../assets/estatisticas.svg?react';
import PhotoPost from '../../../assets/adicionar.svg?react';
import Logout from '../../../assets/sair.svg?react';
import styles from './UserHeaderNav.module.css';
import useMedia from '../../../hooks/useMedia';

const UserHeaderNav = () => {
  const [mobileMenu, setMobileMenu] = React.useState(false);

  const { userLogout } = React.useContext(UserContext);
  const navigate = useNavigate();
  const mobile = useMedia('(max-width: 40rem)');
  const { pathname } = useLocation();

  React.useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  function handleLogout() {
    userLogout();

    navigate('/login');
  }

  return (
    <>
      {mobile && (
        <button
          aria-label="Menu"
          className={`${styles.mobileButton} ${mobileMenu && styles.mobileButtonActive}`}
          onClick={() => setMobileMenu(!mobileMenu)}
        ></button>
      )}

      <nav
        className={`${mobile ? styles.navMobile : styles.nav} ${
          mobileMenu && styles.navMobileActive
        }`}
      >
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
    </>
  );
};

export default UserHeaderNav;
