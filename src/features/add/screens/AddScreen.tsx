import { ThemedText } from '@/ui/components/ThemedText';
import { ThemedView } from '@/ui/components/ThemedView';

export default function AddScreen() {
  return (
    <ThemedView
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
      }}>
      <ThemedText type="title">Add</ThemedText>
      <ThemedText>Coming soon.</ThemedText>
    </ThemedView>
  );
}
