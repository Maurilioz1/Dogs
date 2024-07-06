import React from 'react';
import Input from '../../Forms/Input/Input';
import Button from '../../Forms/Button/Button';
import useForm from '../../../hooks/useForm';
import useFetch from '../../../hooks/useFetch';
import { PASSWORD_LOST } from '../../../api/api';
import Error from '../../Helper/Error/Error';
import Head from '../../Helper/Head/Head';

const LoginPasswordLost = () => {
  const login = useForm();
  const { data, loading, error, request } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();

    if (login.validate()) {
      const { url, options } = PASSWORD_LOST({
        login: login.value,
        url: window.location.href.replace('perdeu', 'resetar'),
      });

      const { json } = await request(url, options);
    }
  }

  return (
    <section className="anime-left">
      <Head title="Perdeu a senha?" />

      <h1 className="title">Perdeu a senha?</h1>

      {data ? (
        <p style={{ color: '#44cc11' }}>{data}</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <Input label="E-mail / usuário" type="text" name="login" {...login} />

          {loading ? <Button disabled>Enviando...</Button> : <Button>Enviar e-mail</Button>}
        </form>
      )}

      <Error error={error} />
    </section>
  );
};

export default LoginPasswordLost;
