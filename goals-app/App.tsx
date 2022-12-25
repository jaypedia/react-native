import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, View, FlatList, Alert, Button, SafeAreaView } from 'react-native';
import { GoalInput } from './components/GoalInput';
import { GoalItem } from './components/GoalItem';

type GoalsItemType = {
  id: string;
  goal: string;
};

export default function App() {
  const [goalsList, setGoalsList] = useState<GoalsItemType[]>([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const cancleModal = () => {
    setModalIsVisible(false);
  };

  const addGoalHandler = (goalText: string) => {
    if (!goalText) {
      Alert.alert('You must enter a goal text');
      return;
    }
    setGoalsList((cur) => [...cur, { goal: goalText, id: Math.random().toString() }]);
    cancleModal();
  };

  const handleDeleteItem = (id: string) => {
    setGoalsList((cur) => cur.filter((goal) => goal.id !== id));
  };

  const modalButtonHander = () => {
    setModalIsVisible((cur) => !cur);
  };

  return (
    <>
      <StatusBar style="light" />
      <SafeAreaView style={styles.container}>
        <Button title="ADD GOAL" color="#9a62c0" onPress={modalButtonHander} />
        <GoalInput onAddGoal={addGoalHandler} isVisible={modalIsVisible} onCancel={cancleModal} />
        <View style={styles.goalsContainer}>
          <FlatList
            data={goalsList}
            renderItem={(itemData) => (
              <GoalItem
                id={itemData.item.id}
                goalText={itemData.item.goal}
                onDelete={handleDeleteItem}
              />
            )}
            keyExtractor={(item) => item.id}
          />
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  goalsContainer: {
    flex: 3,
    width: '100%',
    marginTop: 10,
    padding: 20,
  },
});
