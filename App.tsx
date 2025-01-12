import styled from '@emotion/native';
import { ThemeProvider } from '@emotion/react';
import { useState } from 'react';
import { Switch } from 'react-native';
import Button from './src/components/Button';
import Input from './src/components/Input';
import { darkTheme, lightTheme } from './src/constants/theme';

const Container = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export default function App() {
  const [theme, setTheme] = useState(lightTheme);

  const onValueChange = () => {
    setTheme((state) => (state === lightTheme ? darkTheme : lightTheme));
  };

  return (
    <ThemeProvider theme={theme}>
      <Container
        style={{
          backgroundColor: theme.backgroundColor,
        }}
      >
        <Switch value={theme === darkTheme} onValueChange={onValueChange} />
        <Button
          title="Press me"
          onPress={() => console.log('Button pressed')}
        />
        <Button
          title="React Native"
          onPress={() => console.log('React Native')}
        />
        <Input borderColor={theme.primary} />
        <Input borderColor={theme.secondary} />
      </Container>
    </ThemeProvider>
  );
}
