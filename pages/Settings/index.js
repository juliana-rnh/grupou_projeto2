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

        const { signOut } = useContext(UserContext)

	return (
        <Container>
                <ContainerButtons>

                        <Button invert ={true} onPress={()=>{ signOut() }}>
                        <ButtonText invert ={true}>Sair</ButtonText>
                        </Button>

                </ContainerButtons>

        </Container>

	)
}

export default Settings