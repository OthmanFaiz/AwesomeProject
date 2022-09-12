import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { RoundedButton } from '../components/RoundedButton';

export const Fouces = ({addSubject}) => {
  const [subject, setSubject] = useState(null);
  return (
    <View style={styles.container}>
      <View style={styles.inputCountainer}>
        <TextInput
          style={styles.textInput}
          onChangeText={setSubject}
          label="What would you like to fouces on..."
        />
        <View style={styles.button}>
          <RoundedButton onPress={() => addSubject(subject)} title="+" size={50} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textInput: {
    flex: 1,
    marginRight: 10,
  },
  button: {
    justifyContent: 'center',
  },
  inputCountainer: {
    padding: 25,
    justifyContent: 'top',
    flexDirection: 'row',
  },
});
