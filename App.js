import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Input from './src/componentes/inputs';
import Boton from './src/componentes/boton';

export default function App() {

  const [numero1, setNumero1] = useState(0);
  const [numero2, setNumero2] = useState(0);
  const [resultado, setResultado] = useState(0);

  const sumar = () =>{
    setResultado(parseFloat(numero1) + parseFloat(numero2));
  }

  const restar = () =>{
    setResultado(parseFloat(numero1) - parseFloat(numero2));

  }

  const multiplicar = () =>{
    setResultado(parseFloat(numero1) * parseFloat(numero2));
  }

  const division = () =>{
    setResultado(parseFloat(numero1) /  parseFloat(numero2));
  }
 
  return (
    <View style={styles.container}>
      <Text style= {styles.texto}>Calculadora de oreo</Text>
      <StatusBar style="auto" />
      <Input
        text = "Número 1"
        valor_numero = {numero1}
        setNumero = {setNumero1}
      />
      <Input
        text = "Número 2"
        valor_numero = {numero2}
        setNumero = {setNumero2}
      />
      <Boton
        text={"Sumar"}
        funcion = {sumar}
      />
      <Boton
        text={"Restar"}
        funcion = {restar}
      />
      <Boton
        text={"Multiplicar"}
        funcion = {multiplicar}
      />
      <Boton
        text={"Dividir"}
        funcion = {division}
      />
      <Text style={styles.resul}>
        Resultado: {resultado}
      </Text>


    </View>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    color: '#982649',
    fontSize: 30,
    padding: 10
  },
  resul:{
    color:'black',
    fontSize: 30,
  },

});
