import React, { useContext } from 'react';
import { Text, View, StyleSheet, Image, TouchableHighlight } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements';
import { FontAwesome } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { LibreriaContext } from '../Context/LibreriaContext';

export default function Wishlist() {
  const { carrito, total, eliminarCarrito, comprarCarrito, eliminarCarro } = useContext(LibreriaContext);
  return (
    <View>      
        {
        carrito.length === 0 
        ? 
          <View>
            <Image
              style={styles.logo}
              source={require('../Imagenes/Emptycarrito.png')}
            />
            <Text style={styles.paragraph}>Contenido del carrito vacio</Text>
          </View>
        :
          <ScrollView>
          <View>
            <Text style={styles.paragraph}>Total: ${total}</Text>
            <View style={styles.container2}>
            <FontAwesome.Button name="money" backgroundColor="#3b7bbf" onPress={()=>comprarCarrito()}>
              Pagar
            </FontAwesome.Button>
            <Text style={styles.paragraph}></Text>
            <FontAwesome.Button name="remove" backgroundColor="#c33d3c" onPress={()=>eliminarCarrito()}>
              Eliminar Contenido
            </FontAwesome.Button>
          </View>
        </View>
          {
            carrito.map((x)=>
            <Card>
            <Card.Title>{x.titulo}</Card.Title>
            <Text>Cantidad = {x.cantidad} </Text>
            <Text>Precio = $ {x.precio} c/u </Text>
            <Text>Importe = $ {x.importe}  </Text>
            <View style={styles.container}>
              <TouchableHighlight onPress={() => eliminarCarro(x)}>
                <Ionicons name={'remove-circle'} size={22} color={'red'} />
              </TouchableHighlight>
            </View>
            </Card>)
          }
           </ScrollView>      
        }      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 24,
    flexDirection: 'row',
  },
  container2: {
    flex: 1,
    alignItems: 'center',
  },
  paragraph: {
    margin: 24,
    marginTop: 10,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    height: 200,
    width: 225,
    margin: 50,
  },
});
