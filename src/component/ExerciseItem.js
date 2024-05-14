import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const ExerciseItem = ({exercise}) => {

  return (
    <Link href={`${exercise.name}`}
      asChild
     style={{textDecoration:'none'}}>
    <Pressable style={styles.exContainer}>
    <Text style={styles.exName}>{exercise.name}</Text>
    <Text style={styles.exSubTitle}>
     <Text style={styles.subValue}>{exercise.muscle}</Text> | <Text style={styles.subValue}>{exercise.equipment}</Text>
    </Text>
  </Pressable>
    </Link>
  )
}

export default ExerciseItem

const styles = StyleSheet.create({
    exContainer:{
        backgroundColor:'#333',
        padding:10,
        borderRadius:10,
        gap:5,
        shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,

elevation: 5
      },
      exName:{color:'#007AFF',fontSize:20,fontWeight:'500'},
      exSubTitle:{color: 'dimgray' },
      subValue:{
        textTransform:'capitalize',
      }
    })