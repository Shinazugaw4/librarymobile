import { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function FormScreen() {
  const [name, setName] = useState('');
  const [studentId, setStudentId] = useState('');
  const [course, setCourse] = useState('');
  const router = useRouter();

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Student Name"
        style={styles.input}
        value={name}
        onChangeText={setName}
      />
      <TextInput
        placeholder="Student ID"
        style={styles.input}
        value={studentId}
        onChangeText={setStudentId}
      />
      <TextInput
        placeholder="Course"
        style={styles.input}
        value={course}
        onChangeText={setCourse}
      />
      <Button
        title="Submit"
        onPress={() =>
          router.push({
            pathname: '/confirmation',
            params: { name, studentId, course },
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
