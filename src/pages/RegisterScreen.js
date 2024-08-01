import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { TextInput, Button, Text, Checkbox } from 'react-native-paper';

const Register = ({ navigation }) => {
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>Crie sua conta</Text>
        <TextInput
          label="Nome"
          style={styles.input}
          mode="outlined"
        />
        <TextInput
          label="Email"
          style={styles.input}
          mode="outlined"
        />
        <TextInput
          label="Senha"
          secureTextEntry
          style={styles.input}
          mode="outlined"
        />
        <View style={styles.checkboxContainer}>
          <Checkbox
            status={isAdmin ? 'checked' : 'unchecked'}
            onPress={() => {
              setIsAdmin(!isAdmin);
            }}
            color="#004D40" 
            uncheckedColor="#004D40"
            style={styles.checkbox} // Estilo aplicado diretamente ao checkbox
          />
          <Text style={styles.checkboxLabel}>Admin</Text>
        </View>
        <Button 
          mode="contained" 
          onPress={() => navigation.navigate('Home')} 
          style={styles.button}
        >
          Cadastrar
        </Button>
        <Text style={styles.footerText}>
          Já tem uma conta? 
          <Text onPress={() => navigation.navigate('Login')} style={styles.link}> Faça login</Text>
        </Text>
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
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  checkbox: {
    padding: 4,
     width: 24,
    height: 24,
  },
  checkboxLabel: {
    marginLeft: 8,
    fontSize: 16,
    color: '#004D40',
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

export default Register;
