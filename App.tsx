import React from 'react';
import {StyleSheet, View} from 'react-native';
import C1 from './Componentes/Comp1';

/*Componentes de função*/
export default function App1(){
  return (
    <View style = {estilos.conteiner} >
      <C1 curso="React Native" nota="10" cor="#ff1"/>
      <C1 curso="C++" nota="10" cor="#901" />
      <C1 curso="Javascript" nota="10" cor="#128" />
    </View>
  );
}
const estilos = StyleSheet.create({
  conteiner:{
    flex:1,
    backgroundColor:'#ddd',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
