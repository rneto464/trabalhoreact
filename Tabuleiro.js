import React from 'react';
import { Image, StyleSheet } from 'react-native';

export default function Tabuleiro() {
  return <Image source={require('../../assets/tabuleiro.png')} style={styles.logo} />;
}

const styles = StyleSheet.create({
  logo: {
    width: 250,
    height: 190,
    marginBottom: 40,
   

  },
});