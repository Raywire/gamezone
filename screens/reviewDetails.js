import React from 'react';
import { Button, Text, View } from 'react-native';
import { globalStyles } from '../styles/global'

export default function ReviewDetails({ navigation }) {
  const pressHandler = () => {
    navigation.goBack();
  }
  return (
    <View style={globalStyles.container}>
      <Text>ReviewDetails Screen</Text>
      <Button title='back to homescreen' onPress={pressHandler} />
    </View>
  );
}
