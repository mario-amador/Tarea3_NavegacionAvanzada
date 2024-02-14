import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const CircleInput = ({ value }) => (
  <View style={styles.circle}>
    <Text style={styles.circleText}>{value}</Text>
  </View>
);

const CircleButton = ({ onPress }) => (
  <TouchableOpacity style={styles.circleButton} onPress={onPress}>
    <Text style={styles.buttonText}>➜</Text>
  </TouchableOpacity>
);

const OTP = ({ navigation }) => {
  const [digit1, setDigit1] = useState('');
  const [digit2, setDigit2] = useState('');
  const [digit3, setDigit3] = useState('');
  const [digit4, setDigit4] = useState('');

  return (
    <View style={{ flex: 1, alignItems: 'center', marginTop: 50 }}>
      <Text style={{ textAlign: 'center', color: 'green', fontSize: 15 }}>
        Solo tienes que ingresar un código OTP que te enviamos vía SMS a tu número de teléfono registrado +50431547156
      </Text>
      <Text style={{ fontSize: 16, fontWeight: 'bold', alignSelf: 'flex-start', marginLeft: 50, marginTop: 10, color: 'black' }}>OTP</Text>
      <View style={{ flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'center', marginTop: 10 }}>
        <CircleInput value={digit1} />
        <CircleInput value={digit2} />
        <CircleInput value={digit3} />
        <CircleInput value={digit4} />
        <Text style={{ alignSelf: 'center', marginLeft: 130, color: 'black' }}>00:30</Text>
      </View>
      <View style={styles.imageAndButtonContainer}>
        <Image source={require('./starbucks.png')} style={{ width: 370, height: 350, opacity: 0.3, marginLeft: -160 }} resizeMode="contain" />
        <CircleButton onPress={() => navigation.navigate('Solicitud')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  circle: {
    width: 20,
    height: 20,
    borderRadius: 20,
    backgroundColor: 'lightgray',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  circleText: {
    fontSize: 20,
    textAlign: 'left',
    paddingLeft: 5,
  },
  circleButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
  },
  imageAndButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 50,
    alignItems: 'center',
  },
});

export default OTP;