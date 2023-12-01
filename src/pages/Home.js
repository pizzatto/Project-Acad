import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();

  const handleSolicitarTreino = () => {
    navigation.navigate('Form');
  };

  const handleAreaProfissional = () => {
    // Lógica para lidar com a ação do botão da área profissional
  };

  return (
    <View style={styles.container}>
      <View style={styles.orangeBar}>
        <Text style={styles.barText}>PROJECT ACAD</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleSolicitarTreino}>
          <Text style={styles.buttonText}>SOLICITAR TREINO</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.areaProfissionalButton} onPress={handleAreaProfissional}>
          <Text style={styles.areaProfissionalButtonText}>ÁREA DO PROFISSIONAL</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  orangeBar: {
    height: 100,
    backgroundColor: 'black',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 10,
  },
  barText: {
    color: '#f5f5f5',
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'Inter',
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#333',
    borderRadius: 30,
    width: '80%',
    paddingVertical: 20,
    marginVertical: 10,
  },
  buttonText: {
    color: '#f5f5f5',
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'Inter',
    textAlign: 'center',
  },
  areaProfissionalButton: {
    backgroundColor: '#333',
    borderRadius: 30,
    width: '80%',
    paddingVertical: 20,
    marginVertical: 10,
  },
  areaProfissionalButtonText: {
    color: '#f5f5f5',
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'Inter',
    textAlign: 'center',
  },
});

export default Home;
