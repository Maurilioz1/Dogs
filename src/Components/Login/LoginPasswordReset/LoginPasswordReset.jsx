import React from 'react';
import Input from '../../Forms/Input/Input';
import useForm from '../../../hooks/useForm';
import Button from '../../Forms/Button/Button';
import { PASSWORD_RESET } from '../../../api/api';
import useFetch from '../../../hooks/useFetch';
import Error from '../../Helper/Error/Error';
import { useNavigate } from 'react-router-dom';
import Head from '../../Helper/Head/Head';

const LoginPasswordReset = () => {
  const [login, setLogin] = React.useState('');
  const [key, setKey] = React.useState('');

  const password = useForm('password');
  const { error, loading, request } = useFetch();
  const navigate = useNavigate();

  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    const key = params.get('key');
    const login = params.get('login');

    if (key) {
      setKey(key);
    }

    if (login) {
      setLogin(login);
    }
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();

    if (password.validate()) {
      const { url, options } = PASSWORD_RESET({ login, key, password: password.value });
      const { response } = await request(url, options);

      if (response.ok) {
        navigate('/login');
      }
    }
  }

  return (
    <section className="anime-left">
      <Head title="Resete a senha" />

      <h1 className="title">Resete a senha</h1>

      <form onSubmit={handleSubmit}>
        <Input label="Nova senha" type="password" name="password" {...password} />

        {loading ? <Button disalble>Resetando...</Button> : <Button>Resetar</Button>}
      </form>

      <Error error={error} />
    </section>
  );
};

export default LoginPasswordReset;
