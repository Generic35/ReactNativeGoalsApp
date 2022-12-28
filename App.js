import { useState } from 'react';
import { Button, StyleSheet, TextInput, Text, View, ScrollView, FlatList } from 'react-native';

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText) {
    console.log('enteredText', enteredText)
    setEnteredGoalText(enteredText)
  }

  function addGoalHandler() {
    setCourseGoals(currentCourseGoals => [...currentCourseGoals, { text: enteredGoalText, id: Math.random().toString() }])
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} onChangeText={goalInputHandler} placeholder='Your course goal!' />
        <Button title='Add Goal' onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        <FlatList
          alwaysBounceVertical={false}
          data={courseGoals} renderItem={(itemData) => {
            return (<View style={styles.goalItem}>
              <Text style={styles.goalText}>{itemData.item.text}</Text>
            </View>);
          }}
          keyExtractor={(item, index) => { return item.id }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create(
  {
    appContainer: {
      flex: 1,
      paddingTop: 50,
      paddingHorizontal: 16
    },
    inputContainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 24,
      borderBottomWidth: 1,
      borderBottomColor: '#CCCCCC',
    },
    textInput: {
      borderWidth: 1,
      borderColor: '#CCCCCC',
      width: '70%',
      marginRight: 8,
      padding: 8,
    },
    goalsContainer: {
      flex: 4
    },
    goalItem: {
      margin: 8,
      padding: 8,
      borderRadius: 6,
      backgroundColor: '#5e0acc',
    },
    goalText: {
      color: 'white'
    }
  }
);
