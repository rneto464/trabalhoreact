import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, Alert, StatusBar } from 'react-native';
import Logo from '../components/Logo';
import signupstyles from '../styles/signupstyles';
import { useNavigation } from '@react-navigation/native';
import EmailIcon from '../../assets/email.svg'; 
import LockIcon from '../../assets/lock.svg';   
import UserIcon from '../../assets/user.svg'; 

export default function SignUpScreen() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigation = useNavigation();

  const handleSignUp = () => {
    if (password === confirmPassword) {
      Alert.alert('Sucesso', 'Cadastro realizado com sucesso!');
      navigation.navigate('Inicio');
    } else {
      Alert.alert('Erro', 'As senhas não coincidem!');
    }
  };

  return (
    <View style={signupstyles.container}>
      <Logo />
      <Text style={signupstyles.title}>Cadastrar-se</Text>

      <View style={signupstyles.inputContainer}>
        <UserIcon width={24} height={24} style={signupstyles.icon} />
        <TextInput
          style={signupstyles.input}
          placeholder="Nome completo"
          value={fullName}
          onChangeText={setFullName}
        />
      </View>

      <View style={signupstyles.inputContainer}>
        <EmailIcon width={24} height={24} style={signupstyles.icon} />
        <TextInput
          style={signupstyles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
      </View>

      <View style={signupstyles.inputContainer}>
        <UserIcon width={24} height={24} style={signupstyles.icon} />
        <TextInput
          style={signupstyles.input}
          placeholder="Nome de usuário"
          value={username}
          onChangeText={setUsername}
        />
      </View>

      <View style={signupstyles.inputContainer}>
        <LockIcon width={24} height={24} style={signupstyles.icon} />
        <TextInput
          style={signupstyles.input}
          placeholder="Senha"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </View>

      <View style={signupstyles.inputContainer}>
        <LockIcon width={24} height={24} style={signupstyles.icon} />
        <TextInput
          style={signupstyles.input}
          placeholder="Confirmar senha"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
        />
      </View>

      <TouchableOpacity style={signupstyles.button} onPress={handleSignUp}>
        <Text style={signupstyles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}
