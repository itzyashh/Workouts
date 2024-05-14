
import { FlatList, StyleSheet, Text, View } from 'react-native';
import exercises from '../../assets/data/exercises.json';
import ExerciseItem from '../component/ExerciseItem';
import { Stack } from 'expo-router';

export default function App() {
  console.log(exercises);
  return (
      <View style={styles.container}>
   
    <FlatList
      data={exercises}
      renderItem={({ item }) => <ExerciseItem exercise={item} />}
      contentContainerStyle={{gap:10}}
      keyExtractor={(item) => item.name}
    />
   
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding: 20,

    justifyContent: 'center',
  },
  


});
