import React, {useEffect, useContext, useState} from "react";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import api from '../../services/api';
import {
    Center,
    Input, 
    Stack, 
    InputGroup, 
    InputLeftElement,
    Button,
    Alert,
    AlertIcon,
    AlertTitle,
    Spinner,
    useToast} from "@chakra-ui/react";
import {EmailIcon, LockIcon} from '@chakra-ui/icons';

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';


const schema = yup.object({
    email: yup
        .string()
        .required('Требуется адрес электронной почты')
        .matches( /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/, 'Некорректный email!')
  }).required();


  
const SignIn = () => {
    const toast = useToast();
    const push = useNavigate();
    const [loading, setLoading] = useState(0);
    const { user, signIn} = useAuth();
    const { register, handleSubmit, formState: { errors } } =  useForm({
        resolver: yupResolver(schema),
    });
    
    const onSubmit = async data =>{
        try {
            setLoading(1)
            const response = await api.auth.login(data);
            await signIn(response.data)
            push('/Profile')
          } catch (e) {
            toast({
                title: `${e.response.data.errors.password ?? e.response.data.errors.email}`,
                position: 'top',
                status: 'error',
                isClosable: true,
              })
        }finally{
            setLoading(0)
        }
    };


return (
        
    <Center p='6'>
        
        <form onSubmit={handleSubmit(onSubmit)} >
            <Stack spacing = {4} w='md' h='md'>

                <p>Введите адрес электронной почты</p>
                <InputGroup>
                <InputLeftElement children={<EmailIcon color='#C7CBE3'/>} />
                <Input  type='text' placeholder='Email'  {...register("email")}/>
                </ InputGroup>

                
                    
                <p>Введите пароль</p>
                <InputGroup>
                <InputLeftElement children={<LockIcon color='#C7CBE3'/>} />
                <Input type='password' placeholder='Password' {...register("password")} required/>
                </InputGroup>

                <p>У Вас нет аккаунта? <Link to='/SignUp'>Регистрация</Link></p>

                <Button type='submit'>{loading === 1 ? <Spinner/>: 'Login'}</Button>

                
                <Alert 
                status={errors.email?.message? 'error':'success'} 
                display={errors.email?.message? 'Center':'none'}>
                <AlertIcon />
                <AlertTitle > {errors.email?.message}</AlertTitle>
                </Alert>
            </Stack>
        </form>
    </Center>
    );
};

export default SignIn;