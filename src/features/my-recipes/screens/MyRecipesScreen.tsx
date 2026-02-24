import { StyleSheet, Text, View } from 'react-native';

export default function MyRecipesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Recipes</Text>
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
