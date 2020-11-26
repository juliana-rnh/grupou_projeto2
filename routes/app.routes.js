import React, { useContext } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {MaterialCommunityIcons} from '@expo/vector-icons'

import { UserContext } from '../context/user'

    import Chat from '../pages/Chat'
    import Settings from '../pages/Settings'
    import Group from '../pages/Group'

    

const Tab = createBottomTabNavigator()

const AppRoutes = () => {
    const { route } = useContext(UserContext)
    return (

        /*<Tab.Navigator
            initialRouteName="Grupos"
            tabBarOptions={
                {
                    activeTintColor: 'tomato',
                    inactiveTintColor: '#ccc',
                }
            }
        >
        */
        <Tab.Navigator
        initialRouteName={route === 'chat' ? "Chat" : "Grupos"}
            tabBarOptions={
                {
                    activeTintColor: 'tomato',
                    inactiveTintColor: '#ccc',
                }
            }
        >
            {/*
            <Tab.Screen name="Grupos" 
                        component={Group} 
                        options ={
                            {tabBarIcon : ({color}) => ( 
                            <MaterialCommunityIcons
                                name="chat"
                                color={color}
                                size={32}/> )}
                            }
            />
                        */}

            <Tab.Screen name="Chat" 
                        component={Chat} 
                        options ={
                            {tabBarIcon : ({color}) => ( 
                            <MaterialCommunityIcons
                                name="chat"
                                color={color}
                                size={33}/> )}
                            }
            />
            <Tab.Screen name="Configurações" component={Settings}
                        options ={
                            {tabBarIcon : ({color}) => ( 
                            <MaterialCommunityIcons
                                name="settings"
                                color={color}
                                size={33}/> )}
                            }
            />

            


        </Tab.Navigator>

        
    )


}

export default AppRoutes