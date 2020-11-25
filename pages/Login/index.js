import React, {useState, useContext} from 'react'
import {Text, Image, ActivityIndicator, TouchableOpacity, View} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//import { Link } from 'react-router-dom';

import {Input, 
        InputTexto, 
        Container, 
        Texto, 
        ContainerBotoes, 
        CaixaLogin, 
        Botao, 
        BotaoTexto,
        ContainerButtons,
        Button,
        ButtonText,
        ForgotPassword,
        Logo,
        CaixaTextoChamada,
        TextoChamada,
        TextoGrupou} from './styles'


import LogoImg from '../../assets/logo.png'



import {UserContext} from '../../context/user'

const Login = () =>{

    const {signIn, signUp} = useContext(UserContext)

    const [currentButton, setCurrentButton] = useState('aluno')
    const [email, setEmail] = useState("jukiedis0@gmail.com");
    const [password, setPassword] = useState("123456");
    const [carregando, setCarregando] = useState(false);
    

    function handleSignIn(){

        try{
            signIn(email, password)
        }catch(err){
            console.warn(err)
        } 
    }

    function handleSignUp(){
        //console.warn(email, password)
        setCarregando(true);

        try{
            signUp(email, password)
        }catch(err){
            console.warn(err)
        }finally{
            setCarregando(false)
        }
    }

    
    function handleForgotPassword(){
        //alert('O link de redefinição foi enviado para seu e-mail')
        //console.warn(email, password)
        try{
            ForgotPassword()
        }catch(err){
            console.warn(err)
        } 
    }

   

    
    

	return (
	<Container>

        <Logo>
            <Image source={LogoImg} style={{width:300, height:100}} />
        </Logo>

        <CaixaTextoChamada>
            <TextoChamada>Problemas para formar</TextoChamada>
            <TextoChamada>um grupo de trabalho?</TextoChamada>
            <TextoChamada>O <TextoGrupou>Grupou!</TextoGrupou> resolve!</TextoChamada>
        
        </CaixaTextoChamada>

        <CaixaLogin>
            <ContainerBotoes>

                <Botao onPress={() => {setCurrentButton('aluno')}}
                lastClick={currentButton == 'aluno' ? true : false}>

                    <BotaoTexto lastClick={currentButton == 'aluno' ? true : false}>Aluno</BotaoTexto>

                </Botao>

                <Botao onPress={() => {setCurrentButton('professor')}}
                lastClick={currentButton == 'professor' ? true : false}>

                    <BotaoTexto lastClick={currentButton == 'professor' ? true : false}>Professor</BotaoTexto>

                </Botao>

            </ContainerBotoes>

            <InputTexto>Email</InputTexto>
            <Input placeholder="Digite seu email" onChangeText = {text => setEmail(text)} value={email}/>

            <InputTexto>Senha</InputTexto>
            <Input placeholder="Digite sua senha" secureTextEntry={true} onChangeText = {text => setPassword(text)} value={password}/>

            <ForgotPassword>  
            {/*
            <Button onPress={() => { handleForgotPassword() }}/>
                <ButtonPass>Entrar</ButtonPass>
            */}

                <TouchableOpacity onPress={() => { handleForgotPassword() }}>
                <Text>Esqueci minha senha</Text></TouchableOpacity>
            


              


               </ForgotPassword>  

            <ContainerButtons>

                <Button invert={true} onPress={()=> { handleSignUp() }}>

                    {carregando ?
                        <ActivityIndicator color="red"/> : 
                            <ButtonText invert={true}>Cadastre-see</ButtonText>
                    }
                
                </Button>

                <Button onPress={()=>{ handleSignIn() }}>
                    <ButtonText>Entrar</ButtonText>
                </Button>

            </ContainerButtons>
        
        </CaixaLogin>

    
    </Container>

	)
}

export default Login