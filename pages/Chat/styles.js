import styled from 'styled-components/native'
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export const Container = styled.View`
    background-color: #6B0A51;
    flex:1;
    padding:10px 10px 0px 10px;
    flex-direction:column;
    justify-content: flex-end;
    align-items:center;
    margin-top:20px;
`


export const Texto = styled.Text`
    font-size:20px;
    margin-top: 20px;
    color:#fff;
`

export const ContainerId = styled.View`
    font-size:20px;
    margin-top: 90px;
    color:#fff;
`

export const ContainerTxt = styled.Text`
    font-size:20px;
    margin-top: 40px;
    color:#fff;
`

export const Message = styled.Text`
    font-size:16px;
    text-align: justify;
    color:#fff;
    padding-top:30px;
    margin-top: 10px;
    border:1px solid #ae1b73;
    border-radius: 15px;
`

export const Message1 = styled.Text`
    font-size:16px;
    text-align: right;
    justify-content: flex-end;
    color:#fff;
    padding-top:30px;
    background-color: ${props => props.invert ? "#fff" : "#ae1b73"};
    border:1px solid #ae1b73;
    border-radius: 15px;
    margin-top: 10px;
    font-Weight: bold;

`

export const ContainerMessages = styled.View`
    flex:1;
    width:100%;

`

export const ContainerButtons = styled.View`
    flex-direction: row;
    font-size:40px;
    margin-bottom:10px;

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

export const Input = styled.TextInput`
    flex:3;    
    border:1px solid #ccc;'
    height:60px;
    border-radius:5px;
    padding: 0 20px;
    background-color: #e6e6e6;
    margin-right:10px;

`


export const ForgotPassword = styled.Text`
    flex:3;    
    border:1px solid #ccc;'
    height:60px;
    border-radius:5px;
    padding: 0 20px;
    background-color: #e6e6e6;
    margin-right:10px;

`

export const ButtonPass = styled.Text`
    flex:3;    
    border:1px solid #ccc;'
    height:60px;
    border-radius:5px;
    padding: 0 20px;
    background-color: #e6e6e6;
    margin-right:10px;

`