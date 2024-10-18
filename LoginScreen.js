import React, { useState, useEffect } from 'react';
import { View, TextInput, Text, TouchableOpacity, StatusBar } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Logo from '../components/Logo';
import { useNavigation } from '@react-navigation/native';
import loginStyles from '../styles/loginStyles';
import EmailIcon from '../../assets/email.svg'; 
import LockIcon from '../../assets/lock.svg';   

export default function LoginScreen() {  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigation = useNavigation();

  // Função para armazenar dados no AsyncStorage
  const storeData = async (value) => {
    try {
      await AsyncStorage.setItem('@login_credentials', JSON.stringify(value));
    } catch (e) {
      console.log('Erro ao salvar dados:', e);
    }
  };

  // Função para recuperar os dados de login salvos
  const getStoredData = async () => {
    try {
      const storedData = await AsyncStorage.getItem('@login_credentials');
      if (storedData !== null) {
        const parsedData = JSON.parse(storedData);
        setUsername(parsedData.username);
        setPassword(parsedData.password);
      }
    } catch (e) {
      console.log('Erro ao recuperar dados:', e);
    }
  };

  useEffect(() => {
    // Chama a função para buscar os dados armazenados no AsyncStorage ao montar o componente
    getStoredData();
  }, []);

  const handleLogin = () => {
    if (username === 'admin' && password === 'password') {
      // Salva as credenciais no AsyncStorage
      storeData({ username, password });
      navigation.navigate('Menu');  
    } else {
      setMessage('Nome de usuário ou senha incorretos.');
    }
  };

  return (
    <View style={loginStyles.container}>
      <Logo />
      <Text style={loginStyles.title}>Entrar</Text>

      <View style={loginStyles.inputContainer}>
        <EmailIcon width={24} height={24} style={loginStyles.icon} />
        <TextInput
          style={loginStyles.input}
          placeholder="Nome de usuário"
          value={username}
          onChangeText={setUsername}
        />
      </View>

      <View style={loginStyles.inputContainer}>
        <LockIcon width={24} height={24} style={loginStyles.icon} />
        <TextInput
          style={loginStyles.input}
          placeholder="Senha"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </View>

      <TouchableOpacity style={loginStyles.button} onPress={handleLogin}>
        <Text style={loginStyles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={loginStyles.buttonAlt} 
        onPress={() => navigation.navigate('SignUp')}
      >
        <Text style={loginStyles.buttonText}>Cadastrar-se</Text>
      </TouchableOpacity>

      {message ? <Text>{message}</Text> : null}
      <StatusBar style="auto" />
    </View>
  );
}
