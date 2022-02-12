import React from 'react';
import { useForm } from "react-hook-form";
import {useAuth} from "../../context/AuthContext";
import api from "../../services/api";
import {Box, Button} from "@chakra-ui/react";

const Login = () => {
  const { user, logIn, logOut } = useAuth();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async data => {
    try {
      const response = await api.auth.login(data);
      await logIn(response.data)
    } catch (e) {
      console.log('e', e.response.data.errors);
    }
  };

  return (
    <>
      { user &&
        <Box>
          {user?.id}<br />
          {user?.firstName}<br />
          <Button onClick={() => logOut()}>Выйти</Button>
        </Box>
      }

      <form onSubmit={handleSubmit(onSubmit)}>
        <input defaultValue="user@example.com" {...register("email")} />

        <input defaultValue="userpassword$" {...register("password", { required: true })} />

        {errors.password && <span>This field is required</span>}

        <Button type='submit'>Отправить</Button>
      </form>
    </>
  );
}

export default Login;