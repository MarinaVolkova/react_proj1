import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
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
import { connect, useDispatch, useSelector } from 'react-redux';
import { getStatusError, getStatusResponse, getUsersEmail, getUsersToken } from "../../store/selectors/profiles";
import { getInfoloading } from "../../store/selectors/auth";
import { getUser, login, signIn } from "../../store/reducers/elemSlices/profileSlice/profileSlice";



const schema = yup.object({
    email: yup
        .string()
        .required('Требуется адрес электронной почты')
        .matches( /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/, 'Некорректный email!')
  }).required();


  
const SignIn =  () => {
    const dispatch = useDispatch();
    const signInUser = (data) => dispatch(signIn(data));
    const loginUser = (data) => dispatch(login(data));
    const selectorsElem = useSelector(state => ({
        token: getUsersToken(state),
        email: getUsersEmail(state),
        loading: getInfoloading(state),
        error: getStatusError(state),
        status: getStatusResponse(state)
      }));


    // const toast = useToast();
    const push = useNavigate();
    const { register, handleSubmit, formState: { errors } } =  useForm({
        resolver: yupResolver(schema),
    });
      
const onSubmit = async (data) =>{
    try {
        await loginUser(data)
    } catch (e) {
        return new Error(e)
    }
};

const pushList = () =>{
    if(!selectorsElem.error && selectorsElem.status === 'login fulfilled'){
        push('/Profile')
    }
}
useEffect(() => {
    pushList()
}, [selectorsElem]);

return (
        
    <Center p='6'>
        
        <form onSubmit={handleSubmit(onSubmit)} >
            <Stack spacing = {4} w='md' h='md'>
                <p>Введите адрес электронной почты:</p>
                <InputGroup>
                <InputLeftElement children={<EmailIcon color='#C7CBE3'/>} />
                <Input  type='text' placeholder='Email'  {...register("email")}/>
                </ InputGroup>

                
                <p>Введите пароль:</p>
                <InputGroup>
                <InputLeftElement children={<LockIcon color='#C7CBE3'/>} />
                <Input type='password' placeholder='Password' {...register("password")} required/>
                </InputGroup>

                <p>У Вас нет аккаунта? <Link to='/SignUp'>Регистрация</Link></p>

                <Button type='submit' >{selectorsElem.loading === true? <Spinner/>: 'Login'}</Button>
         
                <Alert 
                status={ errors.email?.message || selectorsElem.error ? 'error':'success' } 
                display={ errors.email?.message || selectorsElem.error ? 'Center':'none' }
               >
                <AlertIcon />
                <AlertTitle > { errors.email?.message ?? selectorsElem.error } </AlertTitle>
                </Alert>

            </Stack>
        </form>
    </Center>
    
    );
    
};

export default SignIn;