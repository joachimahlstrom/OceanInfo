import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    if (navigation) {
      setTimeout(() => {
        navigation.navigate('Home');
      }, 3000);
    }
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://img.icons8.com/color/48/sail-boat.png' }}
        style={styles.logo}
      />
      <Text style={styles.text}>OceanInfo</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#add8e6',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default SplashScreen;
