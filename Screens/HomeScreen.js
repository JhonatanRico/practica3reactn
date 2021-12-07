import React, { useContext } from 'react';
import { Text, View, StyleSheet, Image, TouchableHighlight, Alert } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { LibreriaContext } from '../Context/LibreriaContext';
export default function HomeScreen() {
const { catalogo, agregarWishList, eliminarWishList, agregarCarro } = useContext(LibreriaContext);

  return (
    <View>
      <ScrollView>
        {catalogo.map((a, i) => (
          <Card>
            <Card.Title>{a.titulo}</Card.Title>
            <Text>Precio = ${a.precio} </Text>
            <Text>Idioma = {a.idioma}</Text>
            <View style={styles.container}>
              <TouchableHighlight onPress={()=>agregarCarro(a)}>
                <Ionicons name={'cart-outline'} size={40} color={'green'} />
              </TouchableHighlight>
              {a.desactivado === false ? (
                <TouchableHighlight onPress={() => agregarWishList(a)}>
                  <Ionicons name={'heart-outline'} size={40} color={'red'} />
                </TouchableHighlight>
              ) : (
                <TouchableHighlight onPress={() => eliminarWishList(a)}>
                  <Ionicons name={'heart-dislike-outline'} size={40} color={'red'} />
                </TouchableHighlight>
              )}
            </View>
          </Card>
        ))}
      </ScrollView>
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
});
