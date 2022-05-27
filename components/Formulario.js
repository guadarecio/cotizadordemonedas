import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import { useFonts, Inter_900Black } from "@expo-google-fonts/inter";
import { Picker } from "@react-native-picker/picker";
import axios from "axios";

export default function Formulario() {
  const [moneda, guardarMoneda] = useState("");
  const [criptomoneda, guardarCriptoMoneda] = useState("");
  const [criptomonedas, guardarCriptoMonedas] = useState("");

  useEffect(() => {
    const consultarAPI = async () => {
      const url =
        "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";
      const resultado = await axios.get(url);
      guardarCriptoMonedas(resultado.data.Data);
    };

    consultarAPI();
  }, []);

  const obtenerMoneda = (moneda) => {
    console.log(moneda);
  };

  const obtenerCriptoMoneda = (cripto) => {
    guardarCriptoMoneda(cripto);
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
        itemStyle={{ height: 120 }}
      >
        <Picker.Item label="-Seleccione-" value="" />
        <Picker.Item label="Dolar EE.UU" value="USD" />
        <Picker.Item label="Peso Mexicano" value="MXN" />
        <Picker.Item label="Euro" value="EUR" />
        <Picker.Item label="Libra Esterlina" value="GBP" />
      </Picker>

      <Text style={styles.label}>Criptomoneda</Text>

      <Picker
        selectedValue={criptomoneda}
        onValueChange={(cripto) => obtenerCriptoMoneda(cripto)}
        itemStyle={{ height: 120 }}
      >
        <Picker.Item label="-Seleccione-" value="" />
        {criptomonedas.map((cripto) => (
          <Picker.Item
            key={cripto.CoinInfo.Id}
            label={cripto.CoinInfo.FullName}
            value={cripto.CoinInfo.Name}
          />
        ))}
      </Picker>
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
