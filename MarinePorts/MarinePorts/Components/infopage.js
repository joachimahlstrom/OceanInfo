import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('suggestiondb.db');

const AboutPage = () => {
  const [suggestion, setSuggestion] = useState('');

  useEffect(() => {
    db.transaction(tx => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS suggestions (id INTEGER PRIMARY KEY AUTOINCREMENT, message TEXT)'
      );
    });
  }, []);

  const addSuggestion = () => {
    db.transaction(tx => {
      tx.executeSql(
        'INSERT INTO suggestions (message) VALUES (?)',
        [suggestion],
        (_, { rowsAffected }) => {
          if (rowsAffected > 0) {
            console.log('Suggestion added successfully');
            setSuggestion('');
            showAlert();
          }
        }
      );
    });
  };

  const showAlert = () => {
    Alert.alert('Success', 'Your suggestion has been submitted!', [{ text: 'OK' }]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>About This App</Text>
      <Text style={styles.description}>
        The application is designed to provide users with real-time information about wave heights at various locations in the ocean. Users can input specific latitude and longitude coordinates to retrieve accurate wave height data for the corresponding area. Additionally, the app allows users to quickly send for emergency assistance using their current location in case of any distress or urgent need for help.
      </Text>
      <View style={styles.suggestionBox}>
        <Text style={styles.suggestionHeader}>We want to improve, Write Your Suggestion Here!</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your suggestion"
          value={suggestion}
          onChangeText={text => setSuggestion(text)}
        />
        <TouchableOpacity style={styles.buttonContainer} onPress={addSuggestion}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
    backgroundColor: '#f4f4f4',
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#14213d',
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    marginBottom: 25,
    color: '#333333',
    textAlign: 'center',
  },
  suggestionBox: {
    width: '100%',
    alignItems: 'center',
  },
  suggestionHeader: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#14213d',
  },
  input: {
    height: 40,
    borderColor: '#14213d',
    borderWidth: 1,
    width: '80%',
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    width: 150,
    height: 40,
    borderRadius: 5,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AboutPage;
