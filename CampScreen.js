import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import campeonatosStyles from '../styles/campeonatosStyles'; 


const campeonatos = [
  { id: '1', name: 'Campeonato Regional', date: '25/10/2024' },
  { id: '2', name: 'Campeonato Nacional', date: '15/11/2024' },
  { id: '3', name: 'Campeonato Internacional', date: '10/12/2024' },
];

export default function CampScreen() {
  const navigation = useNavigation();

  const renderCampeonato = ({ item }) => (
    <TouchableOpacity 
      style={campeonatosStyles.campeonatoItem}
      onPress={() => navigation.navigate('DetalhesCampeonato', { id: item.id })} // Navega para a tela de detalhes com o ID do campeonato
    >
      <Text style={campeonatosStyles.campeonatoName}>{item.name}</Text>
      <Text style={campeonatosStyles.campeonatoDate}>{item.date}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={campeonatosStyles.container}>
      <Text style={campeonatosStyles.title}>Campeonatos</Text>

      <FlatList 
        data={campeonatos}
        renderItem={renderCampeonato}
        keyExtractor={item => item.id}
        style={campeonatosStyles.list}
      />
    </View>
  );
}
