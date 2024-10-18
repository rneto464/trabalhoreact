import React from 'react';
import { View, Text, FlatList, StatusBar } from 'react-native';
import Ranking from '../components/Rankinglogo'; 
import rankingStyles from '../styles/rankingStyles';

export default function RankingScreen() {
 
  const rankingData = [
    { id: '1', username: 'Player1', score: 1500 },
    { id: '2', username: 'Player2', score: 1450 },
    { id: '3', username: 'Player3', score: 1400 },
    { id: '4', username: 'Player4', score: 1350 },
    { id: '5', username: 'Player5', score: 1300 },
  ];

 
  const renderItem = ({ item }) => (
    <View style={rankingStyles.rankingItem}>
      
      <Text style={rankingStyles.rankingText}>{item.id}. {item.username}</Text>
     
      <Text style={rankingStyles.rankingScore}>{item.score}</Text>
    </View>
  );

  return (
    <View style={rankingStyles.container}>
     
      <Ranking/>
      
      <Text style={rankingStyles.title}>Melhores colocados</Text>

      <FlatList
        data={rankingData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={rankingStyles.rankingList}
      />

   
      <StatusBar style="auto" />
    </View>
  );
}
