import React from 'react';
import { Link } from 'react-router-dom';
import Input from '../../Forms/Input/Input';
import Button from '../../Forms/Button/Button';
import useForm from '../../../hooks/useForm';
import Error from '../../Helper/Error/Error';
import styles from './LoginForm.module.css';
import stylesBtn from '../../Forms/Button/Button.module.css';
import Head from '../../Helper/Head/Head';
import { useDispatch, useSelector } from 'react-redux';
import { userLogin } from '../../../redux/store/user';

const LoginForm = () => {
  const username = useForm();
  const password = useForm();

  const { token, user } = useSelector((state) => state);
  const dispatch = useDispatch();

  const loading = token.loading || user.loading;
  const error = token.error || user.error;

  async function handleSubmit(event) {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      dispatch(userLogin({ username: username.value, password: password.value }));
    }
  }

  return (
    <section className="anime-left">
      <Head title="Login" />

      <h1 className="title">Login</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />

        {loading ? <Button disabled>Carregando...</Button> : <Button>Entrar</Button>}

        <Error error={error && 'Dados incorretos.'} />
      </form>

      <Link to="/login/perdeu" className={styles.lost}>
        Perdeu a senha?
      </Link>

      <div className={styles.create}>
        <h2 className={styles.subtitle}>Cadastre-se</h2>

        <p>Ainda não possui conta? Cadastre-se no site.</p>

        <Link to="/login/criar" className={stylesBtn.button}>
          Cadastro
        </Link>
      </div>
    </section>
  );
};

export default LoginForm;
