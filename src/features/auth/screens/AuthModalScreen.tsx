import { useRouter } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { authStore } from '@/features/auth/store/authStore';

export default function AuthModalScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login / Register</Text>
      <Pressable
        style={styles.button}
        onPress={() => {
          authStore.setGuest();
          router.back();
        }}>
        <Text>Continue as Guest</Text>
      </Pressable>
      <Pressable
        style={styles.button}
        onPress={() => {
          authStore.setLoggedIn();
          router.back();
        }}>
        <Text>Login</Text>
      </Pressable>
      <Pressable
        style={styles.button}
        onPress={() => {
          authStore.setLoggedIn();
          router.back();
        }}>
        <Text>Register</Text>
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
