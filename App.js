import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import Cotizacion from "./components/Cotizacion";
import axios from "axios";

const App = () => {
  const [moneda, guardarMoneda] = useState("");
  const [criptomoneda, guardarCriptoMoneda] = useState("");
  const [consultarAPI, guardarConsultarAPI] = useState(false);
  const [resultado, guardarResultado] = useState({});

  useEffect(() => {
    const cotizarCriptomoneda = async () => {
      if (consultarAPI) {
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;
        const resultado = await axios.get(url);

        console.log(resultado.data.DISPLAY[criptomoneda][moneda]);

        guardarResultado(resultado.data.DISPLAY[criptomoneda][moneda]);

        guardarConsultarAPI(false);
      }
    };
    cotizarCriptomoneda();
  }, [consultarAPI]);

  return (
    <>
      <ScrollView>
        <Header />
        <Image
          style={styles.imagen}
          source={require("./assets/img/cryptomonedas.png")}
        />

        <View style={styles.contenido}>
          <Formulario
            moneda={moneda}
            criptomoneda={criptomoneda}
            guardarMoneda={guardarMoneda}
            guardarCriptoMoneda={guardarCriptoMoneda}
            guardarConsultarAPI={guardarConsultarAPI}
          />
        </View>

        <Cotizacion resultado={resultado} />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  imagen: {
    width: "100%",
    height: 150,
    marginHorizontal: "2.5%",
  },

  contenido: {
    marginHorizontal: "2.5%",
  },
});

export default App;
