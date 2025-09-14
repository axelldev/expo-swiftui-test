import {
  CircularProgress,
  Host,
  HStack,
  LinearProgress,
  VStack,
} from "@expo/ui/swift-ui";
import { View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <Host style={{ flex: 1, margin: 8 }} matchContents>
        <VStack spacing={32}>
          <HStack spacing={32}>
            <CircularProgress color="cyan" />
            <CircularProgress color="orange" />
          </HStack>
          <LinearProgress progress={0.5} />
          <LinearProgress color="orange" progress={0.5} />
        </VStack>
      </Host>
    </View>
  );
}
