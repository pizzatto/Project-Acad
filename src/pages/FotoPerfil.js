// FotoPerfil.js
import React from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const FotoPerfil = () => {
  const navigation = useNavigation();

  const escolherFoto = () => {
    // Implemente a lógica para escolher uma foto usando react-native-image-picker ou outra biblioteca
    console.log('Escolher ou tirar uma nova foto');
  };

  return (
    <View style={styles.container}>
      <Text style={{ marginBottom: 20 }}>Escolha sua foto de perfil</Text>
      <Button title="Escolher Foto" onPress={escolherFoto} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default FotoPerfil;
