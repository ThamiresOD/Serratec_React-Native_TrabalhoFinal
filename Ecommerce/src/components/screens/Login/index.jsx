import React from "react";
import { View, Text, Image, TouchableOpacity, TextInput, } from "react-native";
import { styles } from "./styles";
import * as Animatable from 'react-native-animatable'
import { useNavigation } from "@react-navigation/native";

// export const Login = () =>  {
//     return (
//         <View style={styles.container}>
//             <View style={styles.containerAdereco1}>
//             <Image source={require('../../Images/adereco1.png')}
//                 style={styles.imgAdereco1}/>
//             </View> 
//             <View style={styles.container2}>   
//                 <View style={styles.containerLogo}>
//                     <Image source={require('../../Images/Vector.png')}
//                     style={styles.imgLogo}/>
//                 </View>
//                 <View style={styles.containerAdereco2}>
//                     <Image source={require('../../Images/adereco2.png')}
//                     style={styles.imgAdereco2}/>
//                 </View>
//             </View>
//             <View style={styles.container3}>
//                 <View style={styles.containerAdereco3}>
//                     <Image source={require('../../Images/adereco1.png')}
//                     style={styles.imgAdereco3}/>
//                 </View>
//                 <View style={styles.listaInput}>
//                     <View style={styles.input1}>
//                         <TextInput style={styles.textoInput1}
//                         placeholder="Digite seu login" />
//                     </View>
//                     <View style={styles.input2}>
//                     <TextInput style={styles.textoInput2}
//                         placeholder="Digite sua senha" />
//                     </View>
//                     <TouchableOpacity><Text style={styles.textoBotao}>Esqueci minha senha</Text></TouchableOpacity>
//                 </View>
//             </View>
//             <View style={styles.container4}>
//                 <TouchableOpacity style={styles.botaoLogin}><Text style={styles.textoBotaoLogin}>Log In</Text></TouchableOpacity>
//             </View>
//             <View style={styles.containerAdereco4}>
//                 <Image source={require('../../Images/adereco3.png')}
//                     style={styles.imgAdereco4}/>
//             </View>
//         </View>

//     );
// }

export const Login = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <Animatable.Image
          animation='fadeInDown'
          source={require('../../Images/logo.jpg')}
          style={styles.imgLogo}
        />
      </View>
      <Animatable.View
        animation='fadeInUp' delay={600}
        style={styles.listaInput}>
        <View style={styles.Input1}>
          <TextInput style={styles.textoInput1}
            placeholder="Digite seu login" />
        </View>

        <View style={styles.Input2}>
          <TextInput style={styles.textoInput2}
            placeholder="Digite sua senha" />
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('RecuperarSenha')}><Text style={styles.textoBotao}>Esqueci minha senha</Text></TouchableOpacity>
        <TouchableOpacity style={styles.botaoLogin}><Text style={styles.textoBotaoLogin}>Log In</Text></TouchableOpacity>
      </Animatable.View>
    </View>
  )
}