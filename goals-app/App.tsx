import { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { GoalInput } from './components/GoalInput';
import { GoalItem } from './components/GoalItem';

type GoalsItemType = {
  id: string;
  goal: string;
};

export default function App() {
  const [goalsList, setGoalsList] = useState<GoalsItemType[]>([]);

  const addGoalHandler = (goalText: string) => {
    setGoalsList((cur) => [...cur, { goal: goalText, id: Math.random().toString() }]);
  };

  return (
    <View style={styles.container}>
      <GoalInput onAddGoal={addGoalHandler} />
      <View style={styles.goalsContainer}>
        <FlatList
          data={goalsList}
          renderItem={(itemData) => <GoalItem goalText={itemData.item.goal} />}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
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
  },
});
