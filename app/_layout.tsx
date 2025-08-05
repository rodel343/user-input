import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Login"
        options={{
          headerShown: true,
          title: "",
        }}
      />
      <Stack.Screen
        name="SignUp"
        options={{
          headerShown: true,
          title: "",
        }}
      />
    </Stack>
  );
}
