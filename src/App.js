

import React from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';
import foto from './assets/fabricio.jpg';
import Icon from 'react-native-vector-icons/Feather';

const App = () => {
  return (
      <View style={style.page}>
        <View style={style.container_cabecalho}>
          <Image source={foto} style={style.foto}/>
          <Text style={style.nome}>FabricioCintras</Text>
          <Text style={style.funcao}>Desenvolvedor Mobile</Text>
          <View style={style.redesSociais}>
            <Icon name="github" size={30}/>
            <Icon name="facebook" size={30}/>
            <Icon name="linkedin" size={30}/>
          </View>
        </View>
      </View>
    );
}

const style = StyleSheet.create({
  page:{
    backgroundColor: '#e7e7e7',
    flex:1,
  },
  container_cabecalho:{
    alignItems:'center',
    justifyContent:'center',
    marginTop:50
  },
  foto:{
    width: 250,
    height:250,
    borderRadius:125
  },
  nome:{
    fontSize:26,
    fontWeight:'bold', 
    marginTop:10 
  },
  funcao:{
    color:'#939393',
    marginBottom:10
  },
  redesSociais:{
    flexDirection:'row',
    justifyContent:'space-between',
    width:'60%',
    marginTop:20
  }
})

export default App;
