import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const SettingsScreen = (navigation) => {
  // Placeholder function for handling settings button press
  const handleSettingsPress = () => {
    // Add logic for handling settings button press
    console.log('Settings button pressed');
  };

  return (
    <View style={styles.container}>
     

      {/* Example settings options */}
      <TouchableOpacity style={styles.settingsOption} onPress={handleSettingsPress}>
        <Text style={styles.settingsOptionText}>Notification Settings</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.settingsOption} onPress={handleSettingsPress}>
        <Text style={styles.settingsOptionText}>Account Settings</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.settingsOption} onPress={handleSettingsPress}>
        <Text style={styles.settingsOptionText}>Privacy Settings</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  settingsOption: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    width: 200,
    alignItems: 'center',
  },
  settingsOptionText: {
    fontSize: 16,
  },
});

export default SettingsScreen;