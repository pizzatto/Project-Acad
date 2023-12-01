import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Entypo, Feather } from '@expo/vector-icons';  // Importe os ícones necessários

const Page1 = () => {
  const getCurrentDate = () => {
    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const handleTreino1 = () => {
    console.log('Botão "Treino 1" pressionado.');
  };

  return (
    <View style={styles.container}>
      <View style={styles.orangeBar}>
        <Text style={styles.barText}>PROJECT ACAD</Text>
      </View>

      <View style={styles.contentContainer}>
        <Text style={styles.text}>Nome: SeuNome</Text>
        <Text style={styles.text}>Data: {getCurrentDate()}</Text>

        <TouchableOpacity style={styles.treinoButton} onPress={handleTreino1}>
          <Text style={styles.buttonText}>Treino 1</Text>
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
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  text: {
    color: 'black',
    fontSize: 16,
    marginBottom: 10,
  },
  treinoButton: {
    backgroundColor: '#333',
    borderRadius: 30,
    paddingVertical: 20,
    paddingHorizontal: 60,
  },
  buttonText: {
    color: '#f5f5f5',
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'Inter',
    textAlign: 'center',
  },
});

export default Page1;
