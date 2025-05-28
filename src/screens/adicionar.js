import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  Alert,
  SafeAreaView,
  Platform,
  StatusBar
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker'; // alterei aqui para importar tudo como ImagePicker
import axios from 'axios';

export default function Adicionar() {
  const navigation = useNavigation();

  const [nome, setNome] = useState('');
  const [ano, setAno] = useState('');
  const [pais, setPais] = useState('');
  const [preco, setPreco] = useState('');
  const [imagemUrl, setImagemUrl] = useState(null);

  const handleUpdate = async () => {
    console.log('handleUpdate chamado');

    if (!nome || !ano || !pais || !preco || !imagemUrl) {
      Alert.alert('Erro', 'Preencha todos os campos e adicione uma imagem');
      return;
    }

    const precoNumber = parseFloat(preco.replace(',', '.'));
    if (isNaN(precoNumber)) {
      Alert.alert('Erro', 'Digite um preço válido (ex: 10,00)');
      return;
    }

    const moeda = {
      nome,
      ano: parseInt(ano),
      pais,
      preco: precoNumber,
      imagemUrl,
    };

    try {
      console.log('Enviando dados para o backend:', moeda);
      await axios.post('https://crud-mobile-moedas.onrender.com/api/moedas', moeda);
      Alert.alert('Sucesso', 'Moeda adicionada com sucesso!');
      navigation.goBack();
    } catch (error) {
      console.error('Erro ao adicionar moeda:', error.response?.data || error.message);
      Alert.alert('Erro', 'Não foi possível adicionar a moeda.');
    }
  };


  // Função para escolher a imagem do dispositivo
  const handleImagePick = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permissão negada', 'Precisamos de permissão para acessar a galeria.');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setImagemUrl(result.assets[0].uri); // pega a URI local da imagem
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Text style={styles.backButtonText}>←</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleImagePick} style={styles.imagePicker}>
          {imagemUrl ? (
            <Image source={{ uri: imagemUrl }} style={styles.image} />
          ) : (
            <Image
              source={require('../assets/imagens/icones/galeria.png')}
              style={styles.galleryIcon}
            />
          )}
        </TouchableOpacity>

        <TextInput
          placeholder="Digite o nome"
          value={nome}
          onChangeText={setNome}
          style={styles.input}
        />
        <TextInput
          placeholder="Digite o ano da moeda"
          value={ano}
          onChangeText={(text) => {
            const numericText = text.replace(/[^0-9]/g, '').slice(0, 4);
            if (text.length > 4 || /[^0-9]/.test(text)) {
              Alert.alert('Atenção', 'Ano deve conter até 4 dígitos numéricos');
            }
            setAno(numericText);
          }}
          keyboardType="numeric"
          style={styles.input}
        />
        <TextInput
          placeholder="Digite o país da moeda"
          value={pais}
          onChangeText={setPais}
          style={styles.input}
        />
        <TextInput
          placeholder="Digite um preço estimado (ex: 10,00)"
          value={preco}
          onChangeText={(text) => {
            let formattedText = text.replace(/[^0-9,]/g, '');
            const parts = formattedText.split(',');
            if (parts.length > 2) return;
            if (parts.length === 2 && parts[1].length > 2) {
              formattedText = parts[0] + ',' + parts[1].slice(0, 2);
            }
            setPreco(formattedText);
          }}
          keyboardType="numeric"
          style={styles.input}
        />

        <TouchableOpacity onPress={handleUpdate} style={styles.button}>
          <Text style={styles.buttonText}>Adicionar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  backButton: {
    marginBottom: 20,
  },
  backButtonText: {
    fontSize: 24,
  },
  imagePicker: {
    alignSelf: 'center',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    width: 120,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 8,
  },
  galleryIcon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    opacity: 0.6,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    borderRadius: 8,
    marginBottom: 15,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#2563EB',
    padding: 15,
    borderRadius: 8,
    marginTop: 10,
    alignItems: 'center',
    width: '100%',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
