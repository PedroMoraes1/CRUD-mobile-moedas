import React, { useState, useEffect, useCallback } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
  StyleSheet,
  Modal,
  SafeAreaView,
  Platform,
  StatusBar,
  Alert
} from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import axios from 'axios';
const API_URL = 'https://crud-mobile-moedas.onrender.com/api/moedas';

export default function Home() {
  const navigation = useNavigation();
  const [coins, setCoins] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedCoin, setSelectedCoin] = useState(null);
  const [search, setSearch] = useState('');

  // Carregar moedas do backend
  const fetchCoins = async () => {
    try {
      const response = await axios.get(API_URL);
      setCoins(response.data);
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível carregar as moedas.');
    }
  };

  useEffect(() => {
    fetchCoins();
  }, []);

  // Atualiza lista ao voltar do editar/adicionar
  useFocusEffect(
    useCallback(() => {
      fetchCoins();
    }, [])
  );

  const handleDelete = async () => {
    if (selectedCoin) {
      try {
        await axios.delete(`${API_URL}/${selectedCoin.id}`);
        setModalVisible(false);
        fetchCoins();
      } catch (error) {
        Alert.alert('Erro', 'Não foi possível excluir a moeda.');
      }
    }
  };

  const openModal = (coin) => {
    setSelectedCoin(coin);
    setModalVisible(true);
  };

  // FILTRO atualizado — busca por iniciais do país
  const filteredCoins = coins.filter(coin => {
    if (!search) return true; // se busca vazia, mostra todas
    const paisLower = coin.pais?.toLowerCase() || '';
    const searchLower = search.toLowerCase();
    return paisLower.startsWith(searchLower);
  });

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.logoContainer}>
            <Text style={styles.logoText}>W</Text>
            <Image source={require('../assets/imagens/moedas/moeda.png')} style={styles.logoIcon} />
            <Text style={styles.logoText}>rldCoin</Text>
          </View>

          <TouchableOpacity onPress={() => navigation.navigate('Adicionar')} style={styles.addButton}>
            <Text style={styles.addButtonText}>Adicionar</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Busque o país"
            value={search}
            onChangeText={setSearch}
            placeholderTextColor="#888"
          />
          <Image
            source={require('../assets/imagens/icones/lupa.png')}
            style={styles.searchIcon}
          />
        </View>

        <Text style={styles.sectionTitleCentered}>Coleção pessoal</Text>

        <ScrollView>
          {filteredCoins.length === 0 ? (
            <Text style={{ textAlign: 'center', marginTop: 30, color: '#888' }}>
              Nenhuma moeda encontrada.
            </Text>
          ) : (
            filteredCoins.map((coin) => (
              <View key={coin.id} style={styles.card}>
                <Image
                  source={
                    coin.imagemUrl
                      ? { uri: coin.imagemUrl }
                      : require('../assets/imagens/icones/galeria.png')
                  }
                  style={styles.image}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = require('../assets/imagens/icones/galeria.png');
                  }}
                />
                <View style={styles.cardContent}>
                  <Text style={styles.coinTitle}>{coin.nome} {coin.ano}</Text>
                  <Text style={styles.coinCountry}>{coin.pais}</Text>
                  <Text style={styles.coinPrice}>
                    {Number(coin.preco).toFixed(2).replace('.', ',')}
                  </Text>
                </View>
                <View style={styles.actions}>
                  <TouchableOpacity onPress={() => navigation.navigate('Editar', { coin })}>
                    <Image source={require('../assets/imagens/icones/editar icone.png')} style={styles.iconImage} />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => openModal(coin)}>
                    <Image source={require('../assets/imagens/icones/excluir-icone.png')} style={styles.iconImage} />
                  </TouchableOpacity>
                </View>
              </View>
            ))
          )}
        </ScrollView>

        <Modal visible={modalVisible} transparent animationType="fade">
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalText}>Tem certeza que deseja excluir?</Text>
              <View style={styles.modalButtons}>
                <TouchableOpacity onPress={handleDelete} style={styles.modalButtonYes}>
                  <Text style={styles.modalButtonText}>sim</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.modalButtonNo}>
                  <Text style={styles.modalButtonText}>não</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
}

