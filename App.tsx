import { StyleSheet, View } from 'react-native';
import Button from './src/components/Button';
import Input from './src/components/Input';

export default function App() {
  return (
    <View style={styles.container}>
      <Button title="Press me" onPress={() => console.log('Button pressed')} />
      <Button
        title="React Native"
        onPress={() => console.log('React Native')}
      />
      <Input borderColor="#3498db" />
      <Input borderColor="#9b59b6" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
  },
});
