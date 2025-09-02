import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack initialRouteName="form">
      <Stack.Screen name="form" options={{ title: "Book Form" }} />
      <Stack.Screen name="confirmation" options={{ title: "Confirmation" }} />
    </Stack>
  );
}
