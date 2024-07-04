import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Animated, SafeAreaView } from 'react-native';
import { FontAwesome } from 'react-native-vector-icons';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();
  const [showButtons, setShowButtons] = useState(false);
  const [animation] = useState(new Animated.Value(0));

  const daysOfWeek = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom'];
  const trainedDays = [false, true, true, false, true, false, true];
  const consecutiveWeeks = 2;
  const consecutiveDays = 4;

  const handleToggleButtons = () => {
    if (showButtons) {
      Animated.timing(animation, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start(() => setShowButtons(false));
    } else {
      setShowButtons(true);
      Animated.timing(animation, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  };

  const handleCriarTreino = () => {
    navigation.navigate('NewTraining');
  };

  const handleSolicitarTreino = () => {
    navigation.navigate('Form'); 
  };

  const handleStartTraining = () => {
    navigation.navigate('');
  };

  const animatedStyle = {
    transform: [
      {
        scale: animation
      },
    ],
    opacity: animation,
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <Text style={styles.appName}>STYGO</Text>
      </View>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.caloriesContainer}>
          <Text style={styles.caloriesText}>Gasto calórico hoje</Text>
          <Text style={styles.caloriesValue}>1768</Text>
        </View>

        <View style={styles.weekTable}>
          <Text style={styles.tableTitle}>Histórico de treinos</Text>
          <View style={styles.tableRow}>
            {daysOfWeek.map((day, index) => (
              <View key={index} style={styles.tableCell}>
                <Text style={trainedDays[index] ? styles.trainedDay : styles.untrainedDay}>{day}</Text>
                <FontAwesome 
                  name={trainedDays[index] ? "check" : "times"} 
                  size={24} 
                  color={trainedDays[index] ? "#4CAF50" : "#e74c3c"} 
                  style={styles.trainingStatus} 
                />
              </View>
            ))}
          </View>
        </View>

        <View style={styles.consecutiveContainer}>
          <Text style={styles.consecutiveTitle}>Continue com a sua sequência</Text>
          <Text style={styles.consecutiveSubtitle}>Treine antes da semana acabar para acumular 3 semanas consecutivas.</Text>
          <View style={styles.consecutiveRow}>
            <View style={styles.consecutiveBox}>
              <Text style={styles.consecutiveBoxTitle}>Semanas consecutivas</Text>
              <Text style={styles.consecutiveBoxValue}>{consecutiveWeeks}</Text>
            </View>
            <View style={styles.consecutiveBox}>
              <Text style={styles.consecutiveBoxTitle}>Dias consecutivos</Text>
              <Text style={styles.consecutiveBoxValue}>{consecutiveDays}</Text>
            </View>
          </View>
        </View>

        <TouchableOpacity style={styles.startButton} onPress={handleStartTraining}>
          <Text style={styles.buttonText}>Iniciar Treino</Text>
        </TouchableOpacity>
      </ScrollView>

      {showButtons && (
        <Animated.View style={[styles.floatingButtonContainer, animatedStyle]}>
          <TouchableOpacity style={styles.floatingButton} onPress={handleSolicitarTreino}>
            <Text style={styles.floatingButtonText}>Solicitar Treino</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.floatingButton} onPress={handleCriarTreino}>
            <Text style={styles.floatingButtonText}>Criar Treino</Text>
          </TouchableOpacity>
        </Animated.View>
      )}

      <TouchableOpacity style={styles.mainButton} onPress={handleToggleButtons}>
        <Text style={styles.mainButtonText}>+</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  appName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 20,
  },
  caloriesContainer: {
    marginBottom: 40,
    alignItems: 'center',
  },
  caloriesText: {
    fontSize: 18,
    color: '#000',
    marginBottom: 10,
  },
  caloriesValue: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#000',
  },
  weekTable: {
    width: '100%',
    marginBottom: 40,
  },
  tableTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
    textAlign: 'center',
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  tableCell: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
  },
  trainedDay: {
    fontSize: 18,
    color: '#4CAF50',
    fontWeight: 'bold',
  },
  untrainedDay: {
    fontSize: 18,
    color: '#000',
  },
  trainingStatus: {
    marginTop: 5,
  },
  consecutiveContainer: {
    width: '100%',
    marginBottom: 40,
    padding: 20,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    alignItems: 'center',
  },
  consecutiveTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
    textAlign: 'center',
  },
  consecutiveSubtitle: {
    fontSize: 14,
    color: '#000',
    marginBottom: 20,
    textAlign: 'center',
  },
  consecutiveRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  consecutiveBox: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '45%',
    padding: 20,
    backgroundColor: '#000',
    borderRadius: 10,
  },
  consecutiveBoxTitle: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 10,
    textAlign: 'center',
  },
  consecutiveBoxValue: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  startButton: {
    backgroundColor: '#000',
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 40,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  mainButton: {
    position: 'absolute',
    bottom: 30,
    right: 20,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  mainButtonText: {
    color: '#fff',
    fontSize: 30,
  },
  floatingButtonContainer: {
    position: 'absolute',
    bottom: 100,
    right: 20,
    alignItems: 'flex-end',
  },
  floatingButton: {
    backgroundColor: '#000',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 10,
    elevation: 5,
  },
  floatingButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default Home;