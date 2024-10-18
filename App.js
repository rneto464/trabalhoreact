import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignUpScreen from './src/pages/SignUpScreen'; 
import MenuScreen from './src/pages/MenuScreen'; 
import LoginScreen from './src/pages/LoginScreen';
import InicioScreen from './src/pages/InicioScreen';
import ProfileScreen from './src/pages/ProfileScreen';
import RankingScreen from './src/pages/RankingScreen';
import CampScreen from './src/pages/CampScreen';


const Stack = createStackNavigator(); 

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        
        <Stack.Screen 
          name="SignUp" 
          component={SignUpScreen} 
          options={{ title: 'Cadastro', headerShown: false }} 
        />
        
        <Stack.Screen 
          name="Menu" 
          component={MenuScreen} 
          options={{ title: 'Menu Principal', headerShown: false }} 
        />
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{ title: 'Menu Principal', headerShown: false }} 
        />
        <Stack.Screen 
          name="Inicio" 
          component={InicioScreen} 
          options={{ title: 'Menu Principal', headerShown: false }} 
        />
        <Stack.Screen 
          name="Perfil" 
          component={ProfileScreen} 
          options={{ title: 'Menu Principal', headerShown: false }} 

        />
         <Stack.Screen 
          name="Ranking" 
          component={RankingScreen} 
          options={{ title: 'Menu Principal', headerShown: false }} 
          
        />
      <Stack.Screen 
          name="Campeonatos" 
          component={CampScreen} 
          options={{ title: 'Menu Principal', headerShown: false }} 
          
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
