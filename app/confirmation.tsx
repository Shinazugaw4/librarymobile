import { View, Text, Button, StyleSheet } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';

export default function ConfirmationScreen() {
  const { name, studentId, course } = useLocalSearchParams<{
    name: string;
    studentId: string;
    course: string;
  }>();
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Confirmation</Text>
      <Text>Student Name: {name}</Text>
      <Text>Student ID: {studentId}</Text>
      <Text>Course: {course}</Text>
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
