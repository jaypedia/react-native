import { useEffect, useState } from 'react';
import { View, StyleSheet, Alert, FlatList, Text } from 'react-native';
import { NumberContainer } from '../components/game/NumberContainer';
import { Card } from '../components/ui/Card';
import { CustomButton } from '../components/ui/CustomButton';
import { InstructionText } from '../components/ui/InstructionText';
import { Title } from '../components/ui/Title';
import { generateRandomBetween } from '../utils/randomNumber';
import { Ionicons } from '@expo/vector-icons';
import { GuessNumberBox } from '../components/game/GuessNumberBox';

let minBoundary = 1;
let maxBoundary = 100;

type GamePageProps = {
  userNumber: number;
  rounds: number;
  onGameOver: () => void;
  onIncreaseRound: () => void;
};

export const GamePage = ({ userNumber, rounds, onGameOver, onIncreaseRound }: GamePageProps) => {
  const initialNumber = generateRandomBetween(1, 100, userNumber);
  const [currentNumber, setCurrentNumber] = useState(initialNumber);
  const [guessNumberList, setGuessNumberList] = useState([initialNumber]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  console.log(minBoundary, maxBoundary);

  const nextGuessHander = (direction: string) => {
    if (
      (direction === 'lower' && currentNumber < userNumber) ||
      (direction === 'greater' && currentNumber > userNumber)
    ) {
      Alert.alert(`Don't lie!`, 'You know that this is wrong...', [
        {
          text: 'Sorry!',
          style: 'cancel',
        },
      ]);
      return;
    }

    if (direction === 'lower') {
      maxBoundary = currentNumber;
    } else {
      minBoundary = currentNumber + 1;
    }

    const newNumber = generateRandomBetween(minBoundary, maxBoundary, currentNumber);
    setCurrentNumber(newNumber);
    if (newNumber === userNumber) {
      onGameOver();
    }
    onIncreaseRound();
    setGuessNumberList((cur) => [newNumber, ...cur]);
  };

  return (
    <View style={styles.container}>
      <Title>Opponent's Guess</Title>

      <NumberContainer>{currentNumber}</NumberContainer>
      <Card>
        <InstructionText style={styles.instructionText}>Higher or lower?</InstructionText>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <CustomButton onPress={nextGuessHander.bind(this, 'lower')}>
              <Ionicons name="md-remove" size={24} color="black" />
            </CustomButton>
          </View>
          <View style={styles.button}>
            <CustomButton onPress={nextGuessHander.bind(this, 'greater')}>
              <Ionicons name="md-add" size={24} color="black" />
            </CustomButton>
          </View>
        </View>
      </Card>

      <View style={styles.listContainer}>
        <FlatList
          data={guessNumberList}
          renderItem={({ item, index }) => (
            <GuessNumberBox number={item} round={guessNumberList.length - index} />
          )}
          keyExtractor={(item) => item.toString()}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  button: {
    flex: 1,
  },
  instructionText: {
    marginBottom: 20,
  },
  listContainer: {
    flex: 1,
  },
});
