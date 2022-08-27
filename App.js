import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import Form from './src/components/Form/Form';
import Title from './src/components/Title/Title';
import Idade from './src/components/Idade/Idade'
import Fatorial from './src/components/Fatorial/Fatorial'
import { NavigationContainer } from '@react-navigation/native';
import{ createNativeStackNavigator } from '@react-navigation/native-stack'
import Casa from './src/components/Homme/Casa';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Casa'>
        <Stack.Screen name='Form' component={Form}/>
        <Stack.Screen name="Casa" component={Casa}/>
        <Stack.Screen name="Idade" component={Idade}/>
        <Stack.Screen name='Fatorial' component={Fatorial}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}