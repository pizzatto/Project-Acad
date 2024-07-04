// CriarSenha.js
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CriarSenha = () => {
  const navigation = useNavigation();
  const [senha, setSenha] = useState('');

  const verificarSenha = () => {
    if (senha.length >= 8) {
      navigation.navigate('NomeUsuario');
    } else {
      Alert.alert('Erro', 'A senha deve ter no mínimo 8 caracteres.');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Senha" secureTextEntry value={senha} onChangeText={setSenha} />
      <Button title="Avançar" onPress={verificarSenha} />
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

export default CriarSenha;
