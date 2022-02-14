import { RouteProp,  useRoute, useNavigation } from '@react-navigation/native'
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { IMarker } from '../Home';

type DetailRoute = RouteProp<{ detail: IMarker }, 'detail' >

export default function Detail() {

  const { params } = useRoute<DetailRoute>();
  const [address, setAdress] = useState<any>();

  const navigation = useNavigation()

  useEffect(() => {
    fetch(`https://nominatim.openstreetmap.org/reverse?lat=${params.latitude}&lon=${params.longitude}&format=json`).then(async (request) => {
      const data = await request.json();

      setAdress(data);
      
      navigation.setOptions({
        title: params.name
      })

    })
  }, [])

  return(
    <View style={ styles.container }>
      <Text style={ styles.title }>{ params.name }</Text>
      <Text style={ styles.subtitle }>{ params.description }</Text>
      <Text style={ styles.section }>Endereço</Text>
      <Text style={ styles.text }>{ address ?.address.road }</Text>
      <Text style={ styles.text }>{ address ?.address.city }</Text>
      <Text style={ styles.text }>{ address ?.address.postcode }</Text>
      <Text style={ styles.text }>{ address ?.address.stade }</Text>

      <Text style={ styles.section }>Contato</Text>
      <Text style={ styles.text }>{ params.contact }</Text>





    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: '#f0f0f5'
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#322155'
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '400',
    color: '#6c6c80'
  },
  section: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingTop: 20,
    color: '#322155'
  },
  text: {
    fontSize: 16,
    fontWeight: '400',
    color: '#6c6c80'
  }
})