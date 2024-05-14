import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const ExerciseItem = ({exercise}) => {

  return (
    <View style={styles.exContainer}>
    <Text style={styles.exName}>{exercise.name}</Text>
    <Text style={styles.exSubTitle}>
     <Text style={styles.subValue}>{exercise.muscle}</Text> | <Text style={styles.subValue}>{exercise.equipment}</Text>
    </Text>
  </View>
  )
}

export default ExerciseItem

const styles = StyleSheet.create({
    exContainer:{
        backgroundColor:'#333',
        padding:10,
        borderRadius:10,
        gap:5,
      },
      exName:{color:'#007AFF',fontSize:20,fontWeight:'500'},
      exSubTitle:{color: 'dimgray' },
      subValue:{
        textTransform:'capitalize',
      }
    })