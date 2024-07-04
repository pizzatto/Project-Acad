import React, { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from 'react-native';
import { useNavigation } from '@react-navigation/native'; 

const Form = () => {
  const navigation = useNavigation(); 

  const [nome, setNome] = useState('');
  const [sexo, setSexo] = useState('');
  const [idade, setIdade] = useState('');
  const [pesoAltura, setPesoAltura] = useState('');
  const [frequencia, setFrequencia] = useState('');
  const [objetivo, setObjetivo] = useState('');

  const enviarFormulario = () => {
    console.log('Dados enviados:', { nome, sexo, idade, pesoAltura, frequencia, objetivo });
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      enabled
    >
      <ScrollView contentContainerStyle={styles.formContainer}>
        {/* Botão de Voltar */}
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.voltarButton}>
        <AntDesign name="left" size={24} color="black" />
        </TouchableOpacity>

        {[
          { label: 'NOME COMPLETO', value: nome, onChangeText: setNome, keyboardType: 'default' },
          { label: 'SEXO', value: sexo, onChangeText: setSexo, keyboardType: 'default' },
          { label: 'IDADE', value: idade, onChangeText: setIdade, keyboardType: 'number-pad' },
          { label: 'PESO / ALTURA', value: pesoAltura, onChangeText: setPesoAltura, keyboardType: 'default' },
          { label: 'FREQUÊNCIA POR SEMANA', value: frequencia, onChangeText: setFrequencia, keyboardType: 'number-pad' },
          { label: 'OBJETIVO', value: objetivo, onChangeText: setObjetivo, keyboardType: 'default' },
        ].map((input, index) => (
          <View key={index} style={styles.inputGroup}>
            <Text style={styles.label}>{input.label}</Text>
            <TextInput
              style={styles.input}
              value={input.value}
              onChangeText={input.onChangeText}
              placeholder={`Digite seu ${input.label.toLowerCase()}`}
              placeholderTextColor="#A0A0A0"
              keyboardType={input.keyboardType}
            />
          </View>
        ))}
        <TouchableOpacity style={styles.enviarButton} onPress={enviarFormulario} activeOpacity={0.8}>
          <Text style={styles.enviarButtonText}>ENVIAR</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  voltarButton: {
    alignSelf: 'flex-start',
    marginBottom: 10,
    paddingHorizontal: 5,
    paddingVertical: 40,
  },
  voltarButtonText: {
    color: '#0066CC',
    fontSize: 16,
  },
  formContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  inputGroup: {
    marginBottom: 15,
    width: '100%',
  },
  label: {
    color: '#333',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    height: 45,
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderColor: '#DDD',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    fontSize: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 2,
  },
  enviarButton: {
    marginTop: 20,
    backgroundColor: 'black',
    borderRadius: 8,
    paddingVertical: 12,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 3,
  },
  enviarButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Form;
