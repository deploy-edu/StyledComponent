import styled from '@emotion/native';
import Button from './src/components/Button';
import Input from './src/components/Input';

const Container = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
  gap: 20;
`;

export default function App() {
  return (
    <Container>
      <Button title="Press me" onPress={() => console.log('Button pressed')} />
      <Button
        title="React Native"
        onPress={() => console.log('React Native')}
      />
      <Input borderColor="#3498db" />
      <Input borderColor="#9b59b6" />
    </Container>
  );
}
