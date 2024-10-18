import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import inicioStyles from '../styles/inicioStyles'; 
import { useNavigation } from '@react-navigation/native';

export default function HomeMenuScreen() {

  const navigation = useNavigation();

  return (
    <View style={inicioStyles.container}>
      <Text style={inicioStyles.title}>Menu Principal</Text>

      <TouchableOpacity 
        style={inicioStyles.button} 
        onPress={() => navigation.navigate('Campeonatos')}
      >
        <Text style={inicioStyles.buttonText}>Campeonatos</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={inicioStyles.button} 
        onPress={() => navigation.navigate('Ranking')}
      >
        <Text style={inicioStyles.buttonText}>Eventos</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={inicioStyles.button} 
        onPress={() => navigation.navigate('Ranking')}
      >
        <Text style={inicioStyles.buttonText}>Ranking</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={inicioStyles.button} 
        onPress={() => navigation.navigate('Ranking')}
      >
        <Text style={inicioStyles.buttonText}>Chaveamento</Text>
      </TouchableOpacity>
    </View>
  );
}
