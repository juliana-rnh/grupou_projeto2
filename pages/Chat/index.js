import React, {useState, useContext, useEffect} from 'react'
import {Text, View, ScrollView} from 'react-native'


import {UserContext, UserProvider} from '../../context/user'

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
        ContainerTxt
        } from './styles'

import firebase from 'firebase'
import 'firebase/firestore'

import {GiftedChat, Bubble} from  'react-native-gifted-chat';

//import Moment from 'react-moment'

const Chat = () =>{

        const [messages, setMessages] = useState([{
                        _id: 1,
                        text: 'Hello developer',
                        createdAt: new Date(),
                        user: {
                          _id: 2,
                          name: 'GiftedChat',
                          avatar: 'https://placeimg.com/140/140/any'}
        }])
        const [newMessage, setnewMessage] = useState("")
        const [newGroupMessage, setnewGroupMessage] = useState("")
        const {user,setUser} = useContext(UserContext)
        const [caixaTexto, setCaixaTexto] = useState('')

        //observa em tempo real, firestore irá escutar a collection mensagens e quando haver mudança o onsnapshot executa o que esteja lá em tempo real
        //quando o array é vazio significa que ele vai observar apenas uma vez

        
                
       

        const EscutadorMensagem = (atualizaSnap) =>{
                
                const data = atualizaSnap.docs.map(doc=>{
                        return{
                                id: doc.id,
                                ...doc.data()

                        }
                })

                setMessages(data)
        }
        //Estrutura de dois parametros, que tem o  parametro q queremos executar (UseEffect) eo segundo é um array, pra falar quando quer que seja executado. COmo está vazio, o array quer que o que esteja no primeiro parametro rode.
        useEffect(()=>{
                const listener = firebase.firestore()
                        .collection('mensagens').onSnapshot(EscutadorMensagem)
                        //.collection('chatgrupo').onSnapshot(EscutadorMensagem)
                //destrói o que é passado de retorno dentro de uma função de useEffect

                

                return () => listener()
        },[])
        
        //TENTATIVA DE CRIAR GROUPCHAT
        const handleCreateGroupChat = () =>{
                firebase.firestore().collection('groupchat').add({
                        texto: newGroupMessage
                })      
                setnewGroupMessage("")
        }

        //armazena mensagem no firestore
        const handleAddMessages = () =>{
                if (newMessage == '') {
                        console.warn('Preencha o campo')
                        return
                }try{
                        firebase.firestore().collection('mensagens').add({
                              texto: newMessage,
                              lida: false,
                              usuario: user.email,
                              createdAt: Date.now()
                              
                        })
                        
                        //o comando abaixo irá apagar a mensagem enviada
                        setnewMessage("")
                }catch (err){
                        console.warn("erro de comunicação, tente mais tarde")
                }
                
        }

        
	return (

        <Container>
                {/*<Texto>{user.email}</Texto>*/}
                <ContainerMessages>
                <ScrollView >
                        {messages.map(message=>(
                                message.usuario === user.email ? 
                                <Message1 key = {message.id}>  {message.texto}</Message1>:
                                <Message key={message.id}>{message.texto}
                             
                             </Message>  
                              
                        ))}
                        </ScrollView>
                </ContainerMessages>

                <Texto>{user.email}</Texto>
                
                        <ContainerButtons>

                        <Input placeholder="Digite sua mensagem" onChangeText = {text => setnewMessage(text)} value={newMessage}/>

                                        <Button invert ={true} onPress={()=>{ handleAddMessages() }}>
                                        <ButtonText invert ={true}>Enviar</ButtonText>
                                        </Button>

                        </ContainerButtons>
        </Container>

	)
}

export default Chat