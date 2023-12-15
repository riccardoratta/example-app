import { StatusBar } from "expo-status-bar";
import { TamaguiProvider, View, Text } from "tamagui";

import config from "./tamagui.config";

export default function App() {
  return (
    <TamaguiProvider config={config}>
      <StatusBar style="auto" />
      <View>
        <Text>Open up App.tsx to start working on your app!</Text>
      </View>
    </TamaguiProvider>
  );
}
