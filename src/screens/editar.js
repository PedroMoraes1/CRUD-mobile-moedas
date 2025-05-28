import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  Alert,
  Platform,
  StatusBar,
  SafeAreaView
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { launchImageLibraryAsync, MediaTypeOptions } from 'expo-image-picker';
import axios from 'axios'; // <-- Importação do axios

export default function Editar() {
  const navigation = useNavigation();
  const route = useRoute();
  const { coin } = route.params || {};

  const [nome, setNome] = useState('');
  const [ano, setAno] = useState('');
  const [pais, setPais] = useState('');
  const [preco, setPreco] = useState('');
  const [imagemUrl, setImagemUrl] = useState(null);

  useEffect(() => {
    if (coin) {
      setNome(coin.nome);
      setAno(coin.ano ? coin.ano.toString() : '');
      setPais(coin.pais);
      setPreco(coin.preco ? coin.preco.toString().replace('.', ',') : '');
      setImagemUrl(coin.imagemUrl);
    }
  }, [coin]);

  const handleUpdate = async () => {
    if (!nome || !ano || !pais || !preco || !imagemUrl) {
      Alert.alert('Erro', 'Preencha todos os campos e adicione uma imagem');
      return;
    }

    const moeda = {
      id: coin?.id,
      nome,
      ano: parseInt(ano),
      pais,
      preco: parseFloat(preco.replace(',', '.')), // <-- Envia como número (BigDecimal)
      imagemUrl,
    };

    try {
      if (coin) {
        await axios.put(`https://crud-mobile-moedas.onrender.com/api/moedas/${coin.id}`, moeda);
        Alert.alert('Sucesso', 'Moeda atualizada!');
      } else {
        await axios.post('https://crud-mobile-moedas.onrender.com/api/moedas', moeda);
        Alert.alert('Sucesso', 'Moeda adicionada com sucesso!');
      }
      navigation.navigate('Home');
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível salvar a moeda.');
    }
  };

  const handleImagePick = async () => {
    const result = await launchImageLibraryAsync({
      mediaTypes: MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setImagemUrl(result.assets[0].uri);
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
            <Image
              source={{ uri: imagemUrl }}
              style={styles.image}
            />
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
          <Text style={styles.buttonText}>Salvar</Text>
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
    backgroundColor: '#fff'
  },
  backButton: {
    marginBottom: 20
  },
  backButtonText: {
    fontSize: 24
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
    borderRadius: 8
  },
  imagePlaceholder: {
    fontSize: 32
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    borderRadius: 8,
    marginBottom: 15,
    fontSize: 16
  },
  galleryIcon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    opacity: 0.6
  },
button: {
  backgroundColor: '#2563EB',
  padding: 15,
  borderRadius: 8,
  marginTop: 10,
  alignItems: 'center',
  width: '100%' // <- mesmo tamanho dos TextInput
},

buttonText: {
  color: '#fff',
  fontWeight: 'bold',
  fontSize: 16,            // Valor original maior
},

});
