import React, {useState} from 'react';
import {StyleSheet, Text } from 'react-native';

const Comp1 = (props) => {
    const [cor] = useState(props.cor);

    return(
        <Text style={[estilos.txt1, {color: cor}]}>
        Curso de {props.curso}: Nota {props.nota}
        </Text>
    );
};
export default Comp1;

const estilos = StyleSheet.create({
    txt1:{
      // color:'#000',
        fontSize:20,
    },
    txt2:{
        color: '#00f',
        fontSize: 15,
    },
});
