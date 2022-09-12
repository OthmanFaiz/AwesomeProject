import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
} from 'react-native';
import { Fouces } from './src/features/Fouces';

export default function App() {
  const [currentSubject, setCurrentSubject] = useState(null);
  return (
    <SafeAreaView style={styles.container}>
      {!currentSubject ? (
        <Fouces addSubject={setCurrentSubject} />
      ) : (
        <View>
          <Text>I'm going to render the timer{currentSubject}</Text>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: '#252525',
  },
});
