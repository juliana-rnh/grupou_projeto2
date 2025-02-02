import React, {createContext, useState, useEffect} from 'react'

import firebase from 'firebase'

import 'firebase/auth'

const UserContext = createContext({})

const UserProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const [group, setGroup] = useState(null)
    const [route, setRoute] = useState(null)

    const ListenAuth = (userState) =>{
        setUser(userState)
    }

    const ChangeGroup = (groupState) =>{
        setGroup(groupState)
    }

    const ChangeRoute = (route) =>{
        setRoute(route)
    }

    useEffect(()=>{
        const listener = firebase.auth().onAuthStateChanged(ListenAuth)
        return listener
    },[])

    useEffect(()=>{
        const listener = firebase.auth().onAuthStateChanged(ChangeGroup)
        return listener
    },[])

    const ForgotPassword = (email) => {
        firebase.auth().sendPasswordResetEmail('jukiedis0@gmail.com')
          .then(function (user) {
            alert('O link de redefinição foi enviado para seu e-mail')
          }).catch(function (e) {
            console.log(e)
          })
      }

    const signIn = (email, password) =>{
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(resp => {
            //console.warn(resp)
        })
        .catch(err=>{
            console.warn(err)
        })
    }

    const signUp = (email, password) => {

        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(resp => {
            console.warn(resp)
          })
          .catch(err => {
            console.warn(err)
          })
      }

    const signOut = () => {
        firebase.auth().signOut()
        .then(resp => {
            console.warn('Usuario Deslogado com sucesso')
        })
        .catch(err => {
            console.warn(err)
        })
    }

    

    return (
        <UserContext.Provider value={{ user, group, route, signIn, signOut, signUp, ForgotPassword, ChangeGroup, ChangeRoute }}>
            {children}
        </UserContext.Provider>
    )
}


export {UserContext, UserProvider}