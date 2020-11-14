import React, {useState, useContext, useEffect} from 'react'
import {Text} from 'react-native'

import {UserContext} from '../../context/user'

import {Container, 
        Texto,
        ContainerButtons, 
        Button,
        ButtonText,
        Input,
        ContainerMessages,
        Message
        } from './styles'

        import firebase from 'firebase'
        import 'firebase/firestore'

const Chat = () =>{

        const [messages, setMessages] = useState([])
        const [newMessage, setnewMessage] = useState("")
        const {user} = useContext(UserContext)

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
                //destrói o que é passado de retorno dentro de uma função de useEffect
                return () => listener()
        },[])
        
        //armazena mensagem no firestore
        const handleAddMessages = () =>{
                if (newMessage == '') {
                        console.warn('Preencha o campo')
                        return
                }try{
                        firebase.firestore().collection('mensagens').add({
                              texto: newMessage,
                              lida: false  
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
                        {messages.map(message=>(
                             <Message>{message.texto}</Message>   
                        ))}
                        
                </ContainerMessages>
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