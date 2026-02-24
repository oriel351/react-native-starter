import { useRouter } from 'expo-router';
import { Pressable, Text, View } from 'react-native';

import { authStore } from '@/features/auth/store/authStore';

export default function AuthModalScreen() {
  const router = useRouter();

  return (
    <View>
      <Text>Login / Register</Text>
      <Pressable
        onPress={() => {
          authStore.setGuest();
          router.back();
        }}>
        <Text>Continue as Guest</Text>
      </Pressable>
      <Pressable
        onPress={() => {
          authStore.setLoggedIn();
          router.back();
        }}>
        <Text>Login</Text>
      </Pressable>
      <Pressable
        onPress={() => {
          authStore.setLoggedIn();
          router.back();
        }}>
        <Text>Register</Text>
      </Pressable>
    </View>
  );
}
