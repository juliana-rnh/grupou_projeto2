import styled from 'styled-components/native'
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export const Container = styled.View`
    background-color: #e6e;
    flex:1;
    padding:10px 10px 0px 10px;
    flex-direction:column;
    justify-content: flex-end;
    align-items:center;
`

export const ContainerGrupos = styled.View`
    background-color: #e6e;
    flex:1;
    padding:10px 10px 0px 10px;
    flex-direction:column;
    justify-content: flex-end;
    align-items:center;
`

export const CaixaLogin = styled.View`
    height: 52%;
    width: 100%;
    background-color: #fff;
    border-top-right-radius: 25px; 
    border-top-left-radius: 25px; 
    padding: 20px;
    
`

export const ContainerBotoes = styled.View`
    flex-direction:row;
    
    
`
export const Botao = styled.TouchableOpacity`

    border-bottom-width:4px;
    border-bottom-color:${props => props.lastClick ? "#AE1B73" : "#fff" } ;
    height:60px;
    margin: 0px 5px;
    flex:1;
    justify-content: center;
    align-items: center;

`

export const BotaoTexto = styled.Text`
    font-size:20px;
    color: ${props => props.lastClick ? "#673f66" : "#ccc" };

`

export const Input = styled.TextInput`
    border:1px solid #ccc;
    height:65px;
    margin-top:5px;
    border-radius:5px;
    padding: 0 20px;

`

export const InputTexto = styled.Text`
font-size:20px;
margin-top: 20px;
color:#b4b8c6;

`

export const Texto = styled.Text`
    font-size:40px

`

export const ForgotPassword = styled.Text`
    font-size:15px;
    color:#ae1b73;
    text-align:right;
    font-weight:bold;
    margin-top:5px;

`

export const Link = styled.Text`
    font-size:15px;
    color:#ae1b73;
    text-align:right;
    font-weight:bold;
    margin-top:5px;

`


export const ContainerButtons = styled.View`
    flex-direction: row;
    font-size:40px;
    margin-top:30px;

`

export const Button = styled.TouchableOpacity`
    font-size:20px;
    flex:1;
    width: 100%;
    height: 60px;
    background-color: ${props => props.invert ? "#fff" : "#ae1b73"};
    border:1px solid #ae1b73;
    border-radius: 5px;
    justify-content: center;
    align-items: center;
    margin-right:${props => props.invert ? "10px" : "0px"};

`

export const ButtonText = styled.Text`
    font-size:20px;
    color:${props => props.invert ? "#ae1b73" : "#fff"};
    font-weight:bold;

`

export const Logo = styled.View`
    flex:1;
    justify-content:center;
    align-items:center;

`

export const CaixaTextoChamada = styled.View`
    flex:1;
    justify-content:center;
    align-items:center;

`

export const TextoChamada = styled.Text`
    font-size:20px;
    color:#fff;
    text-align:center;

`

export const TextoGrupou = styled.Text`
    color:#fff;
    font-weight:bold;

`