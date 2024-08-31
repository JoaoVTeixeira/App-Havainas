import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import AuthServices from './services/AuthServices';
import { useNavigation } from '@react-navigation/native';

const Login = () => {

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const navigation = useNavigation();


  const handleLogin = async () => {
    

    body= {
      email: email,
      password: senha
    }

    try {
      const login = await AuthServices.login(body)
      navigation.navigate('Home',{token: login.data.token})

    } catch (error) {
      console.error(error);
    }

  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>Bem-vindo à Loja Havaianas</Text>
        <TextInput
          label="Email"
          style={styles.input}
          onChangeText={setEmail}
          mode="outlined"

        />
        <TextInput
          label="Senha"
          secureTextEntry
          style={styles.input}
          onChangeText={setSenha}
          mode="outlined"
        />
        <Button
          mode="contained"
          onPress={() => handleLogin()}
          style={styles.button}
        >
          Entrar
        </Button>

      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#e0f7fa', 
  },
  innerContainer: {
    width: '100%',
    maxWidth: 400, 
    padding: 20,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    elevation: 5,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
    color: '#004D40',
    textAlign: 'center',
  },
  input: {
    width: '100%',
    marginBottom: 10,
  },
  button: {
    width: '100%',
    padding: 10,
    backgroundColor: '#004D40',
  },
  footerText: {
    marginTop: 20,
    fontSize: 16,
    textAlign: 'center',
  },
  link: {
    color: '#004D40',
    fontWeight: 'bold',
  },
});

export default Login;
