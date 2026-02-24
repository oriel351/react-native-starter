import { StyleSheet, Text, View } from 'react-native';

export default function CookingModeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cooking Mode</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  title: {
    fontSize: 24,
  },
});
