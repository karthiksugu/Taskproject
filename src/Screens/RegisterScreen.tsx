import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { saveUsers, getUsers } from '../Services/LocalStorage';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../Navigation/RootNavigator';

export default function RegisterScreen({ navigation }: NativeStackScreenProps<RootStackParamList, 'Register'>) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');

  const handleRegister = async () => {
    const users = await getUsers();

    // Check for duplicate username
    const duplicate = users.find((u: any) => u.username === username);
    if (duplicate) {
      Alert.alert('User already exists');
      return;
    }

    // Save the new user data
    await saveUsers([...users, {
      username,
      password,
      name,
      phoneNumber,
      address,
    }]);

    Alert.alert('Registration Successful');
    navigation.replace('Login');
  };

  return (
    <ScrollView contentContainerStyle={{ padding: 20 }}>
      <Text style={styles.label}>Name:</Text>
      <TextInput
        value={name}
        onChangeText={setName}
        style={styles.input}
      />

      <Text style={styles.label}>Phone Number:</Text>
      <TextInput
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        keyboardType="phone-pad"
        style={styles.input}
      />

      <Text style={styles.label}>Address:</Text>
      <TextInput
        value={address}
        onChangeText={setAddress}
        multiline
        style={styles.input}
      />

      <Text style={styles.label}>Email:</Text>
      <TextInput
        value={username}
        onChangeText={setUsername}
        style={styles.input}
      />

      <Text style={styles.label}>Password:</Text>
      <TextInput
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />

      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    color: 'black'
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
    label: {
    color: 'black',
    fontSize: 16,
   
  },
})
