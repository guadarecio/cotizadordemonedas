import React from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";

import { useFonts, Inter_900Black } from "@expo-google-fonts/inter";

export default function Header() {
  let [fontsLoaded] = useFonts({
    Inter_900Black,
  });

  if (!fontsLoaded) {
    return (
      <ActivityIndicator
        style={{ justifyContent: "center", alignItems: "center", flex: 1 }}
        size={"large"}
      />
    );
  }

  return (
    <View>
      <Text style={styles.contenedor}>Criptomonedas</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: { fontFamily: "Inter_900Black", paddingTop: 50 },
});
