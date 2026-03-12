import { StyleSheet } from "react-native";

import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";
//testing purpose only
import { User } from "@repo/types";

export default function TabOneScreen() {
  const user: User = {
    id: "1",
    name: "Luis",
    email: "test@test.com",
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One sharing from packages/types</Text>
      <Text style={styles.title}>User: {user.name}</Text>
      <Text style={styles.title}>Email: {user.email}</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <EditScreenInfo path="app/(tabs)/index.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
