import { useLocalSearchParams } from 'expo-router';
import { Text, View } from 'react-native';

export default function RecipeDetailScreen() {
  const { id } = useLocalSearchParams<{ id?: string }>();

  return (
    <View>
      <Text>{`Recipe Detail: ${id ?? ''}`}</Text>
    </View>
  );
}
