import React from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import { useFonts, Inter_900Black } from "@expo-google-fonts/inter";

export default function Formulario() {
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
      <Text style={styles.label}>Moneda</Text>
      <Text style={styles.label}>Criptomoneda</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    fontFamily: "Inter_900Black",
    textTransform: "uppercase",
    fontSize: 22,
    marginVertical: 20,
  },
});
