import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Hi there !</Text>
      <Button
        title="Go to Components Demo"
        style={styles.myButtons}
        onPress={() => {
          navigation.navigate('Components');
        }}
      />
      <Button
        title="Go to List Demo"
        style={styles.myButtons}
        onPress={() => {
          navigation.navigate('List');
        }}
      />
      <Button
        title="Go to Image Demo"
        style={styles.myButtons}
        onPress={() => {
          navigation.navigate('Image');
        }}
      />
      <Button
        title="Go to Counter Demo"
        style={styles.myButtons}
        onPress={() => {
          navigation.navigate('Counter');
        }}
      />
      <Button
        title="Go to Color Demo"
        style={styles.myButtons}
        onPress={() => {
          navigation.navigate('Color');
        }}
      />
      <Button
        title="Go to Square Demo"
        style={styles.myButtons}
        onPress={() => {
          navigation.navigate('Square');
        }}
      />
      <Button
        title="Go to Text Demo"
        style={styles.myButtons}
        onPress={() => {
          navigation.navigate('Text');
        }}
      />
      <Button
        title="Go to Box Demo"
        style={styles.myButtons}
        onPress={() => {
          navigation.navigate('Box');
        }}
      />

    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  },
  myButtons: {
    marginTop: 10
  }
});

export default HomeScreen;
