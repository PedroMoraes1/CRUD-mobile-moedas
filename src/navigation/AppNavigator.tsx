import * as React from 'react';
// Corrigido: importação correta do createNativeStackNavigator
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Importando as telas
import Home from '../screens/home';
import Adicionar from '../screens/adicionar';
import Editar from '../screens/editar';

// Criando o tipo de rotas para TypeScript (opcional, mas recomendado)
export type RootStackParamList = {
  Home: undefined;
  Adicionar: undefined;
  Editar: { coin?: any }; // Pode ajustar o tipo da moeda depois
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Adicionar" component={Adicionar} />
      <Stack.Screen name="Editar" component={Editar} />
    </Stack.Navigator>
  );
}

// Instalação da dependência necessária
// npm install @react-navigation/native-stack
