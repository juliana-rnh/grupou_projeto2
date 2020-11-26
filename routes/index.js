import React, { useContext} from 'react'
import {NavigationContainer} from '@react-navigation/native'

import AppRoutes from './app.routes'
import AuthRoutes from './auth.routes'
import Group from '../pages/Group'

import {UserContext} from '../context/user'

const Routes = () => {

    const {group} = useContext (UserContext)
    const {user} = useContext (UserContext)

    return (
        <NavigationContainer>
        { user ?
        <AppRoutes /> : 
        <AuthRoutes /> 
        //<PassRoutes />
        }
        </NavigationContainer>
    )
}




export default Routes