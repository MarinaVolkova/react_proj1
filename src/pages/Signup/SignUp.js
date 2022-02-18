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
import {EmailIcon, LockIcon, InfoOutlineIcon} from '@chakra-ui/icons';

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';


const schema = yup.object({
    email: yup
        .string()
        .required('Требуется адрес электронной почты')
        .matches( /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/, 'Некорректный email!')
  }).required();


  
const SignUp = () => {
    const toast = useToast();
    const push = useNavigate();
    const [loading, setLoading] = useState(0);
    const { user, signUn} = useAuth();
    const { register, handleSubmit, formState: { errors } } =  useForm({
        resolver: yupResolver(schema),
    });
    
    const onSubmit = async data =>{
        try {
            // const response = await api.auth.register(data);
            // await signUn(response.data)
            console.log(data)
          } catch (e) {
              console.log(e)
        }
    };


return (
        
    <Center p='6'>
        
        <form onSubmit={handleSubmit(onSubmit)} >
            <Stack spacing = {4} w='md' h='md'>

                <p>Адрес электронной почты</p>
                <InputGroup>
                <InputLeftElement children={<EmailIcon color='#C7CBE3'/>} />
                <Input  type='text' placeholder='Email'  {...register("email")}/>
                </ InputGroup>

                <p>Имя</p>
                <InputGroup>
                <InputLeftElement children={<InfoOutlineIcon color='#C7CBE3'/>} />
                <Input  type='text' placeholder='firstName'  {...register("firstName")}/>
                </ InputGroup>

                <p>Фамилия</p>
                <InputGroup>
                <InputLeftElement children={<InfoOutlineIcon color='#C7CBE3'/>} />
                <Input  type='text' placeholder='lastName'  {...register("lastName")}/>
                </ InputGroup>
                    
                <p>Пароль</p>
                <InputGroup>
                <InputLeftElement children={<LockIcon color='#C7CBE3'/>} />
                <Input type='password' placeholder='Password' {...register("password")} required/>
                </InputGroup>

                <p>У Вас есть аккаунт? <Link to='/login'>Авторизация</Link></p>

                <Button type='submit' p='6'>Sign Up</Button>

                
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

export default SignUp;