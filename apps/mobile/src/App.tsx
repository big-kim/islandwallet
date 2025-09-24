import { StatusBar } from "expo-status-bar";
import { SafeAreaView, Text, View } from "react-native";
import { usePretendardFont } from "@ic-wallet/ui/expo";

export default function App() {
  const { loaded, fontFamily } = usePretendardFont();

  if (!loaded) {
    return null;
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff" }}>
      <StatusBar style="dark" />
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          paddingHorizontal: 24,
        }}
      >
        <Text
          style={{
            fontFamily,
            fontSize: 24,
            fontWeight: "600",
            textAlign: "center",
            color: "#111827",
          }}
        >
          IC Wallet Mobile
        </Text>
        <Text
          style={{
            fontFamily,
            marginTop: 12,
            fontSize: 16,
            lineHeight: 22,
            textAlign: "center",
            color: "#4b5563",
          }}
        >
          Expo + React Native app scaffold managed within a shared Turborepo workspace.
        </Text>
      </View>
    </SafeAreaView>
  );
}
