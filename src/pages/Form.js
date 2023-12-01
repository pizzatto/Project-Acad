import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
} from 'react-native';

const Form = () => {
  const [nome, setNome] = useState('');
  const [sexo, setSexo] = useState('');
  const [idade, setIdade] = useState('');
  const [pesoAltura, setPesoAltura] = useState('');
  const [frequencia, setFrequencia] = useState('');
  const [objetivo, setObjetivo] = useState('');

  const enviarFormulario = () => {
    // Lógica para enviar os dados do formulário
    console.log('Dados enviados:', { nome, sexo, idade, pesoAltura, frequencia, objetivo });
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
      <View style={styles.formContainer}>
        {[
          { label: 'NOME COMPLETO', value: nome, onChangeText: setNome },
          { label: 'SEXO', value: sexo, onChangeText: setSexo },
          { label: 'IDADE', value: idade, onChangeText: setIdade },
          { label: 'PESO / ALTURA', value: pesoAltura, onChangeText: setPesoAltura },
          { label: 'FREQUÊNCIA POR SEMANA', value: frequencia, onChangeText: setFrequencia },
          { label: 'OBJETIVO', value: objetivo, onChangeText: setObjetivo },
        ].map((input, index) => (
          <View key={index} style={styles.inputGroup}>
            <Text style={styles.label}>{input.label}</Text>
            <TextInput
              style={styles.input}
              value={input.value}
              onChangeText={input.onChangeText}
              placeholder={`Digite seu ${input.label.toLowerCase()}`}
              placeholderTextColor="#A0A0A0"
            />
          </View>
        ))}

        <TouchableOpacity style={styles.enviarButton} onPress={enviarFormulario}>
          <Text style={styles.enviarButtonText}>ENVIAR</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  formContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  inputGroup: {
    marginBottom: 20,
    width: '100%',
  },
  label: {
    color: '#333',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: '#555',
    borderWidth: 1,
    marginVertical: 5,
    padding: 10,
    color: '#333',
    borderRadius: 8,
  },
  enviarButton: {
    backgroundColor: '#333',
    borderRadius: 25, // Menor valor para o botão ficar um pouco menor
    paddingVertical: 8, // Menor valor para o preenchimento vertical
    paddingHorizontal: 32, // Menor valor para o preenchimento horizontal
    marginVertical: 20,
  },
  enviarButtonText: {
    color: '#F5F5F5',
    fontSize: 20, // Tamanho um pouco menor para o texto do botão
    fontWeight: 'bold',
    fontFamily: 'Inter',
    textAlign: 'center',
  },
});

export default Form;
