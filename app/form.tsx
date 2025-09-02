import { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function FormScreen() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [isbn, setIsbn] = useState('');
  const router = useRouter();

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Book Title"
        style={styles.input}
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        placeholder="Author"
        style={styles.input}
        value={author}
        onChangeText={setAuthor}
      />
      <TextInput
        placeholder="ISBN"
        style={styles.input}
        value={isbn}
        onChangeText={setIsbn}
      />
      <Button
        title="Submit"
        onPress={() =>
          router.push({
            pathname: '/confirmation',
            params: { title, author, isbn },
          })
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 15,
    borderRadius: 8,
  },
});
