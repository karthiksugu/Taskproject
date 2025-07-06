import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet, Pressable } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../Navigation/RootNavigator';
import { getUsers } from '../Services/LocalStorage';

export default function LoginScreen({ navigation }: NativeStackScreenProps<RootStackParamList, 'Login'>) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    if (username === 'admin' && password === 'admin') {
      navigation.replace('Dashboard', { username });
      return;
    }

    const users = await getUsers();
    const user = users.find((u: any) => u.username === username && u.password === password);
    if (user) {
      navigation.replace('Dashboard', { username });
    } else {
      Alert.alert('Invalid credentials');
    }
  };

  return (
    <View style={{ marginTop: 100,paddingHorizontal:20 }}>
      <Text>Email</Text>
      <TextInput value={username} onChangeText={setUsername} style={styles.input} />
      <Text>Password</Text>
      <TextInput value={password} onChangeText={setPassword} secureTextEntry style={styles.input} />
      <View style={styles.buttonContainer}>
        <Pressable style={({ pressed }) => [styles.loginButton, pressed && styles.buttonPressed]} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </Pressable>

        <Pressable style={({ pressed }) => [styles.registerButton, pressed && styles.buttonPressed]} onPress={() => navigation.navigate('Register')}>
          <Text style={styles.buttonText}>Register</Text>
        </Pressable>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
  buttonContainer: {
   // flexDirection: 'row',
   // justifyContent: 'space-between',
    marginVertical: 20,
  },
  loginButton: {
   // flex: 1,
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  registerButton: {
   // flex: 1,
    backgroundColor: '#2196F3',
    paddingVertical: 12,
    marginTop:15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonPressed: {
    opacity: 0.7,
  },
})
