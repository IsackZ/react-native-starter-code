import { Text, StyleSheet } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';
function Home(){

return(

<Text> Home</Text>

);

}

function Voice_translate(){

return(

<AssetExample/>

);

}
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer> 
    
      <Tab.Navigator>
    
      <Tab.Screen name = "Home" component = {Home}/>
      <Tab.Screen name = "Voice Translate" component = {Voice_translate}/>
    
      </Tab.Navigator>

    
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
