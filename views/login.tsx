import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordIcon, setShowPasswordIcon] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const toggleShowPasswordIcon = () => {
    setShowPasswordIcon(!showPasswordIcon);
  };

  const OTP = () => {
    console.log('Email:', email);
    console.log('Password:', password);
    navigation.navigate('OTP');
  };

  return (
    <LinearGradient
      colors={['#FFFFFF', '#FCD9D9', '#1C5715']}
      style={styles.container}
    >
      <Image
        source={require('./starbucks_logo.png')}
        style={styles.logo}
      />
      <Text style={styles.title}>¡Bienvenido! Por favor, regístrese</Text>
      <TextInput
        placeholder="Correo Electrónico"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        style={styles.input}
      />
      <TextInput
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={!showPassword}
        style={[styles.input, styles.passwordInput]}
      />
      <View style={styles.passwordOptionsContainer}>
        <View style={styles.passwordOption}>
          <TouchableOpacity onPress={toggleShowPassword}>
            <View style={[styles.passwordOptionCircle, showPasswordIcon && styles.passwordOptionCircleFilled]}></View>
          </TouchableOpacity>
          <TouchableOpacity onPress={toggleShowPassword}>
            <Text style={styles.passwordOptionText}>Mostrar Contraseña</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => { }} style={styles.forgotPassword}>
          <Text style={styles.forgotPasswordText}>¿Olvidaste tu contraseña?</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.loginButton}
        onPress={OTP}
      >
        <Text style={styles.loginButtonText}>Iniciar Sesión</Text>
      </TouchableOpacity>
      <Text style={styles.policyText}>
        Al iniciar sesión, aceptas los
      </Text>
      <Text style={styles.privacyText}>
        Términos del Servicio y la Política de Privacidad
      </Text>
      <Text style={styles.signUpText}>
        ¿No eres miembro? Regístrate ahora
      </Text>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 16,
    marginBottom: 20,
    color: 'green',
    alignSelf: 'flex-start',
  },
  input: {
    borderWidth: 2,
    borderColor: 'gray',
    padding: 10,
    marginBottom: 15,
    width: '100%',
    borderRadius: 20,
    backgroundColor: 'white',
  },
  passwordInput: {
    marginBottom: 10,
  },
  passwordOptionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
    width: '100%',
  },
  passwordOption: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  passwordOptionCircle: {
    width: 10,
    height: 10,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: 'black',
  },
  passwordOptionCircleFilled: {
    backgroundColor: 'black',
  },
  passwordOptionText: {
    color: 'green',
    marginLeft: 5,
    fontSize: 10,
  },
  forgotPasswordText: {
    color: 'green',
    fontSize: 10,
  },
  forgotPassword: {},
  policyText: {
    marginTop: 60,
    textAlign: 'center',
    color: 'black',
    fontSize: 11,
  },
  privacyText: {
    marginTop: 5,
    textAlign: 'center',
    color: 'white',
    fontSize: 11,
  },
  signUpText: {
    marginTop: 50,
    textAlign: 'center',
    color: 'white',
    fontSize: 11,
  },
  logo: {
    width: 200,
    height: 100,
    marginBottom: 20,
  },
  loginButton: {
    backgroundColor: 'green',
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 40,
    marginBottom: 20,
  },
  loginButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Login;