import React, { useEffect, useState } from 'react';
import { View, Text, Button, ScrollView, StyleSheet, Alert } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../Navigation/RootNavigator';
import { fetchIpAddress, fetchCountry } from '../Services/ApiService';
import { getUsers } from '../Services/LocalStorage';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function DashboardScreen({ navigation, route }: NativeStackScreenProps<RootStackParamList, 'Dashboard'>) {
  const { username } = route.params;
  const [ip, setIp] = useState('');
  const [country, setCountry] = useState('');
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Ionicons
          name="log-out-outline"
          size={24}
          color="black"
          style={{ marginRight: 15 }}
          onPress={() => {
            Alert.alert('Logout', 'Are you sure you want to logout?', [
              { text: 'Cancel', style: 'cancel' },
              {
                text: 'Logout',
                onPress: () => navigation.replace('Login'),
                style: 'destructive',
              },
            ]);
          }}
        />
      ),
    });
  }, [navigation]);

  useEffect(() => {
    const loadIp = async () => {
      const ip = await fetchIpAddress();
      setIp(ip);
      const country = await fetchCountry(ip);
      setCountry(country);
    };
    loadIp();
  }, []);

  const fetchUsers = async () => {
    const allUsers = await getUsers();
    setUsers(allUsers);
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.infoContainer}>
  <Text style={styles.welcomeText}>Welcome, {username}!</Text>
  <Text style={styles.infoLabel}>IP Address:</Text>
  <Text style={styles.infoValue}>{ip}</Text>
  <Text style={styles.infoLabel}>Country:</Text>
  <Text style={styles.infoValue}>{country}</Text>
</View>

     {users.map((u, i) => (
  <View key={i} style={styles.userBox}>
    <Text style={styles.userText}>Username: {u.username}</Text>
    <Text style={styles.userText}>Name: {u.name}</Text>
    <Text style={styles.userText}>Phone: {u.phoneNumber}</Text>
    <Text style={styles.userText}>Address: {u.address}</Text>
  </View>
))}
      </ScrollView>

      {username === 'admin' && (
        <View style={styles.fetchButtonContainer}>
          <Button title="Fetch Users" onPress={fetchUsers} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 100,
  },
  infoContainer: {
  marginBottom: 20,
  padding: 15,
  backgroundColor: '#e6f0ff',
  borderRadius: 10,
  borderWidth: 1,
  borderColor: '#cce0ff',
},
welcomeText: {
  fontSize: 22,
  fontWeight: 'bold',
  color: '#333',
  marginBottom: 10,
},
infoLabel: {
  fontSize: 16,
  fontWeight: '600',
  color: '#555',
  marginTop: 5,
},
infoValue: {
  fontSize: 16,
  color: '#000',
  marginBottom: 5,
},
  fetchButtonContainer: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  userBox: {
  padding: 15,
  marginBottom: 15,
  borderWidth: 1,
  borderColor: '#ddd',
  borderRadius: 10,
  backgroundColor: '#f9f9f9',
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.1,
  shadowRadius: 4,
  elevation: 2,
},
userText: {
  fontSize: 14,
  marginBottom: 4,
},
});
