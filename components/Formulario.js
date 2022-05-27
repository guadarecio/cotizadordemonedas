import React, { useState } from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import { useFonts, Inter_900Black } from "@expo-google-fonts/inter";
import { Picker } from "@react-native-picker/picker";

export default function Formulario() {
  const [moneda, guardarMoneda] = useState("");
  const [criptomoneda, guardarCriptoMoneda] = useState("");
  const obtenerMoneda = (moneda) => {
    guardarMoneda(moneda);
  };

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

      <Picker
        selectedValue={moneda}
        onValueChange={(moneda) => obtenerMoneda(moneda)}
      >
        <Picker.Item label="-Seleccione-" value="" />
        <Picker.Item label="Dolar EE.UU" value="USD" />
        <Picker.Item label="Peso Mexicano" value="MXN" />
        <Picker.Item label="Euro" value="EUR" />
        <Picker.Item label="Libra Esterlina" value="GBP" />
      </Picker>

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
