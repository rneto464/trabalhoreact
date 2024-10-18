import React from 'react';
import { Image, StyleSheet } from 'react-native';

export default function Logo() {
  return <Image source={require('../../assets/damas.png')} style={styles.logo} />;
}

const styles = StyleSheet.create({
  logo: {
    width: 350,
    height: 100,
    marginBottom: 20,
  },
});
