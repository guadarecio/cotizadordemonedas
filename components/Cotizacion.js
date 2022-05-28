import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Cotizacion = ({ resultado }) => {
  if (Object.keys(resultado).length === 0) return null;

  return <Text> El Precio de la Criptomoneda es de: {resultado.PRICE}</Text>;
};

export default Cotizacion;
