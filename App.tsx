import { StyleSheet, View } from 'react-native';
import Button from './src/components/Button';

export default function App() {
  return (
    <View style={styles.container}>
      <Button title="Press me" onPress={() => console.log('Button pressed')} />
      <Button
        title="React Native"
        onPress={() => console.log('React Native')}
      />
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
