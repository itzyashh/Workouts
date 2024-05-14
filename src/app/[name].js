import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack, useLocalSearchParams } from 'expo-router'
import exercises from '../../assets/data/exercises.json';


const ExerciseDetails = () => {
  const {name} = useLocalSearchParams()
  const [instructionsExpanded, setInstructionsExpanded] = React.useState(false)
  const exercise = exercises.find((ex) => ex.name === name)
  if (!exercise) return null
  return (
    <ScrollView style={styles.container}>
     <Stack.Screen  options={{title: `${exercise.name}`}}/>
     <View style={styles.panelContainer}>
     <View style={styles.panel}>
          <Text style={styles.exName}>{exercise.name}</Text>
    <Text style={styles.exSubTitle}>
     <Text style={styles.subValue}>{exercise.muscle}</Text> | <Text style={styles.subValue}>{exercise.equipment}</Text>
    </Text>
    </View>
    <View style={[styles.panel,{marginBottom:50}]}>

    <Text
    numberOfLines={instructionsExpanded ? undefined : 4}
     style={styles.exInstructions}>{exercise.instructions}</Text>
     <Text 
     onPress={() => setInstructionsExpanded((prev) => !prev)}
     style={styles.seeMore}>{instructionsExpanded ? 'See Less' : 'See More'}</Text>
    </View>
    </View>
    </ScrollView>
  )
}

export default ExerciseDetails

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 20,
    paddingHorizontal: 5,
    paddingBottom: 70,
  },
  exName:{color:'#007AFF',fontSize:20,fontWeight:'500'},
  exSubTitle:{color: 'dimgray' },
  subValue:{
    textTransform:'capitalize',
  },
  exInstructions:{

    marginTop:10,
    fontSize:16,
    lineHeight:20
  },
  seeMore:{
    color:'#007AFF',
    fontSize:16,
    textAlign:'right',
  },
  panelContainer:{
    gap:10,
  },
  panel:{
    backgroundColor:'#333',
    padding:10,
    borderRadius:10,
    gap:5,
    shadowColor: "#000",
  }
})