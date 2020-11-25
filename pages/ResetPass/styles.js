import styled from 'styled-components/native'
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export const Container = styled.View`
    background-color: #e6e;
    flex:1;
    padding:10px 10px 0px 10px;
    flex-direction:column;
    justify-content: center;
    align-items:center;
`


export const Texto = styled.Text`
font-size:20px;
margin-top: 20px;
color:#fff;

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
