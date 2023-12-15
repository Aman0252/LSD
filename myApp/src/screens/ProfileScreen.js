// Import necessary React Native components
import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const ProfileScreen = () => {
  // Placeholder user data
  const user = {
    name: 'John Doe',
    username: 'johndoe123',
    email: 'john.doe@example.com',
    phoneNumber: '+1 123-456-7890',
    dob: 'January 1, 1990',
    profileImage: require('../assests/images/jameson.png'), // Replace with the actual path to your image
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.container}>
      <Image source={user.profileImage} style={styles.profileImage} />

      <View style={styles.textBoxContainer}>
        <Text style={styles.label}>Name:</Text>
        <Text style={styles.textBox}>{user.name}</Text>
      </View>

      <View style={styles.textBoxContainer}>
        <Text style={styles.label}>Username:</Text>
        <Text style={styles.textBox}>{user.username}</Text>
      </View>

      <View style={styles.textBoxContainer}>
        <Text style={styles.label}>Email:</Text>
        <Text style={styles.textBox}>{user.email}</Text>
      </View>

      <View style={styles.textBoxContainer}>
        <Text style={styles.label}>Phone Number:</Text>
        <Text style={styles.textBox}>{user.phoneNumber}</Text>
      </View>

      <View style={styles.textBoxContainer}>
        <Text style={styles.label}>Date of Birth:</Text>
        <Text style={styles.textBox}>{user.dob}</Text>
      </View>
    </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        // alignItems: 'center',
        padding: 10,
      },
      profileImage: {
        width: 120,
        height: 120,
        borderRadius: 60,
        marginBottom: 20,
        alignItems: 'center',
        justifyContent: 'center',
      },
      textBoxContainer: {
        marginBottom: 15,
        width: '100%',
      },
      label: {
        fontSize: 18,
        marginBottom: 5,
      },
      textBox: {
        height: 40,
        // borderColor: 'gray',
        borderBottomWidth: 1,
        borderBottomColor:'gray',
        paddingTop: 10,
        color: 'black'
      },

});

export default ProfileScreen;
