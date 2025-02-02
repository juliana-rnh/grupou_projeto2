import React, {useState, useContext} from 'react'
import {Text} from 'react-native'

import {UserContext} from '../../context/user'

import {Container, 
        Texto,
        ContainerButtons,
        Button,
        ButtonText 
        } from './styles'


        const Settings = () => {

        const { signOut, ForgotPassword } = useContext(UserContext)

	return (
        <Container>
                <ContainerButtons>
                <Button invert ={true} onPress={()=>{ ForgotPassword() }}>
                        <ButtonText invert ={true}>Alterar minha senha</ButtonText>
                        </Button>
                
                        <Button invert ={true} onPress={()=>{ signOut() }}>
                        <ButtonText invert ={true}>Sair</ButtonText>
                        </Button>

                </ContainerButtons>

        </Container>

	)
}

export default Settings