import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

export default function Perfil() {
    const handleSignUp = () => {
        router.push('/tabs/consultas');
      };
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Meu perfil</Text>

      <View style={styles.profileImageContainer}>
      <Image source={require('../../assets/img_usuario.png')} style={styles.logo} />
      </View>


      <Text style={styles.sectionTitle}>Informações pessoais</Text>
      <Text style={styles.infoText} onPress={handleSignUp}>Maria Cecília Queiroz de Almeida</Text>
      <Text style={styles.infoText}>23/02/2007</Text>
      <Text style={styles.infoText}>Macatuba - São Paulo</Text>


      <View style={styles.separator} />


      <Text style={styles.sectionTitle}>Histórico médico</Text>
      <Text style={styles.infoText}>• Falta de ar</Text>
      <Text style={styles.infoText}>• cansaço extremo</Text>


    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1E6FB6',
    marginBottom: 20,
  },
  profileImageContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#ccc',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1E6FB6',
    marginTop: 10,
    marginBottom: 5,
  },
  infoText: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    marginBottom: 5,
  },
  separator: {
    height: 1,
    width: '90%',
    backgroundColor: '#ccc',
    marginVertical: 20,
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#ccc',
  }
});
