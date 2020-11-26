import React, {useState, useContext, useEffect} from 'react'
import {Text, View, ScrollView} from 'react-native'


import {UserContext, UserProvider} from '../../context/user'
import { TouchableOpacity } from 'react-native-gesture-handler'

import {Container, 
        Texto,
        ContainerButtons, 
        Button,
        ButtonText,
        Input,
        ContainerMessages,
        Message,
        Message1,
        ContainerId,
        ContainerTxt,
        ContainerGrupos
        } from './styles'

import firebase from 'firebase'
import 'firebase/firestore'

import {GiftedChat, Bubble} from  'react-native-gifted-chat';

//import Moment from 'react-moment'

const Group = () =>{

    const [user, group, changeGroup, changeRoute] = useContext(UserContext)
    const [groups, setGroups] = useState([])
                       
       
/*
        const EscutadorMensagem = (atualizaSnap) =>{
                
                const data = atualizaSnap.docs.map(doc=>{
                        return{
                                id: doc.id,
                                ...doc.data()

                        }
                })

                setMessages(data)
        }
*/
    useEffect(()=>{
        const listener = firebase.firestore()
            .collection('groupchat').onSnapshot((snap) =>{
                const data = snap.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }))
                setGroups(data)
             })
                                    

        return () => listener()
        },[])
        
        //TENTATIVA DE CRIAR GROUPCHAT
        const _changeGroup = (group) =>{
                changeGroup(group)
                changeRoute('chat')
        }

        
                
        

        
    return (

    
        <Container>
            <Text>Escolha um Grupo</Text>
            
            <ContainerGrupos>
                {groups.map(grupo =>(
                    <TouchableOpacity onPress={() => _changeGroup(grupo.texto)}>
                        <Text>{grupo.texto}</Text>
                    </TouchableOpacity>
                ))}
            </ContainerGrupos>
        </Container>
    )
}
export default Group