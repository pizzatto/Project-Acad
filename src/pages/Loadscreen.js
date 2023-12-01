import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function Loadscreen() {
  return (
    <View style={Styles.container}>
      <Image
        style={Styles.logo}
        source={require('./assets/img/LOGO1.jpg')}
      />
      <Text style={Styles.text}>CARREGANDO</Text>
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    position: 'absolute',
    bottom: 45, // Ajuste o valor conforme necessário para posicionar no canto inferior
  },
  logo: {
    width: 200,
    height: 200,
  },
});
