import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const Solicitud = ({ navigation }) => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState('');

  const Navegacion = () => {
    navigation.navigate('Navegacion', { name, email, phone });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Por favor complete la información que se solicita a continuación: </Text>
      <View style={styles.inputsContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Nombre:</Text>
          <View style={styles.textInputWrapper}>
            <TextInput
              style={styles.input}
              placeholder="Nombre"
              placeholderTextColor="#999"
              value={name}
              onChangeText={text => setName(text)}
            />
            <View style={styles.line} />
          </View>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Correo Electrónico:</Text>
          <View style={styles.textInputWrapper}>
            <TextInput
              style={styles.input}
              placeholder="Correo Electrónico"
              placeholderTextColor="#999"
              value={email}
              onChangeText={text => setEmail(text)}
            />
            <View style={styles.line} />
          </View>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Teléfono:</Text>
          <View style={styles.textInputWrapper}>
            <TextInput
              style={styles.input}
              placeholder="Teléfono"
              placeholderTextColor="#999"
              value={phone}
              onChangeText={text => setPhone(text)}
            />
            <View style={styles.line} />
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.circleButton} onPress={Navegacion}>
        <Text style={styles.buttonText}>➜</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 30,
    color: 'green',
    textAlign: 'center',
  },
  inputsContainer: {
    width: '90%',
  },
  inputContainer: {
    marginBottom: 30,
  },
  label: {
    marginBottom: 5,
    color: 'green',
  },
  textInputWrapper: {
    position: 'relative',
  },
  input: {
    height: 40,
    backgroundColor: 'transparent',
    paddingHorizontal: 10,
    color: '#333',
  },
  line: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 1,
    backgroundColor: 'black',
  },
  circleButton: {
    position: 'absolute',
    bottom: 50,
    right: 20,
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 24,
    color: 'white',
  },
});

export default Solicitud;