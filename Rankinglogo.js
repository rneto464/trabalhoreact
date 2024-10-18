import React from 'react';
import { Image, StyleSheet } from 'react-native';

export default function Ranking() {
  return <Image source={require('../../assets/ranking.png')} style={styles.logo} />;
}

const styles = StyleSheet.create({
  logo: {
    width: 150,
    height: 100,
    marginBottom: 10,
  },
});
