import { View, Text, Button, StyleSheet } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';

export default function ConfirmationScreen() {
  const { title, author, isbn } = useLocalSearchParams<{
    title: string;
    author: string;
    isbn: string;
  }>();
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Submission Successful!</Text>
      <Text>Book Title: {title}</Text>
      <Text>Author: {author}</Text>
      <Text>ISBN: {isbn}</Text>
      <Button title="Go Back" onPress={() => router.back()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
