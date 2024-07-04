// NomeUsuario.js
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const NomeUsuario = () => {
  const navigation = useNavigation();
  const [nomeUsuario, setNomeUsuario] = useState('');

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Nome de Usuário" value={nomeUsuario} onChangeText={setNomeUsuario} />
      <Button title="Avançar" onPress={() => navigation.navigate('FotoPerfil')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  input: {
    height: 40,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
  },
});

export default NomeUsuario;
