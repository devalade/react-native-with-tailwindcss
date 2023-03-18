import { StatusBar } from 'expo-status-bar';
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
} from 'react-native';

function SimpleCard() {
  return (
    <View className='border-4 p-2 rounded-md border-blue-600 mb-3'>
      <View className='flex flex-row justify-between items-center ml-4'>
        <Text className='text-gray-700 font-semibold text-lg'>Energy</Text>
        <Pressable>
          <View className='p-3 bg-blue-600 rounded-md'>
            <Text className='text-blue-50'>Connect</Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
}

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar style='auto' />
      <View className='px-4'>
        <SimpleCard />
        <SimpleCard />
        <SimpleCard />
        <SimpleCard />
      </View>
    </SafeAreaView>
  );
}
