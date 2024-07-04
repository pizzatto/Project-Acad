import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const CreateWorkoutScreen = () => {
  const [workoutName, setWorkoutName] = useState('');
  const [duration, setDuration] = useState('');

  const handleSave = () => {
    // Lógica para salvar o treino
    console.log('Workout Name:', workoutName);
    console.log('Duration:', duration);
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Nome do Treino:</Text>
      <TextInput
        value={workoutName}
        onChangeText={setWorkoutName}
        placeholder="Digite o nome do treino"
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 20 }}
      />
      <Text>Duração (minutos):</Text>
      <TextInput
        value={duration}
        onChangeText={setDuration}
        placeholder="Digite a duração"
        keyboardType="numeric"
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 20 }}
      />
      <Button title="Salvar Treino" onPress={handleSave} />
    </View>
  );
};

export default CreateWorkoutScreen;
