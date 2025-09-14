import { ScrollView, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Example() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <Text>SwiftUI components</Text>
      </ScrollView>
    </SafeAreaView>
  );
}
