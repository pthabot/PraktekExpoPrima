import { View, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function index() {
  return (
      <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Profille" component={ProfilleScreen} />
          <Stack.Screen name="Gallery" component={GalleryScreen} />
      </Stack.Navigator>
  )
}