import { useRouter } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { requireAuth } from '@/features/auth/guards/requireAuth';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
      <Pressable
        style={styles.button}
        onPress={() => {
          requireAuth(() => console.log('saved'));
        }}>
        <Text>Save recipe (requires login)</Text>
      </Pressable>
      <Pressable
        style={styles.button}
        onPress={() => {
          router.push('/recipe/123');
        }}>
        <Text>Open recipe 123</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    gap: 12,
  },
  title: {
    fontSize: 24,
  },
  button: {
    width: '100%',
    maxWidth: 320,
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 8,
  },
});
