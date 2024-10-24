import styled from '@emotion/native';
import { FC } from 'react';

type ButtonContainerProps = {
  title: string;
};

const ButtonContainer = styled.TouchableOpacity<ButtonContainerProps>`
  background-color: ${(props) =>
    props.title === 'React Native'
      ? props.theme.primary
      : props.theme.secondary};
  border-radius: 15px;
  padding: 15px 40px;
  justify-content: center;
`;

const Title = styled.Text`
  color: white;
  font-weight: 600;
  font-size: 20px;
`;

type Props = {
  title: string;
  onPress: () => void;
};

const Button: FC<Props> = ({ title, onPress }) => {
  return (
    <ButtonContainer onPress={onPress} title={title}>
      <Title>{title}</Title>
    </ButtonContainer>
  );
};

export default Button;
