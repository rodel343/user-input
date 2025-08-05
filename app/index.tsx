import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Text, TouchableOpacity, View } from "react-native";

export const screenOptions = {
  headerShown: false,
};

type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  SignUp: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

export default function Index() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
      }}
    >
      <Text style={{ color: "#0D0F13", fontSize: 36, fontWeight: 700, textAlign: "center", marginBottom: 34, paddingHorizontal: 20 }}>
        Hello!, Please Choose Log-in or Sign-up
      </Text>

      <TouchableOpacity
        onPress={() => navigation.navigate("Login")}
        style={{
          backgroundColor: "#2e86de",
          paddingVertical: 10,
          paddingHorizontal: 40,
          borderRadius: 8,
        }}
      >
        <Text style={{ color: "white", fontSize: 16 }}>Log in</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("SignUp")}
        style={{
          backgroundColor: "#e81d0e",
          paddingVertical: 10,
          paddingHorizontal: 30,
          borderRadius: 8,
        }}
      >
        <Text style={{ color: "white", fontSize: 16 }}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}
